"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Card {
  id: number;
  className: string;
  thumbnail: string;
  badge?: string;
  content?: React.ReactNode;
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  // Helper function to get first child safely
  const getFirstChild = (node: React.ReactNode): React.ReactNode => {
    if (!node || !React.isValidElement(node)) return null;
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (!element.props || !element.props.children) return null;
    const children = React.Children.toArray(element.props.children);
    return children.length > 0 ? children[0] : null;
  };

  // Helper function to get second child safely
  const getSecondChild = (node: React.ReactNode): React.ReactNode => {
    if (!node || !React.isValidElement(node)) return null;
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (!element.props || !element.props.children) return null;
    const children = React.Children.toArray(element.props.children);
    return children.length > 1 ? children[1] : null;
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
                  {getFirstChild(card.content)}
                </div>
                <div className="text-sm text-gray-600">
                  {getSecondChild(card.content)}
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};