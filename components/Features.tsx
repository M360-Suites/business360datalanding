"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Map, 
  Users, 
  Briefcase, 
  ShoppingCart, 
  TrendingUp,
  CheckCircle2,
  Database,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";

const sectors = [
  { 
    id: "financial", 
    name: "Financial Services", 
    icon: Building2, 
    color: "bg-blue-100 text-blue-600",
    description: "Deep dive into Nigeria's financial ecosystem with verified institutional data.",
    attributes: ["License type & regulator (CBN, SEC, NAICOM)", "Funding history for Fintechs", "Financial health indicators", "Compliance signals & regulatory actions"],
    useCase: "Ideal for investors mapping the landscape and BD teams targeting regulated entities."
  },
  { 
    id: "tech", 
    name: "Technology", 
    icon: Users, 
    color: "bg-indigo-100 text-indigo-600",
    description: "Track the fastest growing sector with real-time growth signals.",
    attributes: ["Startup registration status (NITDA)", "Funding stage & history", "Tech stack signals", "Hiring velocity & growth"],
    useCase: "Perfect for VC due diligence and software vendors seeking high-growth accounts."
  },
  { 
    id: "fmcg", 
    name: "FMCG", 
    icon: ShoppingCart, 
    color: "bg-orange-100 text-orange-600",
    description: "Understand manufacturing and distribution at scale.",
    attributes: ["Product categories & manufacturing", "Production capacity utilization", "Distribution network reach", "Retail channel presence (Modern vs Traditional)"],
    useCase: "Built for supply chain partnerships and competitive market analysis."
  },
  { 
    id: "retail", 
    name: "Retail", 
    icon: Briefcase, 
    color: "bg-emerald-100 text-emerald-600",
    description: "Map the retail landscape from modern supermarkets to local chains.",
    attributes: ["Store count & physical footprint", "Formal vs. informal classification", "Credit access status", "POS & digital payment adoption"],
    useCase: "Essential for FMCG distribution planning and payment providers."
  },
  { 
    id: "hospitality", 
    name: "Hospitality", 
    icon: Map, 
    color: "bg-rose-100 text-rose-600",
    description: "Actionable data on hotels, restaurants, and event spaces.",
    attributes: ["Star rating & room count", "Occupancy & ADR signals", "Power reliability (Solar/Grid)", "Aggregate guest sentiment"],
    useCase: "Crucial for experiential marketing activations and procurement teams."
  },
  { 
    id: "economy", 
    name: "Economy", 
    icon: TrendingUp, 
    color: "bg-slate-200 text-slate-700",
    description: "The macro context layer that powers strategic decisions.",
    attributes: ["Sector-level GDP contribution", "Inflation trends", "Trade balance indicators", "Regulatory & policy changes"],
    useCase: "Provides the overarching strategic context for all other sector data."
  },
];

export default function Features() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  const activeSector = sectors.find(s => s.id === activeSectorId)!;

  return (
    <section className="py-24 bg-white relative">
      {/* Background element */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white opacity-50 blur-3xl rounded-full"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sector Depth
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Six sectors. Infinite opportunities.
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We go deep rather than wide. Get verified company data, sector-specific attributes, and strategic insights for Nigeria's highest-value industries.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">
          {/* Sectors Interactive Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                  activeSectorId === sector.id 
                    ? "bg-white shadow-lg border-primary-200 ring-1 ring-primary-500/10 scale-[1.02] z-10" 
                    : "bg-slate-50 border-transparent hover:bg-slate-100 hover:border-slate-200 text-slate-500"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${activeSectorId === sector.id ? sector.color : "bg-slate-200 text-slate-500"}`}>
                  <sector.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-semibold text-base transition-colors ${activeSectorId === sector.id ? "text-navy-900" : ""}`}>
                    {sector.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Dynamic Details Panel */}
          <div className="w-full lg:w-2/3 h-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSector.id}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-12 h-full flex flex-col"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${activeSector.color}`}>
                    <activeSector.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-navy-900">{activeSector.name}</h3>
                    <p className="text-lg text-slate-500 mt-1">{activeSector.description}</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-10 mt-8 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-navy-900 font-semibold border-b border-slate-100 pb-2">
                      <Database className="h-5 w-5 text-primary-500" />
                      <h4>Sector-Specific Attributes</h4>
                    </div>
                    <ul className="space-y-4">
                      {activeSector.attributes.map((attr, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 leading-snug">{attr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3 text-navy-900 font-semibold">
                      <ShieldCheck className="h-5 w-5 text-emerald-500" />
                      <h4>The Value Proposition</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed italic">
                      "{activeSector.useCase}"
                    </p>
                    <div className="mt-8">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Baseline Data Included</div>
                      <div className="flex flex-wrap gap-2">
                        {["CAC Registration", "Decision-Makers", "Size & Year Founded", "Verified Timestamps"].map(badge => (
                          <span key={badge} className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200 shadow-sm">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
