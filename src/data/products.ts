
import { Product } from "@/types/product";

export const products: Product[] = [
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

export const categories: string[] = [
  "Все категории",
  "Тормозная система",
  "Фильтры",
  "Подвеска",
  "Масла и жидкости",
  "Система зажигания",
  "Электрика",
];
