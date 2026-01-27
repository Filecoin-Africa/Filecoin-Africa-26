import { motion } from 'motion/react';

interface HowItWorksProps {
  variant: 'unified' | 'individuals' | 'merchants';
}

export function HowItWorks({ variant }: HowItWorksProps) {
  const getSteps = () => {
    if (variant === 'individuals') {
      return [
        { title: 'Create Account', description: 'Sign up in under 2 minutes' },
        { title: 'Generate Address', description: 'Get a unique address for your recipient' },
        { title: 'Send Stablecoins', description: 'Transfer from any wallet' },
        { title: 'Instant Delivery', description: 'They receive naira in their bank' }
      ];
    }
    if (variant === 'merchants') {
      return [
        { title: 'Register Business', description: 'Complete quick verification' },
        { title: 'Generate Payment QR', description: 'Create codes for any amount' },
        { title: 'Receive Crypto', description: 'Customer sends stablecoins' },
        { title: 'Get Naira', description: 'Instant settlement to your bank' }
      ];
    }
    return [
      { title: 'Sign Up', description: 'Create your free account' },
      { title: 'Connect', description: 'Link wallet or generate payment codes' },
      { title: 'Transact', description: 'Send or receive stablecoins' },
      { title: 'Settle', description: 'Instant naira in bank accounts' }
    ];
  };

  const steps = getSteps();

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Simple, fast, and secure in just four steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-yellow-400"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}