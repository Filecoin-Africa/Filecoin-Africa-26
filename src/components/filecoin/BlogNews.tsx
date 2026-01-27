import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Filecoin Storage Expansion Across Lagos',
    excerpt: 'New storage providers join the network, bringing decentralized infrastructure to West Africa.',
    author: 'Adebayo Johnson',
    date: 'Jan 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop',
    category: 'Infrastructure'
  },
  {
    title: 'Cape Town Developers Build NFT Marketplace',
    excerpt: 'Local team launches IPFS-powered NFT platform for African artists and creators.',
    author: 'Sarah Mbeki',
    date: 'Jan 8, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
    category: 'Projects'
  },
  {
    title: 'Nairobi Hackathon Winners Announced',
    excerpt: 'Three innovative teams win prizes for building decentralized storage solutions.',
    author: 'James Ochieng',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    category: 'Events'
  }
];

export function BlogNews() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Blog & News
            </h2>
            <p className="text-slate-400 text-lg">Latest updates from the community</p>
          </motion.div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-semibold rounded-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
