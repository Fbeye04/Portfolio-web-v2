import Navbar from "./components/organisms/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className='h-[100dvh] flex flex-col overflow-hidden'>
      <header>
        <Navbar />
      </header>

      <main className='flex-1 overflow-y-scroll snap-y snap-mandatory'>
        <Hero />
        <About />
        <Tools />
        <Projects />
      </main>
    </div>
  );
}
