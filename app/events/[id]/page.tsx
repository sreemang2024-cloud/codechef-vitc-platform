"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowLeft, Users } from "lucide-react";
import { events } from "@/data/events";
import RegisterModal from "@/components/RegisterModal";

export default function EventDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const event = events.find((e) => e.id === resolvedParams.id);

  if (!event) {
    notFound();
  }

  const spotsLeft = event.spotsTotal - event.spotsFilled;
  const fillPercentage = (event.spotsFilled / event.spotsTotal) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link 
          href="/#events" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all events
        </Link>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="mb-8">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 inline-block">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {event.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {event.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 py-8 border-y border-gray-100 dark:border-gray-800 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Date & Time</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-0.5">{event.time}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{event.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-transparent dark:border-gray-800">
            <div className="w-full md:w-1/2">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  Availability
                </span>
                <span className="text-gray-600 dark:text-gray-400">{spotsLeft} spots left</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${fillPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg shadow-gray-200 dark:shadow-none"
            >
              Register for Event
            </button>
          </div>

        </div>
      </div>

      <RegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventTitle={event.title} 
      />
    </div>
  );
}