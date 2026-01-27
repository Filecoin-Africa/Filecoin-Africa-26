import { motion } from 'motion/react';
import { Zap, UserCheck, Link2, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Funds hit bank accounts in seconds, not days. Real-time transfers every time.'
  },
  {
    icon: UserCheck,
    title: 'Zero Hassle for Recipients',
    description: 'No wallet, no app, no crypto knowledge. They just receive cash in their bank.'
  },
  {
    icon: Link2,
    title: 'Persistent Addresses',
    description: 'One address per recipient. Reuse it anytime without asking for details again.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Bank-grade security with full regulatory compliance. Your money is safe.'
  }
];

export function WhyResolva() {
  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Resolva?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            The fastest, simplest way to bridge crypto and traditional banking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <benefit.icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}