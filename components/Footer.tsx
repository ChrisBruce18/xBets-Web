export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12 text-sm 
text-neutral-500">
      <div className="max-w-7xl mx-auto px-8 flex justify-between">
        <p>© {new Date().getFullYear()} Sports Analytics Platform</p>
        <div className="flex gap-6">
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/terms">Terms</a>
          <span>Responsible Gambling</span>
        </div>
      </div>
    </footer>
  );
}

