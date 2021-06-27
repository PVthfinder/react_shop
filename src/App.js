import Header from './components/layouts/Header.jsx';
import Footer from './components/layouts/Footer';
import Shop from './components/layouts/Shop';

import {ContextProvider} from './context';

function App() {

  return (
    <div className="App">
      <Header/>
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
