import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Award, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-bakery.jpg";
import croissantImage from "@/assets/product-croissant.jpg";
import sourdoughImage from "@/assets/product-sourdough.jpg";
import pastriesImage from "@/assets/product-pastries.jpg";
import craftImage from "@/assets/craft-baking.jpg";

const Index = () => {
  const featuredProducts = [
    {
      image: croissantImage,
      name: "French Croissant",
      price: "₹95",
      description: "Buttery, flaky perfection straight from our ovens",
    },
    {
      image: sourdoughImage,
      name: "Artisan Sourdough",
      price: "₹600",
      description: "Traditional German sourdough with cumin & herbs",
    },
    {
      image: pastriesImage,
      name: "Premium Pastries",
      price: "₹150",
      description: "Handcrafted French pastries with seasonal fruits",
    },
  ];

  const craftFeatures = [
    {
      icon: ChefHat,
      title: "Master Craftsmanship",
      description: "Decades of European artisan expertise in every bake",
    },
    {
      icon: Award,
      title: "Premium Ingredients",
      description: "Only the finest imported and locally sourced materials",
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description: "Time-honored techniques passed through generations",
    },
    {
      icon: Heart,
      title: "Made with Passion",
      description: "Every creation crafted with dedication and love",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6">
            Artisan Bakes.<br />
            <span className="text-gold">Exquisite Flavour.</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto font-light">
            Experience the art of European baking where tradition meets innovation in every handcrafted creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal text-lg px-8">
              <Link to="/shop">Explore Our Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10 text-lg px-8">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Craft</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every creation is a testament to our commitment to excellence and tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {craftFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-card transition-all duration-300 hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img src={craftImage} alt="Artisan baking process" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold">The Art of Traditional Baking</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our master bakers Franz and Filo bring together decades of European artisanal experience, using
                time-honored techniques passed down through generations. From flaky croissants to crusty sourdough,
                we honor the classical methods that create exceptional bread.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every loaf, every pastry is crafted with patience, precision, and premium ingredients — giving enough
                time for our doughs to rise to perfection, just as tradition demands.
              </p>
              <Button asChild size="lg" className="bg-charcoal hover:bg-charcoal-light text-cream">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Signature Creations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most beloved artisan specialties, crafted fresh daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal text-lg px-8">
              <Link to="/shop">View Full Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What Our Patrons Say</h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Experience speaks louder than words
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The croissants are simply divine. You can taste the quality in every flaky layer. A true European experience!",
                author: "Priya Sharma",
                role: "Regular Customer",
              },
              {
                quote: "Their sourdough is the best I've tasted outside of Germany. The texture, the crust, everything is perfect.",
                author: "Rajesh Kumar",
                role: "Food Enthusiast",
              },
              {
                quote: "Franz & Filo has become our go-to for special occasions. The attention to detail in every creation is remarkable.",
                author: "Ananya Desai",
                role: "Event Planner",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-charcoal-light p-8 rounded-lg hover-lift border border-gold/20"
              >
                <div className="text-gold text-4xl mb-4 font-display">"</div>
                <p className="text-cream/90 mb-6 text-lg italic">{testimonial.quote}</p>
                <div className="border-t border-cream/20 pt-4">
                  <p className="font-display font-semibold text-gold">{testimonial.author}</p>
                  <p className="text-cream/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
