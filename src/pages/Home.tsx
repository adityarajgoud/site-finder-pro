import { useState, useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedServices } from "@/components/FeaturedServices";
import { CategorySection } from "@/components/CategorySection";
import { SearchBar } from "@/components/SearchBar";
import { initialServices } from "@/data/services";
import { Service } from "@/types/service";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const servicesRef = useRef<HTMLDivElement>(null);

  const allServices = initialServices.flatMap(category => category.services);

  const filteredCategories = initialServices.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.services.length > 0);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <HeroSection onScrollToServices={scrollToServices} />
        
        <div ref={servicesRef} className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Find Your Service</h2>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search for government services, banking, utilities..."
            />
          </div>

          {!searchTerm && (
            <FeaturedServices services={allServices} />
          )}

          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
              />
            ))}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No services found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse our categories above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};