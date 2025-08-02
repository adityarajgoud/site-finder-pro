import { Service } from "@/types/service";
import { ServiceCard } from "./ServiceCard";
import { Star } from "lucide-react";

interface FeaturedServicesProps {
  services: Service[];
}

export const FeaturedServices = ({ services }: FeaturedServicesProps) => {
  const featuredServices = services.filter(service => service.featured);

  if (featuredServices.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-primary animate-glow">
          <Star className="h-6 w-6 text-white fill-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Featured Services</h2>
          <p className="text-muted-foreground">Most popular and frequently used services</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};