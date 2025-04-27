import { Spotlight } from "@/components/Spotlite";

export default function Home() {
  return (
    <div className="flex w-full justify-between">
      <div className=""><Spotlight/></div>
      <div className="transform scale-x-[-1]"><Spotlight/></div>
    </div>
  );
}
