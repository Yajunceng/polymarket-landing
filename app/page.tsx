export default function Home() {
  const referralLink = "https://polymarket.com?via=brandon-fletcher";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            预测未来，赢取收益
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Polymarket 是全球最大的去中心化预测市场平台，让你通过预测真实世界事件来获得收益
          </p>
          <a
            href={referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            立即开始交易
          </a>
        </div>
      </section>

      {/* What is Polymarket */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            什么是 Polymarket？
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Polymarket 是一个基于区块链的预测市场平台，用户可以对政治、经济、体育、科技等各类真实世界事件的结果进行预测和交易。
              </p>
              <p className="text-lg text-gray-700 mb-4">
                通过购买"是"或"否"的份额，你可以表达对事件结果的看法。如果你的预测正确，每份额将获得 $1 的回报。
              </p>
              <p className="text-lg text-gray-700">
                平台采用去中心化技术，确保交易透明、公平，并且无需中间商。
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">$3.7B+</div>
                <div className="text-gray-700 mb-6">累计交易量</div>
                <div className="text-5xl font-bold text-purple-600 mb-2">500K+</div>
                <div className="text-gray-700 mb-6">活跃用户</div>
                <div className="text-5xl font-bold text-green-600 mb-2">10K+</div>
                <div className="text-gray-700">预测市场</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            为什么选择 Polymarket？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">准确的市场预测</h3>
              <p className="text-gray-700">
                群体智慧往往比个人专家更准确。Polymarket 的预测准确率已被证明超过传统民调和专家预测。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">真实收益机会</h3>
              <p className="text-gray-700">
                如果你对某个事件有独到见解，可以通过正确预测获得实际收益。市场效率低下时，机会更大。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">去中心化安全</h3>
              <p className="text-gray-700">
                基于 Polygon 区块链，所有交易透明可查，资金由智能合约管理，无需信任中心化机构。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">低费用快速交易</h3>
              <p className="text-gray-700">
                使用 Polygon 网络，交易费用极低（通常不到 $0.01），交易确认速度快，用户体验流畅。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">丰富的市场选择</h3>
              <p className="text-gray-700">
                从美国大选、加密货币价格到体育赛事，涵盖各类热门话题，总有你感兴趣的预测市场。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">全球化平台</h3>
              <p className="text-gray-700">
                无地域限制，全球用户都可以参与。24/7 全天候交易，随时把握市场机会。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            平台数据一览
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$3.7B+</div>
              <div className="text-gray-600">总交易量</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600">注册用户</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">活跃市场</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%+</div>
              <div className="text-gray-600">预测准确率</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            如何开始？
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">注册账户</h3>
              <p className="text-gray-600">使用邮箱或钱包快速注册</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">充值资金</h3>
              <p className="text-gray-600">使用 USDC 或信用卡充值</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">选择市场</h3>
              <p className="text-gray-600">浏览并选择感兴趣的预测</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">开始交易</h3>
              <p className="text-gray-600">买入你认为正确的结果</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            加入全球最大的预测市场，用你的洞察力赚取收益
          </p>
          <a
            href={referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            立即注册 Polymarket
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-gray-400 text-center">
        <p>本网站为 Polymarket 推广页面 | 投资有风险，预测需谨慎</p>
      </footer>
    </div>
  );
}
