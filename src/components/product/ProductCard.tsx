
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

export default ProductCard;
