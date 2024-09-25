import { Dashboard } from "@/components/home/Dashboard";
import { Header } from "@/components/home/Header";

export default function Home() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center bg-[#F3F4F6]">
      <Header />
      <div className="w-[1200px] flex">
        <Dashboard />
      </div>
    </div>
  );
}
