"use client";

import { motion } from "framer-motion";
import { Search, Scale, ShieldCheck, PenTool, CalendarCheck, BarChart } from "lucide-react";

const steps = [
  {
    title: "Discover inventory",
    description: "Search inventory by channel, city, audience, or budget across 6 core sectors.",
    icon: Search,
  },
  {
    title: "Compare options",
    description: "Compare media options, rates, and supplier reliability side by side.",
    icon: Scale,
  },
  {
    title: "Verify contacts",
    description: "Access data timestamped and verified by our researchers every 30-60 days.",
    icon: ShieldCheck,
  },
  {
    title: "Build proposals",
    description: "Create client-ready media plans and quotes in minutes instead of days.",
    icon: PenTool,
  },
  {
    title: "Manage bookings",
    description: "Share approvals, manage RFPs, and track insertion orders in one place.",
    icon: CalendarCheck,
  },
  {
    title: "Measure results",
    description: "Monitor post-campaign performance and improve future campaigns.",
    icon: BarChart,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Workflow Automation
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From scattered sheets to a unified system
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Teams waste hours chasing contacts and comparing quotes. We turn scattered information into one actionable workflow.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 hover:shadow-xl hover:ring-primary-100 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 group-hover:text-primary-50 transition-colors pointer-events-none select-none">
                {index + 1}
              </div>
              <div className="h-12 w-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-600 relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
