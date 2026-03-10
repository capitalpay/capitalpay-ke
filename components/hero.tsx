'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wifi } from 'lucide-react'

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative min-h-[80vh] flex items-center py-20"
      style={{
        background: "radial-gradient(circle at top, #EF5E41 0%, #002C62 45%, #020617 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 font-medium text-sm mb-6"
          >
            <Wifi className="w-4 h-4" />
            Tap to Pay UK
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Turn your phone into a{' '}
            <span className="text-gradient">card machine</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
          >
            Accept contactless card payments directly on your phone. 
            No terminals, no cables, no paperwork. Built for UK businesses.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#E94258] via-[#F27224] to-[#EF5E41] shadow-lg hover:brightness-110 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
