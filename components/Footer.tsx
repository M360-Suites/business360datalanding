import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-navy-900 tracking-tight">Business360 Data</span>
            <p className="text-sm leading-6 text-slate-600 max-w-xs">
              The sector-focused B2B business intelligence database built for Nigeria. Find, understand, and reach verified Nigerian companies from one platform.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-navy-900">Platform</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Company Search</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Sector Intelligence</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Economy Insights</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-navy-900">Sectors</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Financial Services</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Technology & FMCG</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Retail & Hospitality</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-navy-900">Company</h3>
                <ul className="mt-6 space-y-4">
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">About</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Pricing</Link></li>
                  <li><Link href="#" className="text-sm leading-6 text-slate-600 hover:text-primary-600">Contact</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-navy-900">Ready to replace fragmented buying?</h3>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 flex items-center gap-2 justify-center"
                  >
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Business360 Data. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
