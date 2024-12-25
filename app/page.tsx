import Contact from "@/components/contact";
import Hero from "@/components/hero";
// import Research from "@/components/research";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Contact />
      </main>
    </div>
  )
}

{/* <Research /> */}
