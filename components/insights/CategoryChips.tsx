"use client";

import { CATEGORIES } from "@/lib/insights";

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryChips({ selectedCategory, onSelectCategory }: CategoryChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isSelected
                ? "text-white shadow-lg"
                : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
            }`}
            style={isSelected ? {
              background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
              boxShadow: "0 4px 20px rgba(233, 66, 88, 0.4)"
            } : {}}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
