import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { events } from '@/data/events';

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover workshops, hackathons, and networking sessions designed to level up your skills.
            </p>
          </div>
          <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-colors">
            View full calendar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
              
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {event.category}
                </span>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-gray-900 dark:text-white leading-none mb-1">
                    {new Date(event.date).getDate()}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">
                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-3">
                  <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  {event.location}
                </div>
              </div>

              <Link 
                href={`/events/${event.id}`}
                className="w-full py-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-semibold rounded-xl text-center hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700 mt-auto"
              >
                View Details
              </Link>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}