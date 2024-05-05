

import Header from './components/Header'
import "./App.css"
import Home from './components/Hero/Home/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyWorks from './components/Portfolio/MyWorks';
import Profile from './components/About/Profile';


const App = () => {
  return (
    <>
      <div className="relative">
        <Header className="z-10" />
        <Home />
        
        <Profile />
        
        <MyWorks />
        
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <div style={{ height: '2000px' }}></div> */}
      </div>
    </>
  );
};

export default App;
