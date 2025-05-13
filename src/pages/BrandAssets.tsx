
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import MobileHeader from '@/components/MobileHeader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { download, fileImage } from 'lucide-react';
import Logo from '@/components/Logo';

// Create downloadable logo versions
const logoVersions = [
  {
    name: "Full Logo (PNG)",
    description: "Complete logo with icon, text, and tagline",
    type: "png",
    variant: "full",
    size: "lg",
  },
  {
    name: "Icon Only (PNG)",
    description: "Just the Future Wave icon",
    type: "png",
    variant: "icon",
    size: "lg",
  },
  {
    name: "Text Only (PNG)",
    description: "Text logo without icon",
    type: "png",
    variant: "text",
    size: "lg",
  }
];

const BrandAssets = () => {
  const isMobile = useIsMobile();
  
  // Function to convert SVG to downloadable PNG
  const handleDownload = (variant: 'full' | 'icon' | 'text', size: 'sm' | 'md' | 'lg', type: string) => {
    // Get the SVG element
    const svgElement = document.getElementById(`logo-${variant}-${size}`);
    
    if (!svgElement) {
      console.error('SVG element not found');
      return;
    }
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not create canvas context');
      return;
    }
    
    // Set dimensions based on the SVG size
    const svgRect = svgElement.getBoundingClientRect();
    canvas.width = svgRect.width * 2; // 2x for high definition
    canvas.height = svgRect.height * 2;
    
    // Create an image from the SVG
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      // Fill the canvas with white background (optional)
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error('Could not create blob');
          return;
        }
        
        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `futurewave-${variant}-logo.${type}`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Clean up
        URL.revokeObjectURL(downloadLink.href);
      }, `image/${type}`, 1.0);
      
      // Clean up image URL
      URL.revokeObjectURL(url);
    };
    
    img.src = url;
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {isMobile ? (
        <MobileHeader title="Brand Assets" showBackButton />
      ) : (
        <Navbar />
      )}
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-20'}`}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold heading-gradient mb-2">Brand Assets</h1>
          <p className="text-gray-600 mb-8">
            Download high-definition versions of the Future Wave logo for your marketing materials.
          </p>
          
          {/* Logo Preview Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Logo Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex justify-center">
                <Logo variant="full" size="lg" id="logo-full-lg" />
              </div>
              <div className="flex justify-center">
                <Logo variant="icon" size="lg" id="logo-icon-lg" />
              </div>
              <div className="flex justify-center">
                <Logo variant="text" size="lg" id="logo-text-lg" />
              </div>
            </div>
          </div>
          
          {/* Download Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Download Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {logoVersions.map((version, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <fileImage className="h-6 w-6 mr-2 text-[#9b87f5]" />
                    <h3 className="text-lg font-medium">{version.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{version.description}</p>
                  <Button 
                    onClick={() => handleDownload(version.variant, version.size, version.type)}
                    className="w-full btn-primary"
                  >
                    <download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Usage Guidelines */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Logo Usage Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Always maintain the logo's proportions when resizing.</li>
              <li>Ensure adequate spacing around the logo.</li>
              <li>Do not modify the colors or add effects to the logo.</li>
              <li>For questions about brand usage, please contact our marketing team.</li>
            </ul>
          </div>
        </div>
      </main>
      
      {!isMobile && <Footer />}
    </div>
  );
};

export default BrandAssets;
