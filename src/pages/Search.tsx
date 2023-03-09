// References
// https://www.makeuseof.com/react-infinite-scroll/
// https://beta.reactjs.org/learn/you-might-not-need-an-effect

import SearchBar from "../components/Search/SearchBar";
import MovieCell from "../components/Search/MovieCell";
import Backend from "../helpers/Backend";
import URLHelper from "../helpers/URLHelper";
import { FaSpinner } from "react-icons/fa";
import React, { useState, useEffect } from "react";

async function getData(page: number) {
    let arr = [];

    // Gets data from inputs by stealing them from the URL (since the values are synced, teehee)
    const q = URLHelper.populateDefaultFromURL("q", "");
    const genre = URLHelper.populateDefaultFromURL("genre", "Disregard");
    const sort = URLHelper.populateDefaultFromURL("sort", "default_ascending");

    let path = `/search?p=${page}&genre=${genre}&sort=${sort}`;

    if (q !== "") {
      path += `&q=${q}`;
    }

    const resp = await Backend.getRequest(path);
    const data = resp.jsonResponse.results;

    // Get CW preferences
    const prefs_raw = localStorage.getItem("cw");
    let prefs: any = {};
    if (prefs_raw)
      prefs = JSON.parse(prefs_raw);

    for (let i = 0; i < data.length; i++) {
      // CW filtering 
      let all_triggers = data[i].cw;
      let normal_triggers = [];
      let flagged_triggers = [];
      let block = false;

      // Logic that takes CWs and sorts them 'normal' and 'flagged'.
      // If 'hide', block render of movie.
      for (let j = 0; j < all_triggers.length; j++) {
        if (prefs[all_triggers[j]] === "flag") {
          flagged_triggers.push(all_triggers[j]);
        } else if (prefs[all_triggers[j]] === "show") {
          normal_triggers.push(all_triggers[j]);
        } else if (prefs[all_triggers[j]] === "hide") {
          block = true;
        } else {
          // If we are unaware of a CW, we will just treat as "show" (the default).
          normal_triggers.push(all_triggers[j]);
        }
      }

      // Element -> list
      if (!block) {
        arr.push(<MovieCell
            id={data[i].id}
            name={data[i].title}
            desc={data[i].overview}
            img={data[i].img}
            genres={data[i].genres}
            normalTriggers={normal_triggers}
            flaggedTriggers={flagged_triggers}
            releaseDate={data[i].release}
            runtime={data[i].runtime}
            mpa={data[i].mpa}
        />);
      }
    }

  return arr;
}

async function loadNext(items: any, setItems: any, hasMore: any, setHasMore: any, page: any, setPage: any, isLoading: any, setIsLoading: any) {
  // Abilty to block loading.
  if (!hasMore)
    return;

  try {
    let newItems: Array<any> = await getData(page + 1);

    if (newItems.length === 0) {
      setHasMore(false);
      if (page === 0) {
        newItems.push(<p className="text-center my-10 text-2xl">No results found!</p>)
      } else {
        newItems.push(<p className="text-center my-10 text-2xl">No more results!</p>)
      }
    }

    setIsLoading(false);
    setItems([...items, ...newItems]);

    setPage(page + 1);
  } catch(err) {
    console.error(err);
    setIsLoading(false);
    setPage(page + 1);
    loadNext(items, setItems, hasMore, setHasMore, page, setPage, isLoading, setIsLoading);
  }
}

function Search() {
  const [items, setItems]: any = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 
   
  // Initial load of data
  if (page < 1)
    loadNext(items, setItems, hasMore, setHasMore, page, setPage, isLoading, setIsLoading);

  const onSubmit = (e: any) => {
    if (e)
      e.preventDefault();

    setItems([]);
    setPage(0);
    setIsLoading(true);
    setHasMore(true);
  }
 
  useEffect(() => {
    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
     
        if (Math.ceil(scrollTop + clientHeight) >= (scrollHeight) && hasMore) {
          setIsLoading(true);
          loadNext(items, setItems, hasMore, setHasMore, page, setPage, isLoading, setIsLoading);
        }
    }

    // Infinite scroll
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  }, [items, hasMore, page, isLoading])

    return (
        <div className="mx-auto max-w-3xl mt-20">
          <SearchBar handleSubmit={onSubmit} />
          <div id="results" className="text-white">
              { items }
              <div className={"width-full text-center m-4 " + (isLoading ? "block" : "hidden")}>
                <FaSpinner className="inline text-white text-2xl animate-spin " />
              </div>
          </div>
        </div>
    )
}

export default Search
