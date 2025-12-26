'use client';

import { useState } from 'react';

export default function Home() {
  const referralLink = "https://polymarket.com?via=toykollo";
  const [showPolymarket, setShowPolymarket] = useState(false);

  if (showPolymarket) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <div className="h-full flex flex-col">
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPolymarket(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                ← Back to Landing Page
              </button>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm">Polymarket</span>
            </div>
            <a
              href={referralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Open in New Tab →
            </a>
          </div>
          <iframe
            src={referralLink}
            className="flex-1 w-full border-0"
            title="Polymarket"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Predict the Future, Earn Rewards
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Polymarket is the world's largest decentralized prediction market platform where you can profit from predicting real-world events
          </p>
          <button
            onClick={() => setShowPolymarket(true)}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Start Trading Now
          </button>
        </div>
      </section>

      {/* What is Polymarket */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What is Polymarket?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Polymarket is a blockchain-based prediction market platform where users can predict and trade on outcomes of real-world events across politics, economics, sports, technology, and more.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                By purchasing "Yes" or "No" shares, you express your view on event outcomes. If your prediction is correct, each share pays out $1.
              </p>
              <p className="text-lg text-gray-700">
                The platform uses decentralized technology to ensure transparent, fair trading without intermediaries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">$3.7B+</div>
                <div className="text-gray-700 mb-6">Total Volume</div>
                <div className="text-5xl font-bold text-purple-600 mb-2">500K+</div>
                <div className="text-gray-700 mb-6">Active Users</div>
                <div className="text-5xl font-bold text-green-600 mb-2">10K+</div>
                <div className="text-gray-700">Prediction Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Polymarket?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accurate Market Predictions</h3>
              <p className="text-gray-700">
                Crowd wisdom often outperforms individual experts. Polymarket's prediction accuracy has been proven to exceed traditional polls and expert forecasts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Profit Opportunities</h3>
              <p className="text-gray-700">
                If you have unique insights on events, you can earn real returns through accurate predictions. Greater opportunities exist when markets are inefficient.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decentralized Security</h3>
              <p className="text-gray-700">
                Built on Polygon blockchain, all transactions are transparent and verifiable. Funds are managed by smart contracts without trusting centralized institutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low Fees, Fast Trading</h3>
              <p className="text-gray-700">
                Using Polygon network, transaction fees are extremely low (typically under $0.01), with fast confirmation times and smooth user experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diverse Market Selection</h3>
              <p className="text-gray-700">
                From US elections and crypto prices to sports events, covering all trending topics with prediction markets that interest you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Platform</h3>
              <p className="text-gray-700">
                No geographic restrictions, users worldwide can participate. 24/7 trading, seize market opportunities anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Polymarket vs Competitors
          </h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Comparison</th>
                  <th className="px-6 py-4 text-left bg-blue-600">Polymarket</th>
                  <th className="px-6 py-4 text-left">Kalshi</th>
                  <th className="px-6 py-4 text-left">Limitless</th>
                  <th className="px-6 py-4 text-left">Opinion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Monthly Volume</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">$3.74B (Nov 2025)</td>
                  <td className="px-6 py-4">$5.8B (Nov 2025)</td>
                  <td className="px-6 py-4">Smaller</td>
                  <td className="px-6 py-4">Smaller</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Technology</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">Ethereum Blockchain</td>
                  <td className="px-6 py-4">Centralized</td>
                  <td className="px-6 py-4">Base (L2)</td>
                  <td className="px-6 py-4">Decentralized</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Regulation</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">CFTC Approved</td>
                  <td className="px-6 py-4">CFTC Regulated</td>
                  <td className="px-6 py-4">Unregulated</td>
                  <td className="px-6 py-4">Unregulated</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Market Categories</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">Politics, Sports, Economics, Entertainment</td>
                  <td className="px-6 py-4">Politics, Economics Focus</td>
                  <td className="px-6 py-4">Short-term Events</td>
                  <td className="px-6 py-4">Diverse</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Liquidity</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">Very High</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Medium</td>
                  <td className="px-6 py-4">Medium</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Payment Methods</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">USDC/Crypto</td>
                  <td className="px-6 py-4">USD/Credit Card</td>
                  <td className="px-6 py-4">Crypto</td>
                  <td className="px-6 py-4">Crypto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">✅ Polymarket Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Highest liquidity and trading depth</li>
                <li>• Blockchain transparency with regulatory compliance</li>
                <li>• Most diverse market category selection</li>
                <li>• Largest global user base</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-900 mb-4">📌 Kalshi Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Traditional financial regulation</li>
                <li>• Direct fiat currency trading</li>
                <li>• High volume but fewer categories</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">📌 Limitless Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Focus on short-term event trading</li>
                <li>• Built on Base L2, low fees</li>
                <li>• Smaller market size</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tutorial */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Detailed Tutorial
          </h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Create a Wallet</h3>
                <p className="text-gray-700">Install MetaMask or another Ethereum wallet extension and create your digital wallet account. Keep your seed phrase and private keys secure.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase USDC</h3>
                <p className="text-gray-700">Buy USDC stablecoin through an exchange (like Coinbase or Binance) and transfer it to your wallet address.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Connect to Polymarket</h3>
                <p className="text-gray-700">Visit polymarket.com, click "Connect Wallet" to connect your wallet, authorize, and start using the platform.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose a Market</h3>
                <p className="text-gray-700">Browse prediction markets of interest, review market details, current odds, and trading volume.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Place a Trade</h3>
                <p className="text-gray-700">Select "Yes" or "No", enter your trade amount, confirm the transaction and pay gas fees to complete.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Wait for Settlement</h3>
                <p className="text-gray-700">After the event concludes, the system automatically settles. If your prediction is correct, profits are sent directly to your wallet.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Beginner Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with small trades to familiarize yourself with the platform</li>
              <li>• Carefully read market rules and settlement conditions</li>
              <li>• Focus on market liquidity, choose actively traded markets</li>
              <li>• You can sell your position anytime, no need to wait for event conclusion</li>
              <li>• Keep your wallet private keys secure - Polymarket cannot recover them</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Platform Statistics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$3.7B+</div>
              <div className="text-gray-600">Total Volume</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600">Registered Users</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Markets</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%+</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Get Started?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Register Account</h3>
              <p className="text-gray-600">Quick registration using email or wallet</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deposit Funds</h3>
              <p className="text-gray-600">Deposit using USDC or credit card</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Market</h3>
              <p className="text-gray-600">Browse and select predictions of interest</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Trading</h3>
              <p className="text-gray-600">Buy the outcome you believe is correct</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the world's largest prediction market and profit from your insights
          </p>
          <button
            onClick={() => setShowPolymarket(true)}
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Sign Up for Polymarket
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-gray-400 text-center">
        <p>This is a Polymarket promotional page | Trading involves risk, predict responsibly</p>
      </footer>
    </div>
  );
}
