import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Bike, MapPin, Phone, Timer } from "lucide-react";
import { useState } from "react";

export default function Agent() {
  const [online, setOnline] = useState(true);
  const orders = [
    { id: "A12", restaurant: "La Pizzeria", customer: "Maya", address: "221B Baker St", eta: "12:40", status: "Ready" },
    { id: "B07", restaurant: "Sushi Zen", customer: "Omar", address: "77 River Rd", eta: "12:55", status: "Preparing" },
    { id: "C03", restaurant: "Green Bowl", customer: "Lea", address: "19 Oak Ave", eta: "13:10", status: "Picked up" },
  ];

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Courier status</CardTitle>
            <p className="text-sm text-muted-foreground">Control your availability and accept new orders</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={online ? "text-emerald-600" : "text-muted-foreground"}>{online ? "Online" : "Offline"}</span>
            <Switch checked={online} onCheckedChange={setOnline} />
            <Button className="gap-2"><Bike className="h-4 w-4"/> Go to map</Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {orders.map(o => (
          <Card key={o.id} className="overflow-hidden">
            <CardHeader className="flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">#{o.id}</Badge>
                <span className="font-medium">{o.restaurant}</span>
              </div>
              <Badge className="bg-primary text-primary-foreground">{o.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4"/> {o.address}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Timer className="h-4 w-4"/> ETA {o.eta}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4"/> {o.customer}</div>
              <div className="flex gap-2 pt-1">
                <Button variant="secondary">Navigate</Button>
                <Button>Mark delivered</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
