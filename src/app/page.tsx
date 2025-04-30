import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
