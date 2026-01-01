import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Heart, Star, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-center" data-testid="text-about-title">
              About IndoStage
            </h1>
            
            <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed" data-testid="text-about-subtitle">
              A premier cultural and entertainment company dedicated to presenting India's rich artistic 
              legacy to audiences across the world.
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                IndoStage Creative & Production Pvt. Ltd. is more than just an entertainment company—we are 
                custodians of India's magnificent cultural heritage. We curate, create, and celebrate the 
                finest in Classical Music, Indian Dance, Folk Art, World Music, and Concept-Based Performances, 
                bringing timeless traditions into contemporary global arenas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become India's leading cultural production house that connects heritage with innovation, 
                    nurtures emerging talent, and delivers world-class artistic experiences on national and 
                    international platforms.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To ensure that India's music, dance, rhythm, and stories resonate across the world while 
                    providing a dignified platform for artists from rural and underrepresented regions.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold mt-12 mb-6">What Sets Us Apart</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Strong Artistic Network</h4>
                    <p className="text-muted-foreground">
                      Deep connections across classical, folk, and contemporary fields with India's finest artists
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Professional Production Team</h4>
                    <p className="text-muted-foreground">
                      Years of experience in managing world-class cultural events and productions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Concept-Driven Programming</h4>
                    <p className="text-muted-foreground">
                      Culturally rich, innovative programming that bridges tradition and modernity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Global-Ready Formats</h4>
                    <p className="text-muted-foreground">
                      Performance formats designed for both Indian and international audiences
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent text-accent-foreground rounded-lg p-8 my-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h2 className="text-3xl font-serif font-bold">Our Global Aspiration</h2>
                </div>
                <p className="text-lg leading-relaxed">
                  IndoStage aims to take Indian artistry beyond borders. We aspire to collaborate with 
                  international festivals, cultural organisations, Indian embassies, tourism boards, and 
                  global corporate houses to create impactful, memorable experiences on global stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
