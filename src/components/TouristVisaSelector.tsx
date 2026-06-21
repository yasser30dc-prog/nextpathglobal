"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Plane } from "lucide-react";

export default function TouristVisaSelector() {
  const [touristDestination, setTouristDestination] = useState("");

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-secondary/20 p-3 rounded-full text-secondary">
              <Plane size={24} />
            </span>
            <h2 className="text-2xl font-bold text-primary">Tourist Visa</h2>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Planning a trip?</h3>
          <p className="text-gray-600 text-sm">
            Select your destination and let us handle your visa process smoothly and efficiently.
          </p>
        </div>
        <div className="w-full">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
            <div className="space-y-2">
              <label htmlFor="touristDestinationSelect" className="font-semibold text-gray-700 text-sm">Where are you going?</label>
              <select
                id="touristDestinationSelect"
                value={touristDestination}
                onChange={(e) => setTouristDestination(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary outline-none bg-white text-gray-800"
              >
                <option value="">Select your destination →</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>

                <option value="australia">Australia</option>
                <option value="usa">USA</option>
                <option value="uk">United Kingdom</option>
                <option value="germany">Germany</option>
                <option value="iceland">Iceland</option>
                <option value="india">India</option>
                <option value="kenya">Kenya</option>
                <option value="netherlands">Netherlands</option>
                <option value="new-zealand">New Zealand</option>
                <option value="qatar">Qatar</option>
                <option value="sweden">Sweden</option>
              </select>
            </div>
            <Link
              href={touristDestination ? `/services/tourist-visa/${touristDestination}` : "#"}
              className="bg-secondary hover:bg-secondary-hover text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 w-full transition-all"
            >
              <Search size={18} /> Check Requirements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
