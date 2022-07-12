import './App.scss';
import CryptoLink from './components/cryptoLink/CryptoLink';
import DebitCard from './components/debitCard/DebitCard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroBanner from './components/heroBanner/HeroBanner';
import MultiChain from './components/multiChain/MultiChain';
import PassiveIncome from './components/passiveIncome/PassiveIncome';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <CryptoLink />
      <MultiChain />
      <DebitCard />
      <PassiveIncome/>
      <Footer/>
    </div>
  );
}

export default App;
