import RestaurantCard, { type Restaurant } from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

const DATA: Restaurant[] = [
  { id: "1", name: "Sushi Zen", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1600&auto=format&fit=crop", rating: 4.8, categories: ["Sushi", "Japanese"], etaMins: 20, fee: 1.99 },
  { id: "2", name: "La Pizzeria", image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1600&auto=format&fit=crop", rating: 4.6, categories: ["Pizza", "Italian"], etaMins: 25, fee: 2.49 },
  { id: "3", name: "Green Bowl", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop", rating: 4.9, categories: ["Healthy", "Vegan"], etaMins: 15, fee: 0.99 },
  { id: "4", name: "Spice Route", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop", rating: 4.7, categories: ["Indian", "Curry"], etaMins: 30, fee: 1.49 },
  { id: "5", name: "Burger Lab", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1600&auto=format&fit=crop", rating: 4.5, categories: ["Burgers", "American"], etaMins: 18, fee: 1.29 },
  { id: "6", name: "Mama’s Tacos", image: "https://images.unsplash.com/photo-1617195737492-7d6f0b2e3d52?q=80&w=1600&auto=format&fit=crop", rating: 4.6, categories: ["Mexican", "Tacos"], etaMins: 22, fee: 1.19 },
];

export default function Explore() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("rating");
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = DATA.filter(r => r.name.toLowerCase().includes(q) || r.categories.some(c => c.toLowerCase().includes(q)));
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "eta") list = [...list].sort((a, b) => a.etaMins - b.etaMins);
    if (sort === "fee") list = [...list].sort((a, b) => a.fee - b.fee);
    return list;
  }, [query, sort]);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Explore restaurants</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search sushi, pizza, tacos…" className="pl-9" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Top rated</SelectItem>
              <SelectItem value="eta">Fastest</SelectItem>
              <SelectItem value="fee">Lowest fee</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2"><SlidersHorizontal className="h-4 w-4"/> Filters</Button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((r) => (<RestaurantCard key={r.id} r={r} />))}
      </div>
    </div>
  );
}
