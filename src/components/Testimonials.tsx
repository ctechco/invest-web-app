
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'fill-quan-gold text-quan-gold' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ 
  content, 
  author, 
  position, 
  rating 
}: { 
  content: string; 
  author: string; 
  position: string; 
  rating: number;
}) => (
  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
    <CardContent className="pt-6">
      <StarRating rating={rating} />
      <p className="mt-4 text-gray-600">"{content}"</p>
    </CardContent>
    <CardFooter className="flex flex-col items-start border-t pt-4">
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-gray-500">{position}</div>
    </CardFooter>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      content: "Quan Financial has transformed our retirement planning. Their expert team guided us through diversifying our portfolio, resulting in consistent growth even during market fluctuations.",
      author: "Robert Johnson",
      position: "Retired CEO",
      rating: 5
    },
    {
      content: "I've been with Quan for over 5 years now and the level of personal attention and expertise is unmatched. They truly understand my financial goals and have delivered exceptional results.",
      author: "Sarah Williams",
      position: "Business Owner",
      rating: 5
    },
    {
      content: "Their investment strategies are innovative yet conservative enough to give me peace of mind. The quarterly reviews and transparent reporting keep me informed and confident.",
      author: "Michael Chen",
      position: "Tech Executive",
      rating: 4
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with Quan Financial Investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
