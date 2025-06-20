"use client";

import Link from "next/link";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function HeroLanding() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 py-20 lg:py-18">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Perfect for Developers, Designers & Creators
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Build Your Personal Brand on One
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Beautiful Page
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Build stunning portfolio page with your bio, socials, projects and
            blog — all in one place. No coding experience needed. Open Source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-lg"
              asChild
            >
              <Link href="/ahmadgirach">
                View Demo Profile
                {/* <span>
                </span> */}
                <ArrowRight className="size-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/**<Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="size-3 bg-blue-500 rounded-full"></div>
              No Credit Card required
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-purple-500 rounded-full"></div>
              Setup in 5 Minutes
            </div>
          </motion.div>
        </div>

        {/* Large Landscape Profile Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Browser mockup frame */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <div className="size-3 bg-red-500 rounded-full"></div>
                <div className="size-3 bg-yellow-500 rounded-full"></div>
                <div className="size-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                  microsite.live/alexchen
                </div>
              </div>
            </div>

            {/* Profile content */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                {/* Profile header */}
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative inline-block mb-6">
                      <div className="size-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 shadow-xl"></div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Alex Chen
                      </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                        Senior Product Designer
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        Passionate about creating beautiful, user-centered
                        digital experiences. Currently designing the future of
                        fintech at a leading startup.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 place-items-center mb-8">
                  <h2 className="font-semibold text-3xl md:text-4xl">
                    Featured Projects
                  </h2>
                  <p className="text-muted-foreground">
                    A showcase of my recent work and personal projects
                  </p>
                </div>

                {/* Featured projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        FinTech Dashboard
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Modern banking interface design
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        E-commerce App
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Mobile shopping experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -left-4 md:-left-8 top-1/8 md:top-1/4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12.5k</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Profile Views
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute -right-4 md:-right-8 top-1/3 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">94%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Click Rate
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2.8k</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Link Clicks
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
