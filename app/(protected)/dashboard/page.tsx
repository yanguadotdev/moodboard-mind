import { Suspense } from "react";
import { LogoutButton } from "@comp/logout-button";
import { WelcomeName, WelcomeFallback } from "@comp/welcome-name";
import { Roadmap } from "@comp/roadmap";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground p-8 selection:bg-zinc-800">
      <header className="flex justify-between items-center mb-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <h1 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
            All systems / Session: Active
          </h1>
        </div>

        <LogoutButton />
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        <section>
          <h2 className="text-4xl tracking-tight mb-2 font-bold">
            <span className="opacity-60">Bienvenido a</span>{" "}
            <span className="text-primary trid-effect ml-2 relative bottom-1 inline-block">
              Mymind
            </span>
            <Suspense fallback={<WelcomeFallback />}>
              <WelcomeName />
            </Suspense>
          </h2>
          <p className="text-zinc-500 font-mono text-sm">
            Tu infraestructura de autenticación y storage está lista.
          </p>
        </section>
      </main>

      <Roadmap />

      {/* Footer minimalista */}
      <footer className="fixed bottom-8 left-8">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
          v1.0.0-alpha / {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
