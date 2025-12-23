"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Shield, Layers, Wallet, MoreHorizontal, ChevronRight } from "lucide-react";
import { Lifestyle } from "./Lifestyle";
import { Profile } from "./Profile";
import { WealthChart } from "../ui/WealthChart";

const assets = [
    { name: "Private Equity", value: "₹24,50,00,000", change: "+4.2%", type: "Strategic" },
    { name: "Public Markets", value: "₹42,10,90,000", change: "-1.1%", type: "Liquid" },
    { name: "Real Estate", value: "₹12,40,00,000", change: "+0.8%", type: "Fixed" },
    { name: "Digital Assets", value: "₹5,23,00,000", change: "+12.4%", type: "Growth" },
];

import { About } from "./About";

export const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen bg-obsidian">
            {/* Top Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={onLogout}>
                    <span className="text-2xl font-serif tracking-tighter gold-text-gradient">AURUM</span>
                </div>

                <div className="hidden md:flex items-center gap-12 glass px-8 py-3 rounded-full pointer-events-auto">
                    {["Overview", "Lifestyle", "Profile", "About"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item.toLowerCase())}
                            className={`luxury-button transition-all duration-300 relative ${activeTab === item.toLowerCase() ? "text-gold" : "text-muted hover:text-platinum"
                                }`}
                        >
                            {item}
                            {activeTab === item.toLowerCase() && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] text-muted tracking-widest uppercase mb-1">Secure Session</p>
                        <p className="text-xs text-platinum/82">Verified • HNI-702</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gold/30 p-[2px] cursor-pointer hover:border-gold transition-colors duration-300">
                        <div className="w-full h-full rounded-full bg-charcoal overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gold/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="pt-32 pb-20 px-6 md:px-12"
                    >
                        <div className="max-w-7xl mx-auto space-y-12">
                            {/* Hero Metric */}
                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-[10px] tracking-[0.3em] uppercase text-muted"
                                >
                                    Consolidated valuation
                                </motion.p>
                                <div className="flex flex-col md:flex-row md:items-end gap-x-12 gap-y-6">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-5xl md:text-7xl font-serif tracking-[0.04em]"
                                    >
                                        ₹84,23,90,000
                                    </motion.h1>
                                    <div className="flex gap-8 mb-2">
                                        <div className="space-y-1">
                                            <p className="text-[10px] tracking-widest uppercase text-muted">Trajectory</p>
                                            <div className="flex items-center gap-2 text-green-500">
                                                <TrendingUp size={14} />
                                                <span className="text-sm tracking-tight font-sans">+3.4%</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] tracking-widest uppercase text-muted">Flexibility</p>
                                            <div className="flex items-center gap-2 text-platinum">
                                                <Shield size={14} className="text-gold" />
                                                <span className="text-sm tracking-tight font-sans">72%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Assets Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {assets.map((asset, i) => (
                                    <motion.div
                                        key={asset.name}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                                        className="glass-card group"
                                    >
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors duration-[250ms]">
                                                {i === 0 && <Layers size={20} />}
                                                {i === 1 && <Wallet size={20} />}
                                                {i === 2 && <Shield size={20} />}
                                                {i === 3 && <TrendingUp size={20} />}
                                            </div>
                                            <button className="text-muted hover:text-gold transition-colors duration-200">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>

                                        <p className="text-[10px] tracking-widest uppercase text-muted mb-1">{asset.type}</p>
                                        <h3 className="text-lg font-serif mb-4 tracking-[0.04em]">{asset.name}</h3>
                                        <div className="flex items-end justify-between">
                                            <p className="text-xl font-sans font-light tracking-tight">{asset.value}</p>
                                            <span className={`text-[10px] uppercase font-bold ${asset.change.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                                                {asset.change}
                                            </span>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-between cursor-pointer">
                                            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">View Details</span>
                                            <ChevronRight size={14} className="text-gold" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Secondary Info */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2 glass-card h-[400px] flex flex-col p-8">
                                    <div className="flex justify-between items-center mb-8">
                                        <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted">Performance Analytics</h4>
                                        <span className="text-[10px] text-gold tracking-widest uppercase">Last 6 Months</span>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <WealthChart />
                                    </div>
                                </div>
                                <div className="glass-card flex flex-col h-[400px]">
                                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted mb-8">Recent Activity</h4>
                                    <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                        {[
                                            "Asset acquisition: real estate",
                                            "Dividend reinvestment protocol",
                                            "Privacy shield activated",
                                            "Quarterly advisory session scheduled"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5" />
                                                <div>
                                                    <p className="text-[11px] text-platinum/82 leading-relaxed">{text}</p>
                                                    <p className="text-[9px] text-muted tracking-wide mt-1 uppercase">{i === 0 ? 'YESTERDAY' : '3 DAYS AGO'}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 text-center">
                                        <p className="text-[9px] text-muted italic opacity-60">Silence often indicates stability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === "lifestyle" && <Lifestyle />}
                {activeTab === "profile" && <Profile />}
                {activeTab === "about" && <About />}
            </AnimatePresence>
        </div>
    );
};
