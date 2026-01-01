import { Link } from "wouter";
import { ArrowRight, Music, Palette, Globe, Film, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/grand_indian_classical_dance_performance_on_stage.png";

export default function Home() {
  const services = [
    {
      icon: Music,
      title: "Classical Music & Dance",
      description: "Hindustani, Carnatic, Bharatanatyam, Kathak, Odissi, and more",
    },
    {
      icon: Palette,
      title: "Folk Music & Dance",
      description: "Lavani, Koli, Banjara, Gondhal, Powada, and regional arts",
    },
    {
      icon: Globe,
      title: "Conceptual & Fusion",
      description: "Innovative fusion concerts blending traditional and modern",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional management for corporate and public festivals",
    },
    {
      icon: Film,
      title: "Film & Media",
      description: "Documentaries, web series, music albums, and artist profiles",
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      description: "Acting, dance, classical music, and folk art training",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000" data-testid="text-hero-title">
            IndoStage Creative & Production
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200" data-testid="text-hero-subtitle">
            Where Indian Heritage Meets Global Stages
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400"
              data-testid="button-get-in-touch"
            >
              Get In Touch <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground" data-testid="text-vision-title">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision-description">
            To become India's leading cultural production house that connects heritage with innovation, 
            nurtures emerging talent, and delivers world-class artistic experiences on national and 
            international platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" data-testid="button-explore-services">
              Explore All Services <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6" data-testid="text-commitment-title">
            Promoting New & Rural Talent
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" data-testid="text-commitment-description">
            At the heart of IndoStage is our commitment to discovering, nurturing, and promoting talented 
            artists from rural and underrepresented regions. We offer them a dignified platform, 
            professional grooming, and opportunities to perform in national as well as international shows.
          </p>
          <p className="text-xl font-semibold mt-6 italic">
            Indian culture grows when every artist is heard—and we are here to make their voice reach the world.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
