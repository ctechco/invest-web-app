
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onPress: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, onPress }) => {
  return (
    <Card 
      className="border-none shadow-md mb-4 active:bg-gray-50 transition-colors" 
      onClick={onPress}
    >
      <CardContent className="p-4 flex items-start gap-3">
        <div className="bg-purple-50 p-3 rounded-full">
          <Icon className="h-6 w-6 text-futurewave-purple" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center text-xs text-futurewave-purple">
            <CheckCircle className="h-3 w-3 mr-1" />
            <span>Tap for details</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
