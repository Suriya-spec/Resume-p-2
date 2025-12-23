"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Car, Home, ArrowUpRight } from "lucide-react";
import { LifestyleModal } from "../ui/LifestyleModal";

const collections = [
    {
        title: "Private Aviation",
        items: [
            { name: "Gulfstream G700", status: "Available", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" },
            { name: "Bombardier Global 7500", status: "In Use", image: "https://images.unsplash.com/photo-1583609842652-675d4e6616c3?q=80&w=1000&auto=format&fit=crop" },
        ],
        icon: <Plane size={24} />,
    },
    {
        title: "Automotive Collection",
        items: [
            { name: "Pagani Huayra R", status: "Curated", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop" },
            { name: "Ferrari SF90 Stradale", status: "Available", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop" },
        ],
        icon: <Car size={24} />,
    },
    {
        title: "Global Residences",
        items: [
            { name: "Villa Aman, Phuket", status: "Secure", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop" },
            { name: "Chelsea Penthouse", status: "Curated", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" },
        ],
        icon: <Home size={24} />,
    },
];

export const Lifestyle = () => {
    const [selectedItem, setSelectedItem] = React.useState<{ name: string; status: string; image: string } | null>(null);

    return (
        <div className="min-h-screen bg-obsidian py-32 px-6 md:px-12">
            <LifestyleModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
            />
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4"
                    >
                        Curated Access
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif"
                    >
                        Lifestyle Vault
                    </motion.h2>
                </div>

                <div className="space-y-32">
                    {collections.map((collection) => (
                        <section key={collection.title}>
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                                    {collection.icon}
                                </div>
                                <h3 className="text-2xl font-serif">{collection.title}</h3>
                                <div className="flex-1 h-[1px] bg-white/5" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {collection.items.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative aspect-[16/10] overflow-hidden rounded-3xl cursor-pointer"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                                        <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />

                                        <div className="absolute bottom-10 left-10 right-10">
                                            <p className="text-[10px] tracking-widest uppercase text-gold mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                {item.status}
                                            </p>
                                            <h4 className="text-3xl font-serif mb-6">{item.name}</h4>
                                            <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-platinum hover:text-gold transition-colors">
                                                Request Inquiry <ArrowUpRight size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <p className="text-muted font-serif italic text-xl">
                        "Luxury is not excess. It is precision, exercised quietly."
                    </p>
                </div>
            </div>
        </div>
    );
};
