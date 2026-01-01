import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import classicalImage from "@assets/generated_images/indian_classical_music_instruments_close_up.png";
import folkImage from "@assets/generated_images/vibrant_indian_folk_dance_performance.png";
import fusionImage from "@assets/generated_images/fusion_music_concert_with_mixed_instruments.png";
import corporateImage from "@assets/generated_images/professional_corporate_event_with_cultural_decor.png";
import filmImage from "@assets/generated_images/film_production_behind_the_scenes.png";

export default function Services() {
  const services = [
    {
      title: "Classical Music & Dance",
      image: classicalImage,
      description: "We present exceptional performances in Hindustani & Carnatic Classical Music, along with classical dance forms including Bharatanatyam, Kathak, Odissi, Kuchipudi, and others.",
      details: [
        "Instrumental recitals and jugalbandis",
        "Thematic classical productions",
        "Celebration of depth, purity, and spiritual essence",
        "Master artists and emerging talent"
      ]
    },
    {
      title: "Folk Music & Dance",
      image: folkImage,
      description: "India's vibrant folk heritage shines through our presentations of regional and traditional art forms.",
      details: [
        "Lavani, Koli, Banjara, Gondhal, Powada",
        "Regional folk music and traditional instruments",
        "Tribal and rural art forms",
        "Bringing regional artists to mainstream stages"
      ]
    },
    {
      title: "Conceptual & Fusion Concerts",
      image: fusionImage,
      description: "Innovative, thematic programs designed for modern audiences that blend tradition with contemporary styles.",
      details: [
        "Live Concert Series of Bollywood",
        "Sitar Symphony & Indian-Western Fusion Ensembles",
        "Jazz blends and all-instrumental shows",
        "Youth-oriented creative experiments"
      ]
    },
    {
      title: "Corporate & Public Events",
      image: corporateImage,
      description: "Professional event organization with strong execution and audience connect.",
      details: [
        "Corporate shows and conferences",
        "Public cultural festivals",
        "Political and city-based promotional events",
        "Heritage and historical theme events"
      ]
    },
    {
      title: "Film & Media Production",
      image: filmImage,
      description: "Creating compelling visual stories rooted in culture, history, tradition, and human experiences.",
      details: [
        "Documentaries and short films",
        "Web series production",
        "Music albums and recordings",
        "Artist profiles & promotional films"
      ]
    },
    {
      title: "Training & Workshops",
      image: classicalImage,
      description: "Regular workshops and training programs to nurture artistic talent.",
      details: [
        "Acting workshops",
        "Dance & classical music training",
        "Folk art training sessions",
        "Instrumental training",
        "Future reality shows and talent hunts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-center" data-testid="text-services-title">
            Our Services
          </h1>
          
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Comprehensive cultural production services celebrating India's artistic legacy
          </p>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border hover:shadow-2xl transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div 
                    className="h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl font-serif text-primary">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
