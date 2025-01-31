import HomeIntro from "@/components/home/introbox";
import HomeSite from "@/components/home/sitebox";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center w-full">
      <HomeIntro />
      <HomeSite />
    </main>
  );
}
