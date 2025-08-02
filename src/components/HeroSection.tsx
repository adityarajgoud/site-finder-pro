import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

interface HeroSectionProps {
  onScrollToServices: () => void;
}

export const HeroSection = ({ onScrollToServices }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero rounded-2xl p-8 md:p-12 mb-12">
      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="h-6 w-6 text-white" />
          <span className="text-white/90 font-medium">Trusted • Secure • Fast</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          All Your Essential
          <br />
          <span className="text-white/90">Services in One Place</span>
        </h1>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
          Access government documents, banking services, utilities, and more without 
          the hassle of remembering multiple websites. Everything you need, simplified.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={onScrollToServices}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold group"
          >
            Explore Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex items-center gap-2 text-white/90">
            <Zap className="h-5 w-5" />
            <span className="font-medium">Instant Access • No Registration Required</span>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white animate-pulse" />
        <div className="absolute top-40 right-32 w-16 h-16 rounded-full bg-white/50 animate-pulse delay-75" />
        <div className="absolute top-64 right-16 w-24 h-24 rounded-full bg-white/30 animate-pulse delay-150" />
      </div>
    </div>
  );
};