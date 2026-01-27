import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  variant: 'unified' | 'individuals' | 'merchants';
}

export function Hero({ variant }: HeroProps) {
  const [amount, setAmount] = useState('100000');
  const [focused, setFocused] = useState(false);
  const usdtAmount = (parseFloat(amount || '0') / 1650).toFixed(2);
  const fee = '0.00';
  const rate = 1650;

  const getContent = () => {
    switch (variant) {
      case 'individuals':
        return {
          tagline: 'Send Money Home. Instantly.',
          subheadline: 'Pay family, freelancers, or anyone with crypto. They receive cash in their bank account — no crypto knowledge needed.',
          cta1: 'Start Sending',
          cta2: 'See How It Works'
        };
      case 'merchants':
        return {
          tagline: 'Accept Crypto. Get Naira.',
          subheadline: 'Generate a QR code, accept stablecoin payments, receive instant naira settlements in your bank account.',
          cta1: 'Become a Merchant',
          cta2: 'View Dashboard Demo'
        };
      default:
        return {
          tagline: 'Your Crypto. Their Bank. Instantly.',
          subheadline: 'Send crypto from anywhere. Family, vendors, or customers receive cash directly in their bank — instantly, no crypto knowledge required.',
          cta1: 'Start Sending (Individuals)',
          cta2: 'Start Accepting (Merchants)'
        };
    }
  };

  const content = getContent();

  return (
    <section className="pt-40 pb-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-[0.95] tracking-tight">
            {content.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {content.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className={`bg-white rounded-3xl p-10 border-2 transition-all duration-300 ${
            focused ? 'border-blue-500 shadow-2xl shadow-blue-100/50' : 'border-gray-200 shadow-xl shadow-gray-100/50'
          }`}>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-500 mb-3">
                Recipient gets
              </label>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-3xl font-light">₦</span>
                <input
                  type="text"
                  value={amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="w-full pl-8 pr-24 py-3 text-4xl md:text-5xl font-light border-0 focus:outline-none text-gray-900"
                  placeholder="100,000"
                />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-medium">
                  NGN
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-500 mb-3">
                You send
              </label>
              <div className="flex items-baseline justify-between">
                <span className="text-4xl md:text-5xl font-light text-gray-900">{usdtAmount}</span>
                <span className="text-lg font-medium text-gray-400">USDT</span>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-5 mb-8 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Exchange rate</span>
                <span className="font-medium text-gray-900">1 USDT = ₦{rate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fee</span>
                <span className="font-medium text-green-600">₦{fee} (Free)</span>
              </div>
            </div>

            <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30">
              Send Now →
            </button>

            <p className="text-xs text-gray-500 text-center mt-5">
              Updated 2 minutes ago • Instant settlement
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30">
            {content.cta1}
          </button>
          <button className="px-10 py-5 text-gray-700 rounded-full font-semibold text-lg hover:text-gray-900 transition-colors underline underline-offset-4 decoration-2 decoration-gray-300 hover:decoration-gray-900">
            {content.cta2}
          </button>
        </motion.div>
      </div>
    </section>
  );
}