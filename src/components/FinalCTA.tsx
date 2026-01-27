import { motion } from 'motion/react';

interface FinalCTAProps {
  variant: 'unified' | 'individuals' | 'merchants';
}

export function FinalCTA({ variant }: FinalCTAProps) {
  const getContent = () => {
    if (variant === 'individuals') {
      return {
        title: 'Ready to Send Money Home?',
        subtitle: 'Join thousands sending crypto and delivering cash instantly',
        cta1: 'Start Sending Now',
        cta2: 'Learn More'
      };
    }
    if (variant === 'merchants') {
      return {
        title: 'Ready to Accept Crypto?',
        subtitle: 'Join businesses receiving instant naira settlements',
        cta1: 'Become a Merchant',
        cta2: 'View Pricing'
      };
    }
    return {
      title: 'Ready to Bridge Crypto & Cash?',
      subtitle: 'Join thousands making instant payments between crypto and traditional banking',
      cta1: 'For Individuals',
      cta2: 'For Merchants'
    };
  };

  const content = getContent();

  return (
    <section className="py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-light">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-12 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30">
            {content.cta1}
          </button>
          <button className="text-gray-700 rounded-full font-semibold text-lg hover:text-gray-900 transition-colors underline underline-offset-4 decoration-2 decoration-gray-300 hover:decoration-gray-900">
            {content.cta2}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-10 font-light">
          No credit card required • Get started in under 2 minutes
        </p>
      </motion.div>
    </section>
  );
}