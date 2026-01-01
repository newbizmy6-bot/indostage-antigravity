import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Team() {
  const founder = {
    name: "Pradnya Kale",
    role: "Founder & Concept Director"
  };

  const scriptWriters = [
    { name: "Gopal Awati", role: "Script Writer" },
    { name: "Pravin Joshi", role: "Script Writer" }
  ];

  const teamMembers = [
    "Harsha Sawant",
    "Kunchala Lad",
    "Nitisha Potnis",
    "Nishka Bhawsar",
    "Abha Mahajan",
    "Sanika Pawar",
    "Swanandee Date",
    "Kasturi Hatode",
    "Shreya Naik",
    "Shubham Joshi",
    "Gautam Mhakse",
    "Tanish Mothe",
    "Soham Chougule",
    "Ajinkya Inarkar",
    "Hardish Taptekar",
    "Sahil Yadav"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-center" data-testid="text-team-title">
            Our Team
          </h1>
          
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Talented individuals passionate about bringing Indian culture to global stages
          </p>

          <div className="max-w-5xl mx-auto space-y-12">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-2" data-testid="text-founder-name">
                  {founder.name}
                </h2>
                <p className="text-lg text-muted-foreground">{founder.role}</p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">Script Writers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {scriptWriters.map((writer, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-writer-${index}`}>
                        {writer.name}
                      </h3>
                      <p className="text-muted-foreground">{writer.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">Team Members</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <p className="font-medium text-foreground" data-testid={`text-member-${index}`}>
                        {member}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
