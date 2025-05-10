
import React from "react";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center bg-[#1A1F2C] p-3 rounded-full mb-4">
        <Icon name={icon} size={24} className="text-[#33C3F0]" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
