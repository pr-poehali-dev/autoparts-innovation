
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <header className="bg-[#1A1F2C] text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Icon name="Car" size={32} className="text-[#33C3F0] mr-2" />
          <h1 className="text-2xl font-bold">АвтоМаркет</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="flex items-center">
            <Icon name="ShoppingCart" className="mr-2" />
            Корзина
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Icon name="Heart" className="mr-2" />
            Избранное
          </Button>
          <Button variant="outline" className="flex items-center">
            <Icon name="User" className="mr-2" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
