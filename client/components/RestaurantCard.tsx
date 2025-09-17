import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock4 } from "lucide-react";

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  categories: string[];
  etaMins: number;
  fee: number;
};

export default function RestaurantCard({ r }: { r: Restaurant }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={r.image}
          alt={r.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div className="absolute left-2 top-2 flex gap-1">
          {r.categories.slice(0, 2).map((c) => (
            <Badge
              key={c}
              variant="secondary"
              className="backdrop-blur bg-background/70"
            >
              {c}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs">
          <div className="px-2 py-1 rounded-md bg-background/80 backdrop-blur text-foreground flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-medium">{r.rating.toFixed(1)}</span>
          </div>
          <div className="px-2 py-1 rounded-md bg-background/80 backdrop-blur text-foreground flex items-center gap-1">
            <Clock4 className="h-3.5 w-3.5" />
            <span>
              {r.etaMins}-{r.etaMins + 10} min
            </span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold truncate pr-2">{r.name}</h3>
          <span className="text-xs text-muted-foreground">
            ${r.fee.toFixed(2)} fee
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
