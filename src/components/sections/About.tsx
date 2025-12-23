"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <div className="min-h-screen bg-obsidian py-32 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-32">
                <section>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold tracking-[0.3em] uppercase text-[10px] mb-8"
                    >
                        Philosophy
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="text-5xl md:text-7xl font-serif mb-12 leading-tight"
                    >
                        Designed with restraint.<br />Built with intent.
                    </motion.h2>
                    <div className="space-y-8 text-platinum/82 text-lg leading-relaxed font-sans max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Aurum began as an exploration. Not of wealth — but of how digital environments influence confidence.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Most platforms demand attention. Aurum respects it. Every decision within this experience was filtered through a single question: <span className="text-gold italic">Does this element earn its presence?</span>
                        </motion.p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="space-y-8">
                        <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted border-b border-white/5 pb-4">The Argument for Less</h3>
                        <p className="text-sm text-platinum/82 leading-relaxed">
                            Luxury, in software, is not decoration. It is silence where noise is expected. It is space where clutter is common. It is confidence without explanation.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-[10px] tracking-[0.3em] uppercase text-muted border-b border-white/5 pb-4">Precision over Volume</h3>
                        <p className="text-sm text-platinum/82 leading-relaxed">
                            Aurum demonstrates how motion discipline, copy restraint, and visual hierarchy directly influence trust — before any data is processed.
                        </p>
                    </div>
                </section>

                <section className="py-20 border-t border-white/5 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        className="text-muted font-serif italic text-2xl"
                    >
                        "Because discipline is the highest form of design."
                    </motion.p>
                </section>
            </div>
        </div>
    );
};
