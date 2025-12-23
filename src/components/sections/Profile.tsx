"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Globe, Milestone } from "lucide-react";

export const Profile = () => {
    return (
        <div className="min-h-screen bg-obsidian py-32 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-48 h-48 rounded-2xl overflow-hidden border border-gold/30 p-1"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-charcoal to-obsidian flex items-center justify-center">
                            <span className="text-4xl font-serif text-gold/20">JD</span>
                        </div>
                    </motion.div>
                    <div className="text-center md:text-left">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold tracking-[0.3em] uppercase text-[10px] mb-4"
                        >
                            Principal Investor
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-serif mb-6"
                        >
                            Julian Draxler
                        </motion.h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {["Forbes 30U30", "YC Alum", "Angel Investor"].map((tag) => (
                                <span key={tag} className="px-4 py-1.5 glass rounded-full text-[10px] uppercase tracking-widest text-muted">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="space-y-24">
                    <div>
                        <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-12 border-b border-white/5 pb-4">Timeline & Milestones</h3>
                        <div className="space-y-12">
                            {[
                                { year: "2024", event: "Founded Aurum Capital Partners", icon: <Briefcase size={16} /> },
                                { year: "2021", event: "Series C Exit: Neo-Fintech Group", icon: <Award size={16} /> },
                                { year: "2018", event: "Acquired Historic Estate, Tuscany", icon: <Globe size={16} /> },
                                { year: "2015", event: "First Institutional Investment", icon: <Milestone size={16} /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <span className="text-gold font-serif text-xl w-16">{item.year}</span>
                                    <div className="flex-1 flex items-center gap-6 glass-card !p-6 group-hover:scale-[1.02] transition-transform">
                                        <div className="text-gold">{item.icon}</div>
                                        <p className="text-platinum text-sm tracking-wide">{item.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="glass-card">
                            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-6">Investment Philosophy</h4>
                            <p className="text-sm leading-relaxed italic text-platinum/80">
                                "We do not seek to beat the market; we seek to exit the market. Precision in allocation, silence in execution, and permanence in value."
                            </p>
                        </div>
                        <div className="glass-card">
                            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-6">Current Focus</h4>
                            <ul className="space-y-3">
                                {["Post-Scarcity Infrastructure", "Longevity Research", "Private Aviation Logistics"].map(item => (
                                    <li key={item} className="text-sm text-platinum flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
