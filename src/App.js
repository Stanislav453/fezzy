
import './App.scss';
import { ABoutUs } from './component/AboutUs/AboutUs';
import { BackToHomeButton } from './component/BackToHomeButton/BackToHomeButton';
import { ContactBar } from './component/ContactBar/ContactBar';
import { Fotogallery } from './component/Fotogallery/Fotogallery';
import { MyFooter } from './component/MyFooter/MyFooter';
import MyHeader from './component/MyHeader/MyHeader';
import { MyServices } from './component/MyServices/MyServices';
import Navigation from './component/Navigation/Navigation';




function App() {
  return (
    <section >
      <Navigation />
      <MyHeader />
      <main>
        <ABoutUs />
        <MyServices />
        <Fotogallery />
        <ContactBar />

      </main>
      <MyFooter />
      <BackToHomeButton />
    </section>
  );
}

export default App;
