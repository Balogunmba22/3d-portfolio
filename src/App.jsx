import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Hero,
  Loader,
  Tech,
  Works,
  StarsCanvas,
} from "./components/";

function App() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}

export default App;
