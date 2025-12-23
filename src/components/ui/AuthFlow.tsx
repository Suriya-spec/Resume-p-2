"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";

export const AuthFlow = ({ isOpen, onClose, onComplete }: { isOpen: boolean; onClose: () => void; onComplete: () => void }) => {
    const [step, setStep] = useState<"form" | "verifying" | "success">("form");
    const [statusText, setStatusText] = useState("Verifying...");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("verifying");
    };

    useEffect(() => {
        if (step === "verifying") {
            const timers = [
                setTimeout(() => setStatusText("Reviewing credentials..."), 1200),
                setTimeout(() => setStatusText("Access granted"), 3000),
                setTimeout(() => setStep("success"), 3600),
            ];
            return () => timers.forEach(clearTimeout);
        }
    }, [step]);

    useEffect(() => {
        if (step === "success") {
            const timer = setTimeout(() => {
                onComplete();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [step, onComplete]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4"
                >
                    <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-[4px]" onClick={onClose} />

                    <motion.div
                        initial={{ y: 64, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 32, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full max-w-lg glass p-10 rounded-3xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-muted hover:text-white transition-colors duration-200"
                        >
                            <X size={20} />
                        </button>

                        {step === "form" && (
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.12 }}
                                key="form"
                            >
                                <h2 className="text-3xl font-serif mb-2">Request Private Access</h2>
                                <p className="text-muted mb-8 font-sans text-[16px] leading-[1.6]">
                                    Tell us a little about yourself. Discretion is respected. Information is never shared.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {[
                                        { label: "Full Name", type: "text" },
                                        { label: "Email Address", type: "email" }
                                    ].map((field, i) => (
                                        <motion.div
                                            key={field.label}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                                        >
                                            <label className="block text-[10px] tracking-widest uppercase text-muted mb-2">{field.label}</label>
                                            <input
                                                required
                                                type={field.type}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50 transition-colors duration-300 font-sans text-platinum"
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.44 }}
                                    >
                                        <label className="block text-[10px] tracking-widest uppercase text-muted mb-2">Reason for Request</label>
                                        <select className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50 transition-colors duration-300 font-sans appearance-none text-platinum">
                                            <option className="bg-charcoal">Private Wealth Management</option>
                                            <option className="bg-charcoal">Lifestyle Concierge</option>
                                            <option className="bg-charcoal">Asset Diversification</option>
                                            <option className="bg-charcoal">Strategic Investment</option>
                                        </select>
                                    </motion.div>

                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        type="submit"
                                        className="luxury-button w-full py-4 bg-gold-gradient rounded-full text-obsidian font-bold"
                                    >
                                        Submit Request
                                    </motion.button>
                                    <p className="text-center text-[10px] text-muted tracking-widest uppercase mt-4">
                                        Review typically completes within moments.
                                    </p>
                                </form>
                            </motion.div>
                        )}

                        {step === "verifying" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key="verifying"
                                className="py-20 text-center"
                            >
                                <Loader2 className="animate-spin text-gold mx-auto mb-8" size={40} strokeWidth={1} />
                                <div className="space-y-4">
                                    <p className="text-gold tracking-[0.2em] uppercase text-[10px]">
                                        {statusText}
                                    </p>
                                    <div className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gold"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 3.6, ease: "linear" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === "success" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                key="success"
                                className="py-20 text-center"
                            >
                                <CheckCircle2 className="text-gold mx-auto mb-8" size={64} strokeWidth={1} />
                                <h2 className="text-3xl font-serif mb-4">Welcome to Aurum.</h2>
                                <p className="text-muted font-sans tracking-[0.2em] uppercase text-[10px]">
                                    Proceed carefully.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
