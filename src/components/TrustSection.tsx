import { motion } from 'motion/react';
import { Shield, Award, Lock } from 'lucide-react';

const testimonials = [
  {
    quote: "Resolva made sending money home effortless. My family gets naira instantly without dealing with crypto wallets.",
    author: "Chioma A.",
    role: "Diaspora Sender",
    avatar: "CA"
  },
  {
    quote: "We started accepting crypto payments and our international sales doubled. Settlement is instant and seamless.",
    author: "Tunde O.",
    role: "E-commerce Merchant",
    avatar: "TO"
  },
  {
    quote: "The persistent addresses are a game-changer. I can pay my team in Nigeria regularly without asking for details every time.",
    author: "Sarah M.",
    role: "Freelance Client",
    avatar: "SM"
  }
];

const trustBadges = [
  { icon: Shield, text: 'CBN Compliant' },
  { icon: Award, text: 'SEC Registered' },
  { icon: Lock, text: 'Bank-Grade Security' }
];

export function TrustSection() {
  return (
    <section className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted & Secure
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Regulated, compliant, and loved by thousands
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <badge.icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
              <span className="font-semibold text-gray-900">{badge.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 mb-8 leading-relaxed font-light text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/30">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 font-light">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}