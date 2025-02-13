import type { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <header>
        <Header />
      </header>
      <main className="min-h-screen container mx-auto px-4 py-4">
        {children}
      </main>
      <footer className="border-t backdrop-blur  py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center py-12  text-gray-400">
          <p>Made by Koushik Ahmed</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
