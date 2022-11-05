import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom"
import LinkTree from ".";
import ContactFormPage from "./Components/Contact/contact";

function App() {
  return (
    <BrowserRouter basename='/index.html'>
    <Switch>
      <Routes>
      <Route path="/linktree" element={<LinkTree/>} />
        <Route path="/contact" element={<ContactFormPage />} />
      </Routes> 
      </Switch>
      </BrowserRouter>  
   
  );
}

export default App;



