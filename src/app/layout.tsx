import Nav from "./components/nav";
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
