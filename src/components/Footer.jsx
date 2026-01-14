const Footer = () => {
  return (
    <footer className="border-t border-dashed border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center text-center gap-2">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Varun Yadav. All rights reserved.
        </p>
        <p className="text-xs text-muted uppercase tracking-wide">
          Updated January 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
