import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Blockchain Bootcamp',
    location: 'Lagos, Nigeria',
    date: 'Oct 15, 2026',
    attendees: 120,
    flag: '🇳🇬',
    type: 'Workshop'
  },
  {
    title: 'Web3 Hub Opening',
    location: 'Cape Town, South Africa',
    date: 'Oct 27, 2026',
    attendees: 200,
    flag: '🇿🇦',
    type: 'Launch Event'
  },
  {
    title: 'Developer Meetup',
    location: 'Nairobi, Kenya',
    date: 'Nov 5, 2026',
    attendees: 85,
    flag: '🇰🇪',
    type: 'Meetup'
  },
  {
    title: 'Filecoin Storage Summit',
    location: 'Accra, Ghana',
    date: 'Nov 12, 2026',
    attendees: 150,
    flag: '🇬🇭',
    type: 'Conference'
  },
  {
    title: 'DApp Workshop',
    location: 'Cairo, Egypt',
    date: 'Nov 18, 2026',
    attendees: 95,
    flag: '🇪🇬',
    type: 'Workshop'
  },
  {
    title: 'Community Hackathon',
    location: 'Dar es Salaam, Tanzania',
    date: 'Nov 25, 2026',
    attendees: 180,
    flag: '🇹🇿',
    type: 'Hackathon'
  }
];

export function UpcomingEvents() {
  return (
    <section id="events" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Upcoming Events
              </h2>
              <p className="text-slate-400 text-lg">Connect with the Filecoin community across Africa</p>
            </motion.div>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="absolute top-4 right-4 text-3xl">{event.flag}</div>
              
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-3">
                  <span className="text-blue-400 text-xs font-semibold">{event.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <MapPin className="w-4 h-4 text-green-400" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Users className="w-4 h-4 text-purple-400" />
                  {event.attendees} attending
                </div>
              </div>

              <button className="w-full py-3 bg-slate-700/50 hover:bg-blue-500 text-white rounded-xl font-medium transition-all group-hover:shadow-lg group-hover:shadow-blue-500/30">
                Register
              </button>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden mt-8 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl border border-slate-700 transition-all">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
