import GenZToggle from "./GenZToggle";

export default function Footer() {
  return (
    <footer className="border-t border-surface1 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs font-semibold text-slate-200">© {new Date().getFullYear()} Deevna Reddy</p>
      <div className="lg:hidden">
        <GenZToggle />
      </div>
    </footer>
  );
}
