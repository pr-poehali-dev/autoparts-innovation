
import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">АвтоМаркет</h3>
            <p className="text-gray-300">Ваш надежный поставщик автозапчастей с 2005 года</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#33C3F0]">О нас</a></li>
              <li><a href="#" className="hover:text-[#33C3F0]">Контакты</a></li>
              <li><a href="#" className="hover:text-[#33C3F0]">Блог</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#33C3F0]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#33C3F0]">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-[#33C3F0]">Возврат товара</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <p className="mb-2">8 (800) 123-45-67</p>
            <p className="mb-4">info@automarket.ru</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#33C3F0]"><Icon name="Facebook" /></a>
              <a href="#" className="hover:text-[#33C3F0]"><Icon name="Instagram" /></a>
              <a href="#" className="hover:text-[#33C3F0]"><Icon name="Twitter" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} АвтоМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
