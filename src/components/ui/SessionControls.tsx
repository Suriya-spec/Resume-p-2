"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Settings, Shield, LogOut, CheckCircle2, ChevronRight, X } from "lucide-react";

interface SessionControlsProps {
    onLogout: () => void;
    onNavigate: (tab: string) => void;
}

export const SessionControls = ({ onLogout, onNavigate }: SessionControlsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const [lastActivity] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    // Quick modals state
    const [modalInfo, setModalInfo] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle Esc key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleLogout = () => {
        setShowLogoutConfirm(false);
        setIsOpen(false);
        // Show brief transition before calling actual logout
        // Using a small timeout to simulate the "Session concluded" transition logic if needed, 
        // but the parent handles the actual logout state clearing.
        onLogout();
    };

    const QuickModal = ({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) => (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/60 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-md bg-[#0B0E11] border border-gold/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <div className="flex justify-between items-start mb-8">
                    <h3 className="text-xl font-serif text-platinum">{title}</h3>
                    <button onClick={onClose} className="text-muted hover:text-gold transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {children}
            </motion.div>
        </div>
    );

    return (
        <div className="relative" ref={containerRef}>
            {/* The Trigger */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 rounded-full border p-[2px] cursor-pointer transition-all duration-500 ${isOpen ? "border-gold shadow-[0_0_15px_rgba(201,162,77,0.3)]" : "border-gold/30 hover:border-gold"
                    }`}
            >
                <div className="w-full h-full rounded-full bg-charcoal overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-gold/40 to-transparent opacity-80" />
                    {/* Status Dot */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-[1.5px] border-charcoal shadow-sm" />
                </div>
            </motion.div>

            {/* The Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, y: 10, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Ease-out luxury feel
                        className="absolute top-14 right-0 w-80 bg-[#0F1216]/95 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">Secure Session Active</p>
                            </div>
                            <p className="text-xs text-muted font-sans pl-4.5">Verified Client • HNI-702</p>
                        </div>

                        {/* Options */}
                        <div className="p-2 space-y-1">
                            <button
                                onClick={() => { onNavigate('profile'); setIsOpen(false); }}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                            >
                                <div className="flex items-center gap-3 text-sm text-platinum">
                                    <User size={16} className="text-gold/70" />
                                    <span>View Profile</span>
                                </div>
                                <ChevronRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
                            </button>

                            <button
                                onClick={() => setModalInfo({
                                    title: "Session Preferences",
                                    content: (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                                                <div>
                                                    <p className="text-sm text-platinum mb-1">Haptic Feedback</p>
                                                    <p className="text-[10px] text-muted">Tactile response on interaction</p>
                                                </div>
                                                <div className="w-8 h-4 bg-gold/20 rounded-full relative">
                                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-gold rounded-full shadow-sm" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                                                <div>
                                                    <p className="text-sm text-platinum mb-1">Reduced Motion</p>
                                                    <p className="text-[10px] text-muted">Minimize interface animations</p>
                                                </div>
                                                <div className="w-8 h-4 bg-white/10 rounded-full relative">
                                                    <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-muted rounded-full" />
                                                </div>
                                            </div>
                                            <div className="pt-4 text-center">
                                                <p className="text-[10px] text-muted italic">Changes apply to this device only.</p>
                                            </div>
                                        </div>
                                    )
                                })}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                            >
                                <div className="flex items-center gap-3 text-sm text-platinum">
                                    <Settings size={16} className="text-gold/70" />
                                    <span>Session Preferences</span>
                                </div>
                            </button>

                            <button
                                onClick={() => setModalInfo({
                                    title: "Security Overview",
                                    content: (
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl text-center">
                                                    <CheckCircle2 size={24} className="text-green-500 mx-auto mb-2" />
                                                    <p className="text-xs text-green-400 uppercase tracking-wider font-bold">Encrypted</p>
                                                </div>
                                                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
                                                    <Shield size={24} className="text-gold mx-auto mb-2" />
                                                    <p className="text-xs text-gold uppercase tracking-wider font-bold">Biometric</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4 pt-4 border-t border-white/5">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-muted">Session Status</span>
                                                    <span className="text-platinum flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                        Active
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-muted">Current Device</span>
                                                    <span className="text-platinum">Chrome / Windows</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-muted">Last Activity</span>
                                                    <span className="text-platinum">{lastActivity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                            >
                                <div className="flex items-center gap-3 text-sm text-platinum">
                                    <Shield size={16} className="text-gold/70" />
                                    <span>Security Overview</span>
                                </div>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] bg-white/5 w-full my-1" />

                        {/* Logout */}
                        <div className="p-2">
                            <button
                                onClick={() => setShowLogoutConfirm(true)}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-500/10 hover:text-red-400 text-muted transition-colors group text-left"
                            >
                                <div className="flex items-center gap-3 text-sm">
                                    <LogOut size={16} />
                                    <span>End Private Session</span>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Logout Confirmation Modal */}
            <AnimatePresence>
                {showLogoutConfirm && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/80 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="w-full max-w-sm bg-[#0F1216] border border-red-500/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                        >
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                                    <LogOut size={32} className="text-red-500" />
                                </div>
                                <h3 className="text-xl font-serif text-platinum mb-2">End private session?</h3>
                                <p className="text-sm text-muted">For your security, your session cache will be cleared.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setShowLogoutConfirm(false)}
                                    className="px-4 py-3 rounded-xl bg-white/5 text-platinum hover:bg-white/10 text-sm transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 text-sm font-semibold transition-colors"
                                >
                                    End Session
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Quick Modals (Preferences / Security) */}
            <AnimatePresence>
                {modalInfo && (
                    <QuickModal
                        title={modalInfo.title}
                        onClose={() => setModalInfo(null)}
                    >
                        {modalInfo.content}
                    </QuickModal>
                )}
            </AnimatePresence>
        </div>
    );
};
