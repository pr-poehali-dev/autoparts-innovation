
import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

const FeaturesSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <FeatureCard 
        icon="Truck" 
        title="Быстрая доставка" 
        description="Доставка в любую точку России и СНГ от 1 до 3 дней"
      />
      <FeatureCard 
        icon="ShieldCheck" 
        title="Гарантия качества" 
        description="Все товары сертифицированы и имеют гарантию производителя"
      />
      <FeatureCard 
        icon="Wallet" 
        title="Удобная оплата" 
        description="Оплачивайте заказы любым удобным способом"
      />
    </section>
  );
};

export default FeaturesSection;
