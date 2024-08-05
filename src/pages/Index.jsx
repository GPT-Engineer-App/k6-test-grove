import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Paw } from "lucide-react";

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
];

const funFacts = [
  "Dogs' sense of smell is at least 40x better than ours",
  "The Basenji is the only breed of dog that can't bark",
  "A dog's nose print is unique, much like a human's fingerprint",
  "Dalmatians are born completely white, and develop their spots as they get older"
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(funFacts[0]);

  const getRandomFact = () => {
    const newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setCurrentFact(newFact);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-indigo-800 flex items-center justify-center">
          <Paw className="mr-2" />
          All About Dogs
          <Paw className="ml-2" />
        </h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {dogImages.map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Cute dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">What are Dogs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">Characteristics of Dogs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                {["Loyal and affectionate companions", "Wide variety of breeds", "Highly intelligent and trainable", "Excellent sense of smell and hearing", "Require regular exercise"].map((trait, index) => (
                  <li key={index} className="flex items-center">
                    <Badge variant="secondary" className="mr-2">{index + 1}</Badge>
                    {trait}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Popular Dog Breeds</CardTitle>
            <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Bulldog", "Poodle", "Beagle", "Rottweiler"].map((breed, index) => (
                <li key={index} className="bg-indigo-100 rounded-full py-2 px-4 text-center text-indigo-800">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Fun Dog Fact</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4">{currentFact}</p>
            <Button onClick={getRandomFact}>Get Another Fact</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
