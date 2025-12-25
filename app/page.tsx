export default function Home() {
  const referralLink = "https://polymarket.com?via=toykollo";

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

      {/* Comparison Table */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Polymarket vs 竞品对比
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">对比维度</th>
                  <th className="px-6 py-4 text-left bg-blue-600">Polymarket</th>
                  <th className="px-6 py-4 text-left">Kalshi</th>
                  <th className="px-6 py-4 text-left">Limitless</th>
                  <th className="px-6 py-4 text-left">Opinion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">月交易量</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">$3.74B (2025.11)</td>
                  <td className="px-6 py-4">$5.8B (2025.11)</td>
                  <td className="px-6 py-4">较小</td>
                  <td className="px-6 py-4">较小</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">技术架构</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">以太坊区块链</td>
                  <td className="px-6 py-4">中心化</td>
                  <td className="px-6 py-4">Base (L2)</td>
                  <td className="px-6 py-4">去中心化</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">监管状态</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">CFTC 批准</td>
                  <td className="px-6 py-4">CFTC 监管</td>
                  <td className="px-6 py-4">无监管</td>
                  <td className="px-6 py-4">无监管</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">市场类别</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">政治、体育、经济、娱乐</td>
                  <td className="px-6 py-4">政治、经济为主</td>
                  <td className="px-6 py-4">短期事件</td>
                  <td className="px-6 py-4">多样化</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">流动性</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">极高</td>
                  <td className="px-6 py-4">高</td>
                  <td className="px-6 py-4">中等</td>
                  <td className="px-6 py-4">中等</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">支付方式</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">USDC/加密货币</td>
                  <td className="px-6 py-4">USD/信用卡</td>
                  <td className="px-6 py-4">加密货币</td>
                  <td className="px-6 py-4">加密货币</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">✅ Polymarket 优势</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 最高的流动性和交易深度</li>
                <li>• 区块链透明性与监管合规结合</li>
                <li>• 最丰富的市场类别选择</li>
                <li>• 全球用户基础最广</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-900 mb-4">📌 Kalshi 特点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 传统金融监管</li>
                <li>• 支持法币直接交易</li>
                <li>• 交易量大但类别较少</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">📌 Limitless 特点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 专注短期事件交易</li>
                <li>• 基于 Base L2，费用低</li>
                <li>• 市场规模较小</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tutorial */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            详细使用教程
          </h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">创建钱包</h3>
                <p className="text-gray-700">安装 MetaMask 或其他以太坊钱包扩展，创建您的数字钱包账户。保管好助记词和私钥。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">购买 USDC</h3>
                <p className="text-gray-700">通过交易所（如 Coinbase、Binance）购买 USDC 稳定币，并转入您的钱包地址。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">连接 Polymarket</h3>
                <p className="text-gray-700">访问 polymarket.com，点击"Connect Wallet"连接您的钱包，授权后即可开始使用。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">选择市场</h3>
                <p className="text-gray-700">浏览感兴趣的预测市场，查看市场详情、当前赔率和交易量。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">下单交易</h3>
                <p className="text-gray-700">选择"Yes"或"No"，输入交易金额，确认交易并支付 gas 费用即可完成。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">等待结算</h3>
                <p className="text-gray-700">事件结束后，系统自动结算。如果预测正确，收益直接到账您的钱包。</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 新手提示</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 建议从小额交易开始，熟悉平台操作流程</li>
              <li>• 仔细阅读市场规则和结算条件</li>
              <li>• 关注市场流动性，选择交易活跃的市场</li>
              <li>• 可以随时卖出持仓，不必等到事件结束</li>
              <li>• 保管好钱包私钥，Polymarket 无法帮您找回</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="px-4 py-16 bg-white">
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
