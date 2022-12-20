import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Header from './Header.js';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import ActivationPage from './ActivationPage.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
           <Routes>
       <Route
            exact
            path="/"
            element={<Form />}
          />
          <Route exact path="/activationLink/:id" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
