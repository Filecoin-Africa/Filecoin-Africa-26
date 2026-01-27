import { motion } from 'motion/react';
import { QrCode, Smartphone, Zap, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: 'Generate QR Code',
    description: 'Create instant payment QR codes for any amount'
  },
  {
    icon: Smartphone,
    title: 'Customer Scans',
    description: 'Customer scans with any crypto wallet and sends USDT'
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Receive naira in your business bank account immediately'
  },
  {
    icon: BarChart3,
    title: 'Track Everything',
    description: 'Monitor all transactions in your merchant dashboard'
  }
];

export function ForMerchants() {
  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl shadow-gray-900/20 p-10 text-white border border-gray-700/50">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="text-xs text-gray-400 mb-2 font-medium">Payment Request</div>
                  <div className="text-4xl font-bold">₦50,000</div>
                </div>
                <div className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold border border-green-500/30">
                  Active
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-6">
                  <div className="grid grid-cols-8 gap-1.5">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-sm ${
                          Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center text-gray-900">
                  <div className="text-xs text-gray-500 mb-2 font-medium">Send USDT to</div>
                  <div className="font-mono text-xs font-semibold break-all bg-gray-50 px-3 py-2 rounded-lg">
                    0x742d...9F3a
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300 font-light">Amount: 30.30 USDT</span>
                <span className="text-yellow-400 font-semibold">Awaiting payment</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-yellow-100/70 text-yellow-800 rounded-full text-sm font-medium mb-8">
              For Merchants
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Accept Crypto,<br />Get Paid in Bank
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Expand your payment options without the complexity. Accept stablecoin payments 
              from customers worldwide, receive instant naira settlements.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-yellow-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{step.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-5 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/30">
              Become a Merchant
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}