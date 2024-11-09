import Link from 'next/link';
import { FC } from 'react';

const Contact: FC = () => {
  return (
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
        <h1 className="title">Contact Me</h1>
        <p className="description">
          Feel free to reach out at your-email@example.com
        </p>
      </main>
      <footer className="footer">
        <p> copy; 2024 Asharib. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
