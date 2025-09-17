import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Plus, TrendingUp, DollarSign, Timer } from "lucide-react";
import { useState } from "react";

export default function Owner() {
  const [items, setItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 11.9, available: true },
    { id: 2, name: "Truffle Fries", price: 6.5, available: true },
    { id: 3, name: "Vegan Bowl", price: 12.0, available: false },
  ]);

  const toggle = (id: number) => setItems(list => list.map(i => i.id === id ? { ...i, available: !i.available } : i));

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard icon={<TrendingUp className="h-5 w-5" />} title="Orders today" value="248" trend="+12%" />
        <StatCard icon={<DollarSign className="h-5 w-5" />} title="Revenue" value="$3,482" trend="+8%" />
        <StatCard icon={<Timer className="h-5 w-5" />} title="Avg prep time" value="14 min" trend="-2 min" />
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Menu</CardTitle>
            <p className="text-sm text-muted-foreground">Manage availability and pricing</p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search menu…" className="w-48" />
            <Button className="gap-2"><Plus className="h-4 w-4"/> Add item</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((i) => (
                <TableRow key={i.id}>
                  <TableCell className="font-medium">{i.name}</TableCell>
                  <TableCell>${i.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch checked={i.available} onCheckedChange={() => toggle(i.id)} />
                      <span className={i.available ? "text-emerald-600" : "text-muted-foreground"}>{i.available ? "Available" : "Unavailable"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" className="mr-2">Edit</Button>
                    <Button size="sm" variant="destructive">Remove</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ icon, title, value, trend }: { icon: React.ReactNode; title: string; value: string; trend: string }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2 text-muted-foreground">{icon}<span className="text-sm">{title}</span></div>
        <span className="text-xs rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 px-2 py-0.5">{trend}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
