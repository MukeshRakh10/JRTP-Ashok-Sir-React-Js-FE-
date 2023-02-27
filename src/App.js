import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AR_Application_Form from './Forms/AR_Modules/AR_Application_Form';
import { UI } from './Common-Comp/UI';
import { Dispaly } from './Forms/AR_Modules/Display';
import { Admin } from './Common-Comp/Admin';

function App() {
  return (
    <UI>
      <Routes>
        <Route path="/" element={<Dispaly />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/create" element={<AR_Application_Form />}></Route>
      </Routes>
    </UI>
  );

}

export default App;
