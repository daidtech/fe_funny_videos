'use client'

import { ToastContainer } from "react-toastify";
import FunnyMovies from "../components/ListMovie";

export default function Home() {
  return (
    <div>
      <main>
        <FunnyMovies />
        <ToastContainer limit={5} position={'bottom-right'}/>
      </main>
    </div>
  );
}
