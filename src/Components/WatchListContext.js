import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const [watchlist, setWatchList] = useState(
    localStorage.getItem("Watchlist")?.split(",") || ["bitcoin"]
  );

  useEffect(() => {
    localStorage.setItem("Watchlist", watchlist);
  }, [watchlist]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchlist.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchlist.indexOf(coin) === -1) {
      setWatchList([...watchlist, coin]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchlist, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
