"use client";

import React, { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { AuthFlow } from "@/components/ui/AuthFlow";
import { Dashboard } from "@/components/sections/Dashboard";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthComplete = () => {
        setIsAuthOpen(false);
        setIsAuthenticated(true);
        // Smooth scroll to top when authenticated
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    return (
        <SmoothScroll>
            <main className="relative">
                <AnimatePresence mode="wait">
                    {!isAuthenticated ? (
                        <motion.div
                            key="landing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Hero onOpenAuth={() => setIsAuthOpen(true)} />

                            {/* Stats Counters */}
                            <section className="py-20 border-y border-white/5">
                                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                                    {[
                                        { label: "Assets Under Management", value: "₹4500Cr+" },
                                        { label: "Private Clients", value: "120" },
                                        { label: "Global Markets", value: "24" },
                                        { label: "Years of Excellence", value: "15" }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="space-y-2"
                                        >
                                            <p className="text-3xl md:text-5xl font-serif text-gold">{stat.value}</p>
                                            <p className="text-[10px] tracking-widest uppercase text-muted">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Value Pillars Section */}
                            <section className="py-40 px-6 bg-charcoal/30">
                                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {[
                                        { title: "Clarity", desc: "See your world without distortion. Every figure, asset, and decision presented with intention — never excess." },
                                        { title: "Control", desc: "Your wealth, your pace. Designed to respond instantly, quietly, and precisely to your intent." },
                                        { title: "Discretion", desc: "Nothing public. Nothing performative. This experience exists solely for you." }
                                    ].map((pillar, i) => (
                                        <motion.div
                                            key={pillar.title}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            className="glass-card group"
                                        >
                                            <h3 className="text-3xl font-serif mb-6 group-hover:text-gold transition-colors">{pillar.title}</h3>
                                            <p className="text-muted leading-relaxed font-sans">{pillar.desc}</p>
                                            <div className="mt-8 h-[1px] bg-white/5 w-0 group-hover:w-full transition-all duration-700 bg-gold" />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Experience Overview */}
                            <section className="py-40 px-6">
                                <div className="max-w-4xl mx-auto text-center space-y-12">
                                    <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-[0.04em]">
                                        An environment built for elevated decision-making.
                                    </h2>
                                    <p className="text-platinum/82 text-xl leading-[1.6] font-sans">
                                        Aurum is not a dashboard. It is a composed digital space where information behaves,
                                        transitions feel deliberate, and every interaction respects your time.
                                    </p>
                                    <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-left border-t border-white/5">
                                        {[
                                            "Wealth visualization",
                                            "Asset intelligence",
                                            "Private vault",
                                            "Secure access",
                                            "Editorial design",
                                            "Silent interactions"
                                        ].map((item, i) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                                <span className="text-[10px] tracking-[0.2em] uppercase text-platinum/82">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Final CTA */}
                            <section className="py-60 px-6 text-center">
                                <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-[0.04em]">Access is not guaranteed.</h2>
                                <p className="text-platinum/82 text-lg max-w-xl mx-auto mb-12 font-sans">
                                    Aurum is intentionally limited. Each access request is reviewed to preserve the integrity of the experience.
                                </p>
                                <button
                                    onClick={() => setIsAuthOpen(true)}
                                    className="luxury-button px-12 py-5 bg-gold-gradient rounded-full text-obsidian font-bold"
                                >
                                    Request Private Access
                                </button>
                            </section>

                            <footer className="py-12 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mb-24 md:mb-0">
                                <span className="text-[10px] tracking-widest text-muted uppercase">© AURUM. All rights reserved.</span>
                                <span className="text-[10px] tracking-widest text-muted uppercase">Designed for privacy. Built for permanence.</span>
                            </footer>

                            {/* Mobile Sticky CTA */}
                            <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-6">
                                <button
                                    onClick={() => setIsAuthOpen(true)}
                                    className="luxury-button w-full py-4 bg-gold-gradient rounded-full text-obsidian font-bold shadow-2xl shadow-gold/20"
                                >
                                    Request Private Access
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <Dashboard onLogout={() => {
                                setIsAuthenticated(false);
                                window.scrollTo({ top: 0, behavior: "instant" });
                            }} />
                            <Lifestyle />

                            <footer className="py-20 text-center border-t border-white/5">
                                <p className="text-[10px] tracking-[0.4em] uppercase text-muted">
                                    End of Private Session • Session ID: AUR-992-X
                                </p>
                            </footer>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AuthFlow
                    isOpen={isAuthOpen}
                    onClose={() => setIsAuthOpen(false)}
                    onComplete={handleAuthComplete}
                />
            </main>
        </SmoothScroll>
    );
}
