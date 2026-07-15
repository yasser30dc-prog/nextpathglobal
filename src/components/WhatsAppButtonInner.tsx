"use client";

import { useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButtonInner() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: "Advisor 1", phone: "+60 11 1669 5249", url: "https://wa.me/601116695249" },
    { name: "Advisor 2", phone: "+60 17 296 5249", url: "https://wa.me/60172965249" },
    { name: "Advisor 3", phone: "+60 17 882 3135", url: "https://wa.me/60178823135" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Contact Card Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-72 md:w-80 overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#25D366] to-green-400"></div>
            
            <div className="flex justify-between items-center mb-4 mt-1">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Chat with us</h4>
                <p className="text-gray-500 text-xs mt-0.5">Choose an advisor to start chatting on WhatsApp</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-[#25D366]/40 hover:bg-green-50/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#25D366]/10 text-[#25D366] p-2.5 rounded-full shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle size={18} fill="currentColor" className="text-current" />
                    </div>
                    <div>
                      <span className="block font-bold text-gray-800 text-sm">{contact.name}</span>
                      <span className="block text-gray-500 text-xs">{contact.phone}</span>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-[#25D366] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-shadow flex items-center justify-center group relative"
        aria-label="Toggle WhatsApp chat menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={32} fill="white" className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
            Chat with us!
          </span>
        )}
      </motion.button>
    </div>
  );
}
