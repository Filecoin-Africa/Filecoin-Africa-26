import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Africa Map Outline Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 800" className="w-full h-full" fill="none">
          <path
            d="M400 100C350 100 320 130 310 150C300 170 290 200 280 220C270 240 250 260 240 280C230 300 220 330 210 350C200 370 190 390 190 410C190 430 200 450 210 470C220 490 230 510 240 530C250 550 270 570 290 580C310 590 330 600 350 610C370 620 390 630 410 640C430 650 450 660 470 660C490 660 510 650 530 640C550 630 570 620 590 610C610 600 630 590 640 570C650 550 660 530 670 510C680 490 690 470 690 450C690 430 680 410 670 390C660 370 650 350 640 330C630 310 620 290 600 280C580 270 560 260 540 250C520 240 500 230 480 220C460 210 440 200 420 190C400 180 380 170 360 160C340 150 420 140 400 100Z"
            fill="url(#africaGradient)"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-500"
          />
          <defs>
            <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-semibold">Decentralized Storage for Africa</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Africa's Blockchain Future with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Filecoin
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join the movement to decentralize data storage across Africa. Connect with developers, 
            attend meetups, and contribute to open-source projects in Lagos, Cape Town, Nairobi, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-2">
              Explore Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold border border-slate-700 transition-all">
              Join Community
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-slate-400 text-sm">African Cities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400 text-sm">Events Hosted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">2.5K+</div>
              <div className="text-slate-400 text-sm">Community Members</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
