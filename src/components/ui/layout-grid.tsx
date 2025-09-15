"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const LayoutGrid = ({ cards }: { cards: any[] }) => {

  // Helper function to extract text content from a React node (string, number, element or array)
  const getText = (node: any): string => {
    if (node == null) return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getText).join(" ");
  if (React.isValidElement(node)) return getText((node as any).props?.children);
    // fallback: try toString
    try {
      return String(node);
    } catch {
      return "";
    }
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => {
        return (
          <motion.div
            key={card.id}
            className={`relative overflow-hidden rounded-lg ${card.className}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Use Next.js Image for better rendering */}
            <div className="w-full h-56 md:h-64 lg:h-48 relative">
              <Image
                src={card.thumbnail}
                alt={`card-${card.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Badge overlay */}
              {card.badge && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[rgba(220,220,220,0.80)] backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-[#423F3F] font-medium text-sm font-[family-name:var(--font-inter)]">
                      {card.badge}
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* Optional caption area - if card.content exists, render it below image */}
            {card.content && (
              <div className="p-3">
                <div className="text-primary font-semibold text-base">
                  {getText(React.Children.toArray(card.content.props.children)[0])}
                </div>
                <div className="text-sm text-gray-600">
                  {getText(React.Children.toArray(card.content.props.children)[1])}
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};