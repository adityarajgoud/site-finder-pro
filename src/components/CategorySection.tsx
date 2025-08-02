import { ServiceCategory } from "@/types/service";
import { ServiceCard } from "./ServiceCard";
import * as Icons from "lucide-react";

interface CategorySectionProps {
  category: ServiceCategory;
  onEditService?: (service: any) => void;
  showEdit?: boolean;
}

export const CategorySection = ({ category, onEditService, showEdit = false }: CategorySectionProps) => {
  const IconComponent = (Icons as any)[category.icon] || Icons.Folder;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-primary">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={onEditService}
            showEdit={showEdit}
          />
        ))}
      </div>
    </div>
  );
};