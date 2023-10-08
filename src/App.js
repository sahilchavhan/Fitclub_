import './App.css';
import Hero from './components/Hero/Hero.jsx'
import Programme from './components/Programme/Programme.jsx'
import Reason from './components/Reason/Reason.jsx'
import PlansData from './components/PlansData/PlansData.jsx'
import Testinomials from './components/Testinomials/Testinomials.jsx'
import Join from './components/Join/Join.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programme/>
      <Reason/>
      <PlansData/>
      <Testinomials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
