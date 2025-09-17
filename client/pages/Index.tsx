import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";
import RestaurantCard, { type Restaurant } from "@/components/RestaurantCard";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => { fetchDemo(); }, []);
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="relative">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-3xl" />
        </div>
        <div className="container mx-auto grid gap-6 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">Next‑gen delivery</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Food you love, delivered fast.</h1>
            <p className="text-muted-foreground text-lg">ZestEats connects diners, restaurants, and couriers in one sleek experience. Browse top bites near you, manage your kitchen, or hit the road to deliver joy.</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a href="/explore" className="inline-flex"><button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow hover:bg-primary/90">Explore restaurants</button></a>
              <div className="flex gap-2">
                <a href="/owner" className="inline-flex"><button className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 font-medium hover:bg-accent">Partner with us</button></a>
                <a href="/agent" className="inline-flex"><button className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 font-medium hover:bg-accent">Deliver with us</button></a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" alt="hero" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold">Choose your path</h2>
        <p className="text-muted-foreground">Three experiences. One platform.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <RoleCard title="For Diners" desc="Discover nearby restaurants, track orders in real time, and enjoy exclusive deals." href="/explore" color="from-primary to-secondary"/>
          <RoleCard title="For Restaurants" desc="Boost orders, manage menus, and access insights to grow your business." href="/owner" color="from-emerald-500 to-teal-500"/>
          <RoleCard title="For Couriers" desc="Flexible earnings with smart routing, batching, and safety-first tools." href="/agent" color="from-violet-600 to-fuchsia-600"/>
        </div>
      </section>

      <Featured />

      <section className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Step title="Search" desc="Enter your address to see what’s cooking near you."/>
          <Step title="Order" desc="Customize your meal and pay in seconds with saved preferences."/>
          <Step title="Track" desc="Live maps and accurate ETAs keep you in the loop until it arrives."/>
        </div>
      </section>

      <section className="container mx-auto pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-[1px]">
          <div className="rounded-2xl bg-background p-8 md:p-12 grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Own a restaurant?</h3>
              <p className="text-muted-foreground">Join thousands of partners growing with ZestEats. Start accepting orders today.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="/owner" className="inline-flex"><button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground shadow hover:bg-primary/90">Become a partner</button></a>
              <a href="/agent" className="inline-flex"><button className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 font-medium hover:bg-accent">Become a courier</button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function RoleCard({ title, desc, href, color }: { title: string; desc: string; href: string; color: string }) {
  return (
    <a href={href} className="block group">
      <div className={`rounded-xl p-[1px] bg-gradient-to-r ${color}`}>
        <div className="rounded-xl bg-background p-6 h-full">
          <h3 className="font-semibold text-lg mb-1 group-hover:underline">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </a>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-primary to-secondary text-white flex items-center justify-center font-bold mb-3">{title[0]}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Featured() {
  const list: Restaurant[] = [
    { id: "f1", name: "Bao & Buns", image: "https://images.unsplash.com/photo-1543339308-43f2b83f27a9?q=80&w=1600&auto=format&fit=crop", rating: 4.9, categories: ["Asian", "Street food"], etaMins: 15, fee: 0.99 },
    { id: "f2", name: "Sunrise Breakfast", image: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1600&auto=format&fit=crop", rating: 4.7, categories: ["Breakfast"], etaMins: 20, fee: 1.19 },
    { id: "f3", name: "Casa de Tapas", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop", rating: 4.8, categories: ["Spanish"], etaMins: 25, fee: 1.49 },
    { id: "f4", name: "Pho Real", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437b?q=80&w=1600&auto=format&fit=crop", rating: 4.6, categories: ["Vietnamese"], etaMins: 22, fee: 0.99 },
  ];
  return (
    <section className="container mx-auto py-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold">Featured near you</h2>
          <p className="text-muted-foreground">Popular picks in your area</p>
        </div>
        <a href="/explore" className="text-sm text-primary hover:underline">View all</a>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((r) => (<RestaurantCard key={r.id} r={r} />))}
      </div>
    </section>
  );
}
