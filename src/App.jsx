import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Certifications,
  AISection,
  GitHub,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        {/* Navbar & Hero header */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>

        {/* About Section */}
        <div className="relative z-10 bg-zinc-950">
          <About />
        </div>

        {/* Tech/Skills Section */}
        <div className="relative z-10 bg-primary">
          <Tech />
        </div>

        {/* Projects Showcase */}
        <div className="relative z-10 bg-zinc-950">
          <Projects />
        </div>

        {/* Work Experience timeline */}
        <div className="relative z-10 bg-primary">
          <Experience />
        </div>

        {/* Certifications grid */}
        <div className="relative z-10 bg-zinc-950">
          <Certifications />
        </div>

        {/* Building with AI Section */}
        <div className="relative z-10 bg-primary">
          <AISection />
        </div>

        {/* GitHub Statistics / Code Section */}
        <div className="relative z-10 bg-zinc-950">
          <GitHub />
        </div>

        {/* Contact Form */}
        <div className="relative z-10 bg-primary pb-10">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
