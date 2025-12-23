"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = ({ onOpenAuth }: { onOpenAuth: () => void }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Light Sweep Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent w-[200%] -translate-x-full animate-light-sweep" />
            </div>

            <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="text-gold tracking-[0.3em] text-[10px] uppercase mb-8 font-sans"
                >
                    Private Access Platform
                </motion.p>

                <h1 className="hero-headline mb-8 font-serif">
                    {["Private", "Wealth.", "Reimagined."].map((word, i) => {
                        const delays = [0, 0.12, 0.26];
                        const durations = [0.8, 0.8, 1.0];
                        return (
                            <motion.span
                                key={i}
                                className="inline-block mr-[0.2em]"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: durations[i],
                                    delay: delays[i],
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 0.82, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="text-platinum text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans leading-[1.6]"
                >
                    A digital sanctuary designed for those who operate beyond convention —
                    where clarity, control, and discretion converge.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                    <button
                        onClick={onOpenAuth}
                        className="luxury-button group relative px-10 py-4 bg-transparent border border-gold text-gold rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                        <span className="relative z-10 group-hover:text-obsidian transition-colors duration-[120ms]">
                            Request Private Access
                        </span>
                    </button>

                    <button className="luxury-button group relative py-2 text-platinum">
                        Explore Experience
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-platinum/30 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-[180ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                    </button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-20 text-[10px] tracking-[0.3em] uppercase w-full"
                >
                    Access is limited. Approval is discretionary.
                </motion.p>
            </motion.div>
        </section>
    );
};
