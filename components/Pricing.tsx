"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "For solo consultants, freelancers, and small sales teams.",
    price: "₦75,000",
    features: [
      "Basic company search",
      "Limited profile views/month",
      "Access to 1-2 sectors",
      "Decision-maker contacts",
      "Verification dates visible",
    ],
    cta: "Start with Starter",
    mostPopular: false,
  },
  {
    name: "Professional",
    description: "For SMB sales and BD teams needing broad access and advanced filters.",
    price: "₦250,000",
    features: [
      "Higher profile view limit",
      "Access to all 6 sectors",
      "Advanced filtering",
      "Economy context layer",
      "CSV exports",
    ],
    cta: "Get Professional",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large teams that need advanced intelligence, custom dashboards, API access.",
    price: "₦1,000,000",
    features: [
      "Competitor monitoring",
      "Historical pricing & intelligence",
      "CRM and procurement integrations",
      "API access",
      "Custom data collection",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing Model
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Predictable pricing for data you can trust
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Monthly subscription plans for teams of all sizes. Pay monthly or save with annual billing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-3xl p-8 xl:p-10 ${
                tier.mostPopular 
                  ? "bg-white/5 ring-2 ring-primary-500 shadow-2xl" 
                  : "bg-white/5 ring-1 ring-white/10"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary-500 px-3 py-1 text-center text-sm font-semibold text-white shadow-sm">
                  Most popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300 min-h-[48px]">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-slate-300">/month</span>
                </p>
              </div>

              <button className={`w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mb-8 ${
                tier.mostPopular 
                  ? "bg-primary-500 text-white hover:bg-primary-400 focus-visible:outline-primary-500" 
                  : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
              }`}>
                {tier.cta}
              </button>

              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
