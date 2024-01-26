import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { BackgroundImage } from "./components/banner";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Header>
        <BackgroundImage />
      </Header>
      <Content />
      <Footer />
    </>
  );
}

export default App;
