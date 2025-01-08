import { BrowserRouter } from 'react-router-dom';

import {
  About,
  
  Experience,
  
  Navbar,
  Tech,
  Works,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center z-50'>
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* <StarsCanvas /> */}
        <div className='z-50'>
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        {/* <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
