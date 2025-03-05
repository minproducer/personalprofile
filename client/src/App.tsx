import { useHashLocation } from "wouter/use-hash-location";
import { Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Home from "@/pages/home";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;