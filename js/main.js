// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 数字动画效果
function animateValue(element, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 监听滚动，触发数字动画
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            // Hero 统计数据动画
            if (element.classList.contains('hero-stats')) {
                const stats = element.querySelectorAll('.stat-number');
                stats.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('B')) {
                        animateValue(stat, 0, 10, 2000, '$', 'B+');
                    } else if (text.includes('万')) {
                        animateValue(stat, 0, 100, 2000, '', '万+');
                    }
                });
            }

            // 市场数据动画
            if (element.id === 'volume24h') {
                animateValue(element, 0, 125430000, 2000, '$', '');
            }
            if (element.id === 'activeMarkets') {
                animateValue(element, 0, 1247, 2000);
            }
            if (element.id === 'tvl') {
                animateValue(element, 0, 89200000, 2000, '$', '');
            }

            observer.unobserve(element);
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    const dataCards = document.querySelectorAll('.data-value');

    if (heroStats) observer.observe(heroStats);
    dataCards.forEach(card => observer.observe(card));
});

// 卡片悬停效果增强
document.querySelectorAll('.advantage-card, .market-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// 模拟实时数据更新（可选）
function updateMarketData() {
    const volume = document.getElementById('volume24h');
    const markets = document.getElementById('activeMarkets');

    if (volume && markets) {
        // 随机小幅波动
        setInterval(() => {
            const currentVolume = parseInt(volume.textContent.replace(/[$,]/g, ''));
            const change = Math.floor(Math.random() * 1000000) - 500000;
            const newVolume = currentVolume + change;
            volume.textContent = '$' + newVolume.toLocaleString();

            const currentMarkets = parseInt(markets.textContent);
            const marketChange = Math.floor(Math.random() * 5) - 2;
            markets.textContent = (currentMarkets + marketChange).toLocaleString();
        }, 10000); // 每10秒更新一次
    }
}

// 启动数据更新（可选功能）
// updateMarketData();

// 响应式菜单（移动端）
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar .container');

    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: block;';

            navbar.insertBefore(toggle, nav);

            toggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

console.log('Polymarket 推广网站已加载完成！');
