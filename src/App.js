import './App.css';
import Features from './component/features';
import Header from './component/header';
import Extension from './component/extension';
import Faq from './component/faq';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Extension />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
