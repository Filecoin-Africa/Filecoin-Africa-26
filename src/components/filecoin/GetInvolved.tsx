import { motion } from 'motion/react';
import { MessageCircle, Github, Code, Users, Heart, BookOpen } from 'lucide-react';

const ways = [
  {
    icon: MessageCircle,
    title: 'Join Our Telegram',
    description: 'Connect with thousands of Filecoin enthusiasts across Africa',
    action: 'Join Channel',
    color: 'blue'
  },
  {
    icon: Github,
    title: 'Contribute to Projects',
    description: 'Help build open-source tools for decentralized storage',
    action: 'View Repos',
    color: 'purple'
  },
  {
    icon: Code,
    title: 'Attend a Hackathon',
    description: 'Build innovative solutions and win prizes',
    action: 'Register Now',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Organize a Meetup',
    description: 'Start a Filecoin community in your city',
    action: 'Get Started',
    color: 'orange'
  }
];

export function GetInvolved() {
  return (
    <section id="community" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Involved
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join Africa's fastest-growing decentralized storage community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${way.color}-500/10 border border-${way.color}-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <way.icon className={`w-7 h-7 text-${way.color}-400`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {way.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {way.description}
              </p>
              
              <button className="px-6 py-3 bg-slate-700/50 hover:bg-blue-500 text-white rounded-xl font-medium transition-all group-hover:shadow-lg group-hover:shadow-blue-500/30">
                {way.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-3xl p-8 md:p-12 border border-blue-500/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Our Growing Community</h3>
            <p className="text-slate-300">Building the decentralized future together</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">2,500+</div>
              <div className="text-slate-400 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/30">
                <Code className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">85+</div>
              <div className="text-slate-400 text-sm">Developers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/30">
                <Heart className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-slate-400 text-sm">Events</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                <BookOpen className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">120+</div>
              <div className="text-slate-400 text-sm">Resources</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
