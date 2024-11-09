
import Contact from "./contact/page";
import Link from "next/link";
import About from "./about/page";

export default function Home() {
  return (
   <>
  <div className="container">
      <header className="header">
        <nav>
          <ul className="navList">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="description">
          Hi, I apos;m  Asharib, a web developer and UI/UX designer.
        </p>
      </main>
      <footer className="footer">
        <p>copy; 2024  Asharib. All Rights Reserved.</p>
      </footer>
    </div>
  
   <About />
   <Contact />
   </>
  );
}
