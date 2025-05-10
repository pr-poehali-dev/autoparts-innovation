
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Тормозные колодки Ferrari F50",
    category: "Тормозная система",
    price: 12500,
    manufacturer: "Brembo",
    compatibility: ["Ferrari F50", "Ferrari F40"],
    image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?q=80&w=500",
  },
  {
    id: 2,
    name: "Воздушный фильтр K&N",
    category: "Фильтры",
    price: 4800,
    manufacturer: "K&N",
    compatibility: ["BMW M3", "BMW M4", "BMW M5"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=500",
  },
  {
    id: 3,
    name: "Амортизаторы KYB Excel-G",
    category: "Подвеска",
    price: 7300,
    manufacturer: "KYB",
    compatibility: ["Toyota Camry", "Honda Accord"],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500",
  },
  {
    id: 4,
    name: "Масло моторное Castrol Edge 5W-30",
    category: "Масла и жидкости",
    price: 3200,
    manufacturer: "Castrol",
    compatibility: ["Универсальное"],
    image: "https://images.unsplash.com/photo-1604335071429-226e751890ad?q=80&w=500",
  },
  {
    id: 5,
    name: "Свечи зажигания NGK Iridium",
    category: "Система зажигания",
    price: 2100,
    manufacturer: "NGK",
    compatibility: ["Многие модели"],
    image: "https://images.unsplash.com/photo-1622428051717-dcd9dc3a082a?q=80&w=500",
  },
  {
    id: 6,
    name: "Аккумулятор Bosch S5",
    category: "Электрика",
    price: 9500,
    manufacturer: "Bosch",
    compatibility: ["Audi", "Mercedes", "BMW"],
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=500",
  },
];

const categories = [
  "Все категории",
  "Тормозная система",
  "Фильтры",
  "Подвеска",
  "Масла и жидкости",
  "Система зажигания",
  "Электрика",
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Все категории");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = currentCategory === "Все категории" || product.category === currentCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Hero Section */}
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

        {/* Categories Tabs */}
        <section className="mb-8">
          <Tabs defaultValue="Все категории" onValueChange={setCurrentCategory}>
            <TabsList className="mb-6 flex flex-wrap justify-start">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <h3 className="text-2xl font-bold mb-6">{category !== "Все категории" ? category : "Популярные товары"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="SearchX" size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-xl text-gray-600">Товары не найдены</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Features */}
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
      </main>

      {/* Footer */}
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
    </div>
  );
};

// Component for product card
const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold">{product.name}</h4>
          <Button variant="ghost" size="icon" className="hover:text-[#F97316]">
            <Icon name="Heart" size={18} />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mb-1">{product.manufacturer}</p>
        <p className="text-sm text-gray-500 mb-3">Подходит для: {product.compatibility.join(", ")}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{product.price.toLocaleString()} ₽</p>
          <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB]">
            <Icon name="ShoppingCart" size={16} className="mr-1" />
            Купить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Component for feature card
const FeatureCard = ({ icon, title, description }) => {
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

export default Index;
