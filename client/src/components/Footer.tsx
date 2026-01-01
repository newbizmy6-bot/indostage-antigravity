export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">IndoStage</h3>
            <p className="text-sm opacity-90">
              Where Indian Heritage Meets Global Stages
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-90">
              Founder: Pradnya Kale<br />
              Script Writers: Gopal Awati & Pravin Joshi
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} IndoStage Creative & Production Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
