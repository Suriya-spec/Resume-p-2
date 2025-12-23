"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", value: 45000000 },
    { month: "Feb", value: 52000000 },
    { month: "Mar", value: 48000000 },
    { month: "Apr", value: 61000000 },
    { month: "May", value: 59000000 },
    { month: "Jun", value: 68000000 },
    { month: "Jul", value: 84000000 },
];

export const WealthChart = () => {
    return (
        <div className="w-full h-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#C9A24D" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#C9A24D" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#8B9098", fontSize: 10 }}
                        dy={10}
                    />
                    <YAxis hide />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#12161C",
                            border: "1px solid rgba(201, 162, 77, 0.2)",
                            borderRadius: "12px",
                            fontSize: "12px",
                            color: "#EDEDED",
                        }}
                        itemStyle={{ color: "#C9A24D" }}
                        formatter={(value: number) => [`₹${(value / 10000000).toFixed(1)}Cr`, "Value"]}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#C9A24D"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
