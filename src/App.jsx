import React from "react";
import Cards from "./components/Cards";
import Songs from "./components/Songs";
import Trial from "./components/Trial";

const App = () => {
  const arr = ["Adi", "Rakshu", "Hemlo", "Kch toh naam hai hi"];

  return (
    <div>
      <Songs/>
      <Cards/>
      <Trial/>
    </div>
  );
};

export default App;
