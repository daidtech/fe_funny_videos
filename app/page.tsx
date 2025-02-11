'use client'

import styles from "./page.module.css";
import FunnyMovies from "./components/ListMovie";

export default function Home() {
  return (
    <div>
      <main>
        <FunnyMovies />
      </main>
    </div>
  );
}
