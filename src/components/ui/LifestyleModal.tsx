"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, ShieldCheck, Mail } from "lucide-react";

interface LifestyleModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: { name: string; status: string; image: string } | null;
}

export const LifestyleModal = ({ isOpen, onClose, item }: LifestyleModalProps) => {
    if (!item) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center px-4"
                >
                    <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-md" onClick={onClose} />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl glass rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-platinum hover:text-gold transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="h-64 md:h-full relative">
                            <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent md:bg-gradient-to-r" />
                        </div>

                        <div className="p-8 md:p-16 space-y-12 overflow-y-auto max-h-[80vh]">
                            <div>
                                <p className="text-gold tracking-[0.3em] uppercase text-[10px] mb-4">{item.status}</p>
                                <h2 className="text-4xl md:text-5xl font-serif mb-6">{item.name}</h2>
                                <div className="flex gap-6 text-muted text-xs tracking-widest uppercase">
                                    <span className="flex items-center gap-2"><MapPin size={14} /> Global Access</span>
                                    <span className="flex items-center gap-2"><ShieldCheck size={14} /> Encrypted Inquiry</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted border-b border-white/5 pb-4">Private Specifications</h4>
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { label: "Configuration", value: "Bespoke" },
                                        { label: "Availability", value: "Immediate" },
                                        { label: "Privacy Grade", value: "Ultra" },
                                        { label: "Service", value: "Full Concierge" }
                                    ].map(spec => (
                                        <div key={spec.label}>
                                            <p className="text-[9px] text-muted uppercase mb-1">{spec.label}</p>
                                            <p className="text-sm font-sans text-platinum">{spec.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted border-b border-white/5 pb-4">Initiate Inquiry</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    This item is part of the Aurum Private Collection. To arrange a private viewing or further intelligence, please submit an encrypted request.
                                </p>
                                <button className="w-full py-4 bg-gold-gradient rounded-full text-obsidian tracking-[0.2em] font-bold text-[10px] uppercase flex items-center justify-center gap-3">
                                    <Mail size={16} /> Submit Private Inquiry
                                </button>
                                <p className="text-center text-[9px] text-muted italic">A dedicated primary agent will respond within 4 hours.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
