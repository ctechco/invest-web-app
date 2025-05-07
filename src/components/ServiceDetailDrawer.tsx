
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

interface ServiceDetailDrawerProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    benefits: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({ 
  service, 
  isOpen, 
  onClose 
}) => {
  if (!service) return null;

  const Icon = service.icon;
  
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="h-[85vh] px-4 pb-6">
        <div className="absolute right-4 top-4">
          <DrawerClose onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DrawerClose>
        </div>
        
        <DrawerHeader className="pt-8">
          <div className="flex items-center mb-2">
            <div className="bg-blue-50 p-3 rounded-full mr-3">
              <Icon className="h-6 w-6 text-quan-blue" />
            </div>
            <DrawerTitle className="text-xl">{service.title}</DrawerTitle>
          </div>
        </DrawerHeader>
        
        <div className="px-1">
          <p className="text-gray-600 mb-6">{service.description}</p>
          
          <h4 className="font-semibold text-quan-blue mb-3">Key Benefits</h4>
          <ul className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-quan-gold mr-2 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ServiceDetailDrawer;
