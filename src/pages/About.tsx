import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import craftImage from "@/assets/craft-baking.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every bake, never compromising on quality or tradition.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for the craft drives us to create memorable experiences with every bite.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We're proud to be part of your celebrations and everyday moments.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "While respecting tradition, we embrace creative flavors and modern techniques.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-charcoal to-charcoal-light text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto">
            A journey of passion, tradition, and the timeless art of European baking
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img src={craftImage} alt="Our baking tradition" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold">Where Heritage Meets Innovation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Franz & Filo was born from a simple dream: to bring the authentic taste of European artisan bakery
                to India. Our master bakers, Franz and Filo, carry decades of experience from the finest bakeries
                across Europe, where they honed their craft in the traditional methods of bread-making.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In our kitchen, time is an ingredient. We give our sourdough starters the days they need to develop
                complexity, our croissants the hours required for perfect lamination, and our breads the patience
                they deserve to rise to their full potential.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                But we're more than just traditionalists. We embrace the vibrant flavors of India, creating unique
                fusion creations that celebrate both cultures — from cardamom-infused brioche to saffron pastries
                that tell a story of two worlds coming together.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every decision we make and every creation we craft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-card transition-all duration-300 hover-lift group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                    <value.icon size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promise Section */}
          <div className="bg-cream rounded-2xl p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Promise to You</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p className="flex items-center justify-center">
                <span className="text-gold mr-3 text-2xl">✓</span>
                Fresh baked daily using only premium, carefully sourced ingredients
              </p>
              <p className="flex items-center justify-center">
                <span className="text-gold mr-3 text-2xl">✓</span>
                Traditional fermentation and artisanal techniques — no shortcuts
              </p>
              <p className="flex items-center justify-center">
                <span className="text-gold mr-3 text-2xl">✓</span>
                Authentic European methods combined with innovative Indian flavors
              </p>
              <p className="flex items-center justify-center">
                <span className="text-gold mr-3 text-2xl">✓</span>
                Zero preservatives or artificial additives — just pure, honest baking
              </p>
              <p className="flex items-center justify-center">
                <span className="text-gold mr-3 text-2xl">✓</span>
                Enough time for perfection — our doughs rise at their own pace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Meet the Masters</h2>
          <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-12">
            The artisans behind every loaf, pastry, and creation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-charcoal-light p-8 rounded-lg hover-lift">
              <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2 text-gold">Franz</h3>
              <p className="text-cream/80 mb-4">Master Baker</p>
              <p className="text-cream/70">
                With 30 years of experience across Germany and France, Franz brings unparalleled expertise in
                traditional European bread-making.
              </p>
            </div>
            <div className="bg-charcoal-light p-8 rounded-lg hover-lift">
              <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2 text-gold">Filo</h3>
              <p className="text-cream/80 mb-4">Pastry Chef</p>
              <p className="text-cream/70">
                A master of French patisserie techniques, Filo's creations are renowned for their elegance,
                precision, and unforgettable flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
