import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Bike, Store, Utensils } from "lucide-react";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  const NavItem = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground/80 hover:text-foreground hover:bg-accent"
        }`
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">
              Z
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ZestEats
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/explore">Explore</NavItem>
            <NavItem to="/owner">For Restaurants</NavItem>
            <NavItem to="/agent">For Couriers</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/login">
              {({ isActive }: { isActive: boolean }) => (
                <Button
                  className={`hidden sm:inline-flex ${isActive ? "bg-primary text-primary-foreground shadow" : ""}`}
                >
                  Login
                </Button>
              )}
            </NavLink>
            <Button className="shadow hover:shadow-lg">Get the app</Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto py-2 flex flex-col gap-1">
              <NavItem to="/explore">Explore</NavItem>
              <NavItem to="/owner">For Restaurants</NavItem>
              <NavItem to="/agent">For Couriers</NavItem>
              <div className="flex gap-2 pt-2">
                <NavLink to="/login" className={({ isActive }) => "flex-1"}>
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </NavLink>
                <Button className="flex-1">Get the app</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-gradient-to-b from-transparent to-muted/40">
        <div className="container mx-auto py-10 grid gap-8 md:grid-cols-4 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">
                Z
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                ZestEats
              </span>
            </div>
            <p className="text-muted-foreground">
              Next‑gen food delivery connecting diners, restaurants, and
              couriers with speed and delight.
            </p>
            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="secondary" className="gap-1">
                <Utensils className="h-4 w-4" /> Order
              </Button>
              <Button size="sm" variant="secondary" className="gap-1">
                <Store className="h-4 w-4" /> Partner
              </Button>
              <Button size="sm" variant="secondary" className="gap-1">
                <Bike className="h-4 w-4" /> Deliver
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container mx-auto py-6 text-xs text-muted-foreground flex items-center justify-between">
            <p>© {new Date().getFullYear()} ZestEats Inc.</p>
            <p>Built with love for great food.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
