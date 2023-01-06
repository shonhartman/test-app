import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header className="text-3xl font-bold underline" style={{background: 'red'}} title="React App Prop" subtitle="subtitle"/>
      <Body title="Body" subtitle="subtitle"/>
      <Footer title="Footer"/>
    </div>
  );
}

export default App;
