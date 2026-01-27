import { motion } from 'motion/react';
import { ArrowRight, Building2, Users, Calendar } from 'lucide-react';

const cities = [
  {
    name: 'Lagos',
    country: 'Nigeria',
    description: 'West Africa\'s tech hub with thriving blockchain community',
    members: 450,
    events: 12,
    image: 'https://images.unsplash.com/photo-1619709465615-5e2e207f5945?w=800&h=600&fit=crop',
    flag: '🇳🇬'
  },
  {
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Innovation district driving decentralized storage adoption',
    members: 380,
    events: 10,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop',
    flag: '🇿🇦'
  },
  {
    name: 'Nairobi',
    country: 'Kenya',
    description: 'East Africa\'s blockchain innovation hub',
    members: 320,
    events: 9,
    image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop',
    flag: '🇰🇪'
  },
  {
    name: 'Accra',
    country: 'Ghana',
    description: 'Growing Web3 ecosystem with active developer community',
    members: 280,
    events: 8,
    image: 'https://images.unsplash.com/photo-1568556884-b7929e93b7e2?w=800&h=600&fit=crop',
    flag: '🇬🇭'
  },
  {
    name: 'Cairo',
    country: 'Egypt',
    description: 'North Africa\'s gateway to decentralized technology',
    members: 240,
    events: 7,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop',
    flag: '🇪🇬'
  },
  {
    name: 'Kigali',
    country: 'Rwanda',
    description: 'Smart city embracing blockchain infrastructure',
    members: 180,
    events: 6,
    image: 'https://images.unsplash.com/photo-1609860546966-2fe8c31716eb?w=800&h=600&fit=crop',
    flag: '🇷🇼'
  }
];

export function CityDirectory() {
  return (
    <section id="cities" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            City Directory
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore Filecoin communities across Africa's innovation hubs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">{city.flag}</div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                  <p className="text-slate-300 text-sm">{city.country}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {city.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">{city.members}</div>
                      <div className="text-slate-500 text-xs">Members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">{city.events}</div>
                      <div className="text-slate-500 text-xs">Events</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-slate-700/50 hover:bg-blue-500 text-white rounded-xl font-medium transition-all group-hover:shadow-lg group-hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
