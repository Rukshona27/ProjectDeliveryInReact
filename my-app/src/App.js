import logo from './logo.svg';
import './index.css';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AsideMain from './components/AsideMain';

function App() {
  return (
    <div class='wrapper'>
      <Header/>
      <Main/>
      <AsideMain/>
    </div>
  );
}

export default App;
