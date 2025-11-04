import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description?: string;
}

const ProductCard = ({ image, name, price, description }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover-lift border-0 shadow-md">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">{name}</h3>
        {description && <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>}
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-gold">{price}</span>
          <Button size="sm" className="bg-charcoal hover:bg-charcoal-light text-cream">
            <ShoppingCart size={16} className="mr-2" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
