import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import croissantImage from "@/assets/product-croissant.jpg";
import sourdoughImage from "@/assets/product-sourdough.jpg";
import pastriesImage from "@/assets/product-pastries.jpg";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "breads", name: "Artisan Breads" },
    { id: "pastries", name: "Pastries & Viennoiserie" },
    { id: "cakes", name: "Specialty Cakes" },
    { id: "gifts", name: "Gift Collections" },
  ];

  const products = [
    {
      image: croissantImage,
      name: "Classic Croissant",
      price: "₹95",
      description: "Traditional French butter croissant with golden flaky layers",
      category: "pastries",
    },
    {
      image: croissantImage,
      name: "Almond Croissant",
      price: "₹120",
      description: "Filled with almond cream and topped with sliced almonds",
      category: "pastries",
    },
    {
      image: sourdoughImage,
      name: "Traditional Sourdough",
      price: "₹600",
      description: "Classic German sourdough with perfect crust and texture",
      category: "breads",
    },
    {
      image: sourdoughImage,
      name: "Cumin Sourdough",
      price: "₹650",
      description: "Our signature sourdough enhanced with cumin and nigella seeds",
      category: "breads",
    },
    {
      image: pastriesImage,
      name: "Chocolate Éclair",
      price: "₹150",
      description: "Choux pastry filled with rich chocolate cream",
      category: "pastries",
    },
    {
      image: pastriesImage,
      name: "Fruit Tart",
      price: "₹180",
      description: "Buttery tart shell with vanilla custard and fresh fruits",
      category: "pastries",
    },
    {
      image: croissantImage,
      name: "Pain au Chocolat",
      price: "₹110",
      description: "Flaky pastry with rich Belgian chocolate",
      category: "pastries",
    },
    {
      image: sourdoughImage,
      name: "Multigrain Loaf",
      price: "₹550",
      description: "Hearty bread with seeds and whole grains",
      category: "breads",
    },
    {
      image: pastriesImage,
      name: "Seasonal Cake",
      price: "₹2,500",
      description: "Custom celebration cakes with premium ingredients",
      category: "cakes",
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-charcoal to-charcoal-light text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Collection
          </h1>
          <p className="text-xl text-cream/90 max-w-2xl mx-auto">
            Browse our selection of handcrafted artisan baked goods, made fresh daily with premium ingredients
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-gold hover:bg-gold/90 text-charcoal"
                    : "border-gold text-gold hover:bg-gold/10"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Need Something Special?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We offer custom orders for special occasions. Get in touch with us to discuss your requirements.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-charcoal">
            Contact Us for Custom Orders
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
