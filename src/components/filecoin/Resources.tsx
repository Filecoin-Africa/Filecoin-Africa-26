import { motion } from 'motion/react';
import { FileText, Video, Code, BookOpen, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Whitepapers',
    description: 'Read in-depth technical documentation',
    count: '12 documents',
    color: 'blue'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn from expert-led workshops',
    count: '28 videos',
    color: 'red'
  },
  {
    icon: Code,
    title: 'Developer Docs',
    description: 'Build on Filecoin with our guides',
    count: '15 guides',
    color: 'green'
  },
  {
    icon: BookOpen,
    title: 'Case Studies',
    description: 'Success stories from Africa',
    count: '8 stories',
    color: 'purple'
  }
];

const featured = [
  {
    title: 'Getting Started with Filecoin',
    type: 'Tutorial',
    duration: '45 min',
    difficulty: 'Beginner'
  },
  {
    title: 'Building DApps on IPFS',
    type: 'Workshop',
    duration: '2 hours',
    difficulty: 'Intermediate'
  },
  {
    title: 'Storage Provider Guide',
    type: 'Documentation',
    duration: '30 min',
    difficulty: 'Advanced'
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Resources
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to start building on Filecoin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-${resource.color}-500/10 border border-${resource.color}-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <resource.icon className={`w-6 h-6 text-${resource.color}-400`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-slate-300 text-sm mb-3">
                {resource.description}
              </p>
              <div className="text-slate-500 text-xs font-medium">
                {resource.count}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Featured Resources</h3>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2">
              View All
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {featured.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Download className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="px-2 py-1 bg-slate-700/50 rounded">{item.type}</span>
                      <span>{item.duration}</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded">{item.difficulty}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
