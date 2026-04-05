"use client";

import { useState } from "react";
import { cn } from "@utils";
import { getURL } from "@helpers";
import { createClient } from "@spb/client";
import { Button } from "@shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${getURL()}/auth/oauth?next=/dashboard`,
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) throw error;
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al intentar conectar con Google",
      );
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-zinc-800 bg-zinc-950 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-mono tracking-tighter">
            Bienvenido
          </CardTitle>
          <CardDescription className="text-zinc-400 font-mono">
            Entra a tu jardín privado de ideas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleGoogleLogin}>
            <div className="flex flex-col gap-4">
              {error && (
                <div className="p-3 text-xs bg-destructive/10 border border-destructive/20 text-destructive rounded-md font-mono">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="outline"
                className="w-full py-6 font-mono text-lg border-zinc-800 hover:bg-white hover:text-black transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Conectando..." : <>Continuar con Google</>}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
