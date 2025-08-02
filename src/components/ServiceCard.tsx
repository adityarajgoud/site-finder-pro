import { Service } from "@/types/service";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  service: Service;
  onEdit?: (service: Service) => void;
  showEdit?: boolean;
}

export const ServiceCard = ({ service, onEdit, showEdit = false }: ServiceCardProps) => {
  const IconComponent = (Icons as any)[service.icon] || Icons.Link;

  const handleClick = () => {
    if (showEdit && onEdit) {
      onEdit(service);
    } else {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-secondary border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer transform hover:scale-105"
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {service.featured && (
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                Featured
              </Badge>
            )}
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors text-xs">
          {service.description}
        </CardDescription>
      </CardContent>
      
      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </Card>
  );
};