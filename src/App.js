import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharactersGrid from "./components/characters/CharactersGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(results.data);
      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
