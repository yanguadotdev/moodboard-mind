import { LogoutButton } from "@comp/logout-button";

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
            Bienvenido a <span className="text-primary">Mymind</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm">
            Tu infraestructura de autenticación y storage está lista.
          </p>
        </section>

        {/* Grid de ejemplo para visualizar el espacio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center group hover:border-zinc-600 transition-all duration-500"
            >
              <span className="text-zinc-700 group-hover:text-zinc-400 font-mono text-[10px] uppercase tracking-widest transition-colors">
                Ready for images
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="fixed bottom-8 left-8">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
          v1.0.0-alpha / {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
