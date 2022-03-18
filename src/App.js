import "./App.css";
import Counter from "./components/Counter";
import People from "./components/People";
import Header from "./layout/Header";
import Employee from "./components/Employee";
import Hero from "./components/Hero";
import React, { useState } from "react";

const App = () => {

  const [page, setPage] = useState(1);

  let renderingPage = ""
  if(page === 2)
    renderingPage = <Employee/>
  else if (page === 3)
    renderingPage = <People/>
  else if (page === 4)
    renderingPage = <Counter/>
  else
    renderingPage = <Hero/>

  return (
    <>
      <Header changePage={setPage}/>
      {renderingPage}
    </>
  )

}

export default App;
