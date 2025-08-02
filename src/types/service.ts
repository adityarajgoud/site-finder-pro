export interface Service {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  featured?: boolean;
  createdAt: Date;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
}