import { Helmet } from 'react-helmet';
import Hero from '../Components/Hero/Hero';
import Experience from '../Components/Experience/Experience';
import Toolkit from '../Components/Projects/Toolkit';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';

const Homepage = () => (
  <>
    <Helmet>
      <title>Dhruvil Patel · Software Engineer</title>
    </Helmet>
    <Hero />
    <Experience />
    <Toolkit />
    <About />
    <Contact />
  </>
);

export default Homepage;
