"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Frown, PhoneOff } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-orange-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Problem
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fragmented data costs you deals and time
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Media buying and B2B research in Nigeria is still too slow, too fragmented, and too dependent on WhatsApp, spreadsheets, and outdated directories.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">Hours Wasted</h3>
            <p className="text-sm text-slate-600">
              Teams waste countless hours chasing contacts, comparing quotes, and trying to piece together a campaign from disconnected sources.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">Outdated Information</h3>
            <p className="text-sm text-slate-600">
              Business data decays rapidly. General-purpose providers offer broad lists but data goes stale within months without consistent re-verification.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-4">
              <PhoneOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">Unreliable Availability</h3>
            <p className="text-sm text-slate-600">
              Checking inventory availability requires endless back-and-forth follow-ups, leading to missed opportunities and delayed proposals.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-4">
              <Frown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-2">Shallow Coverage</h3>
            <p className="text-sm text-slate-600">
              Existing tools lack sector-specific depth. You get a contact name, but no visibility into license status, capacity, or actual market footprint.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 bg-navy-900 rounded-2xl p-8 lg:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">The Solution: One Command Center</h3>
            <p className="text-slate-300">
              We turn scattered media information and business intelligence into one searchable, verified, and actionable system. Replace fragmented lists with one trusted platform built for scale and speed.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-navy-900 bg-white hover:bg-slate-50 transition-colors cursor-pointer shadow-sm">
              See the Platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
