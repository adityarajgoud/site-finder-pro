import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CategorySection } from "@/components/CategorySection";
import { initialServices } from "@/data/services";
import { Service, ServiceCategory } from "@/types/service";
import { Plus, Save, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Admin = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>(initialServices);
  const [isAddingService, setIsAddingService] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { toast } = useToast();

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    url: "",
    category: "",
    icon: "Link",
    featured: false
  });

  const iconOptions = [
    "Link", "Download", "CreditCard", "MapPin", "Car", "Building", "Landmark", 
    "Zap", "Flame", "FileText", "Folder", "GraduationCap", "Banknote"
  ];

  const resetForm = () => {
    setNewService({
      title: "",
      description: "",
      url: "",
      category: "",
      icon: "Link",
      featured: false
    });
    setIsAddingService(false);
    setEditingService(null);
  };

  const handleSaveService = () => {
    if (!newService.title || !newService.url || !newService.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const service: Service = {
      id: editingService?.id || `service-${Date.now()}`,
      title: newService.title,
      description: newService.description,
      url: newService.url,
      category: newService.category,
      icon: newService.icon,
      featured: newService.featured,
      createdAt: editingService?.createdAt || new Date()
    };

    setCategories(prev => prev.map(category => {
      if (category.name === newService.category) {
        if (editingService) {
          // Update existing service
          return {
            ...category,
            services: category.services.map(s => s.id === editingService.id ? service : s)
          };
        } else {
          // Add new service
          return {
            ...category,
            services: [...category.services, service]
          };
        }
      }
      return category;
    }));

    toast({
      title: editingService ? "Service Updated" : "Service Added",
      description: `${service.title} has been ${editingService ? 'updated' : 'added'} successfully.`,
    });

    resetForm();
  };

  const handleEditService = (service: Service) => {
    setNewService({
      title: service.title,
      description: service.description,
      url: service.url,
      category: service.category,
      icon: service.icon,
      featured: service.featured || false
    });
    setEditingService(service);
    setIsAddingService(true);
  };

  const handleDeleteService = (serviceId: string, categoryName: string) => {
    setCategories(prev => prev.map(category => {
      if (category.name === categoryName) {
        return {
          ...category,
          services: category.services.filter(s => s.id !== serviceId)
        };
      }
      return category;
    }));

    toast({
      title: "Service Deleted",
      description: "The service has been removed successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage your services and categories</p>
        </div>

        {/* Add/Edit Service Form */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {editingService ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  {editingService ? "Edit Service" : "Add New Service"}
                </CardTitle>
                <CardDescription>
                  {editingService ? "Update the service details" : "Add a new service to your collection"}
                </CardDescription>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsAddingService(!isAddingService)}
              >
                {isAddingService ? "Cancel" : "Add Service"}
              </Button>
            </div>
          </CardHeader>

          {isAddingService && (
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Service Title *</Label>
                  <Input
                    id="title"
                    value={newService.title}
                    onChange={(e) => setNewService(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Aadhaar Download"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url">Service URL *</Label>
                  <Input
                    id="url"
                    value={newService.url}
                    onChange={(e) => setNewService(prev => ({ ...prev, url: e.target.value }))}
                    placeholder="https://example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select 
                    value={newService.category} 
                    onValueChange={(value) => setNewService(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Icon</Label>
                  <Select 
                    value={newService.icon} 
                    onValueChange={(value) => setNewService(prev => ({ ...prev, icon: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((icon) => (
                        <SelectItem key={icon} value={icon}>
                          {icon}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newService.description}
                  onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of the service"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={newService.featured}
                  onCheckedChange={(checked) => setNewService(prev => ({ ...prev, featured: checked }))}
                />
                <Label htmlFor="featured">Featured Service</Label>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleSaveService} className="gap-2">
                  <Save className="h-4 w-4" />
                  {editingService ? "Update Service" : "Save Service"}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Services List */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <CategorySection
                category={category}
                onEditService={handleEditService}
                showEdit={true}
              />
              
              {/* Delete options for services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-12">
                {category.services.map((service) => (
                  <div key={service.id} className="flex justify-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteService(service.id, category.name)}
                      className="gap-2"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};