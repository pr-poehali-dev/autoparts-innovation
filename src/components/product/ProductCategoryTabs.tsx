
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/product/ProductCard";
import Icon from "@/components/ui/icon";
import { Product } from "@/types/product";

interface ProductCategoryTabsProps {
  categories: string[];
  filteredProducts: Product[];
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const ProductCategoryTabs: React.FC<ProductCategoryTabsProps> = ({
  categories,
  filteredProducts,
  currentCategory,
  setCurrentCategory
}) => {
  return (
    <section className="mb-8">
      <Tabs defaultValue="Все категории" onValueChange={setCurrentCategory} value={currentCategory}>
        <TabsList className="mb-6 flex flex-wrap justify-start">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category} 
              className="data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <h3 className="text-2xl font-bold mb-6">
              {category !== "Все категории" ? category : "Популярные товары"}
            </h3>
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
  );
};

export default ProductCategoryTabs;
