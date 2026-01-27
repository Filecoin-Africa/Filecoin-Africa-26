import { motion } from 'motion/react';
import { Wallet, Send, CreditCard, Check } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Get Their Address',
    description: 'Generate a unique persistent USDT address for your recipient'
  },
  {
    icon: Send,
    title: 'Send Stablecoins',
    description: 'Transfer USDT or USDC from any wallet to their address'
  },
  {
    icon: CreditCard,
    title: 'Add Bank Details',
    description: 'Recipient provides their bank account (one-time setup)'
  },
  {
    icon: Check,
    title: 'Instant Delivery',
    description: 'Naira lands in their bank account within seconds'
  }
];

export function ForIndividuals() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-yellow-100/70 text-yellow-800 rounded-full text-sm font-medium mb-8">
              For Individuals
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
              Send Crypto,<br />They Get Cash
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Perfect for sending money to family, paying freelancers, or supporting friends. 
              They don't need to understand crypto — just receive money in their bank.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{step.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30">
              Sign Up Free
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-10 border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Wallet className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 font-medium">From</div>
                    <div className="font-semibold text-gray-900 text-lg">Your Wallet</div>
                  </div>
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 mb-2"></div>
                  <div className="text-xs text-gray-500 font-medium">Instant</div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 text-right font-medium">To</div>
                    <div className="font-semibold text-gray-900 text-lg">Their Bank</div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-400/30">
                    <CreditCard className="w-7 h-7 text-gray-900" strokeWidth={2} />
                  </div>
                </div>
              </div>

              <div className="space-y-5 bg-gray-50/80 rounded-2xl p-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Amount</span>
                  <span className="font-semibold text-gray-900 text-lg">100 USDT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Exchange Rate</span>
                  <span className="font-semibold text-gray-900 text-lg">₦1,650</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Recipient Gets</span>
                  <span className="text-3xl font-bold text-gray-900">₦165,000</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-green-600 bg-green-50 rounded-xl p-4">
                <Check className="w-5 h-5" />
                <span className="font-medium">Delivered in 10 seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}