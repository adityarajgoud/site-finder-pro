import { Button } from "@/components/ui/button";
import { Globe, Settings, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">ServiceHub</h1>
              <p className="text-xs text-muted-foreground">One-stop digital services</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Home
            </Button>
            
            <Button
              variant={location.pathname === "/admin" ? "default" : "ghost"}
              size="sm"
              onClick={() => navigate("/admin")}
              className="gap-2"
            >
              <Settings className="h-4 w-4" />
              Admin
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};