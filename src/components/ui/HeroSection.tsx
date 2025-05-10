
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="mb-12 bg-gradient-to-r from-[#1A1F2C] to-[#2C3E50] text-white rounded-lg p-8 shadow-xl">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Запчасти для вашего автомобиля</h2>
        <p className="text-xl mb-6">Огромный выбор оригинальных и аналоговых запчастей для автомобилей любых марок</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input 
            placeholder="Поиск запчастей..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white text-black w-full sm:w-96"
          />
          <Button className="bg-[#F97316] hover:bg-[#EA580C]">
            <Icon name="Search" className="mr-2" />
            Найти
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
