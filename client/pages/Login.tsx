import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // placeholder for auth call
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 bg-slate-50">
      <div className="w-full max-w-md p-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Log in to your account to continue ordering or managing your
            restaurant.
          </p>

          <form onSubmit={submit} className="space-y-4">
            <label className="block text-sm font-medium">Email</label>
            <Input
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <label className="block text-sm font-medium">Password</label>
            <Input
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <Button className="w-full mt-2" type="submit" disabled={loading}>
              {loading ? "Signing in…" : "Login"}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">
              Or continue with
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 bg-white hover:shadow-sm">
              <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 11.1v2.8h6.2C17.9 16.9 15.2 18 12 18c-3.6 0-6.6-2.3-7.7-5.5H2.6v2.6C4.6 19.6 8.1 22 12 22c4.4 0 8-3.6 8-8s-3.6-8-8-8c-1.9 0-3.7.6-5.1 1.6l1.9 1.9C10.8 6.3 11.4 6 12 6c3.2 0 5.9 1.1 8 3.2l-1.8 1.9c-1-.9-2.3-1.6-3.8-1.6-2.6 0-4.8 1.6-5.8 3.9h5.5z"
                />
              </svg>
              Google
            </button>

            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 bg-white hover:shadow-sm">
              <Github className="h-4 w-4" />
              GitHub
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Don't have an account?{" "}
            <a className="text-primary hover:underline" href="#">
              Sign up
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
