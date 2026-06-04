import Hero from "@/sections/Hero";
import UpcomingEvents from "@/sections/UpcomingEvents";
import ClubInfo from "@/sections/ClubInfo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <UpcomingEvents />
      <ClubInfo />
    </div>
  );
}