import "./App.scss";
import { ABoutUs } from "./component/AboutUs/AboutUs";
import { BackToHomeButton } from "./component/BackToHomeButton/BackToHomeButton";
import { ContactBar } from "./component/ContactBar/ContactBar";
import { Fotogallery } from "./component/Fotogallery/Fotogallery";
import { Footer } from "./component/Footer/Footer";
import { MyServices } from "./component/MyServices/MyServices";
import { Header } from "./component/Header/Header";

function App() {
  return (
    <section>
      <Header />
      <main>
        <ABoutUs />
        <MyServices />
        <Fotogallery />
        <ContactBar />
      </main>
      <Footer />
      <BackToHomeButton />
    </section>
  );
}

export default App;
