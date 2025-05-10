import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/ui/HeroSection";
import ProductCategoryTabs from "@/components/product/ProductCategoryTabs";
import FeaturesSection from "@/components/product/FeaturesSection";
import { products, categories } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Все категории");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      currentCategory === "Все категории" ||
      product.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ProductCategoryTabs
          categories={categories}
          filteredProducts={filteredProducts}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
