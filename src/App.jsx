import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
