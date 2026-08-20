"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart3, Users, Building2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 sm:pt-32 sm:pb-40">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#eff6ff,transparent)]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        {/* Left column - Text content */}
        <div className="max-w-2xl lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600 ring-1 ring-inset ring-primary-500/20 mb-6">
              New: Media Intelligence & Planning
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find, verify, and book every opportunity in Africa.
          </motion.h1>
          
          <motion.p
            className="text-lg leading-8 text-slate-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The operating system for B2B intelligence and media buying in Nigeria. 
            Search verified OOH, TV, radio, digital, and influencer inventory with contacts, rates, availability, and campaign workflows built in.
          </motion.p>
          
          <motion.div
            className="flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="#"
              className="rounded-md bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all flex items-center gap-2 group"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-navy-900 hover:text-primary-600 transition-colors">
              See sample inventory <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt={`User avatar ${i}`} 
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-sm" 
                  loading="lazy"
                />
              ))}
            </div>
            <p>Built for agencies, brands, and media teams.</p>
          </motion.div>
        </div>

        {/* Right column - Interactive Graphic */}
        <motion.div 
          className="lg:w-1/2 w-full max-w-lg lg:max-w-none relative perspective-1000"
          initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div 
            className="rounded-xl bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] ring-1 ring-slate-900/5 p-2 overflow-hidden"
            whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          >
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 relative overflow-hidden">
              
              {/* Animated scanning line effect */}
              <motion.div 
                className="absolute inset-0 w-full h-[2px] bg-primary-500/30 blur-sm z-10 pointer-events-none"
                animate={{ y: [0, 400, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* Fake Search Bar */}
              <div className="bg-white rounded-md shadow-sm border border-slate-200 p-3 flex items-center gap-3 mb-6 relative z-20">
                <Search className="h-5 w-5 text-slate-400" />
                <motion.div 
                  className="h-4 bg-slate-100 rounded w-1/3 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "anticipate" }}
                />
                <div className="ml-auto flex gap-2">
                  <div className="h-6 w-16 bg-primary-50 rounded text-xs text-primary-600 flex items-center justify-center font-medium">Filter</div>
                  <div className="h-6 w-16 bg-primary-600 rounded text-xs text-white flex items-center justify-center font-medium shadow-sm cursor-pointer hover:bg-primary-700 transition-colors">Search</div>
                </div>
              </div>

              {/* Fake Data Rows */}
              <div className="space-y-3 relative z-20">
                {[
                  { icon: Building2, color: "text-blue-500", bg: "bg-blue-50", progress: "w-3/4" },
                  { icon: Users, color: "text-orange-500", bg: "bg-orange-50", progress: "w-1/2" },
                  { icon: BarChart3, color: "text-lime-600", bg: "bg-lime-50", progress: "w-5/6" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white p-4 rounded-md border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1), type: "spring", stiffness: 100 }}
                  >
                    <div className={`p-2 rounded-md ${item.bg}`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-200 rounded w-1/4 mb-3 group-hover:bg-primary-100 transition-colors"></div>
                      <div className="h-2 bg-slate-100 rounded w-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-slate-300 ${item.progress}`}
                          initial={{ x: "-100%" }}
                          animate={{ x: 0 }}
                          transition={{ duration: 1, delay: 0.8 + (i * 0.2), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div className="h-6 w-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-[10px] font-medium text-slate-400 group-hover:border-primary-200 group-hover:text-primary-600 transition-colors">
                      View
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
          
          {/* Floating elements for gamification feel */}
          <motion.div 
            className="absolute -right-6 top-1/4 bg-white p-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3 hidden sm:flex z-30"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
          >
            <motion.div 
              className="h-2.5 w-2.5 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-xs font-semibold text-slate-700">Live Availability</span>
          </motion.div>

          <motion.div 
            className="absolute -left-6 bottom-1/4 bg-white p-3 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3 hidden sm:flex z-30"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            style={{ willChange: "transform" }}
          >
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
              <span className="text-blue-600 font-bold text-sm">99%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-700">Verified Data</span>
              <span className="text-[10px] text-slate-500">Updated today</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
