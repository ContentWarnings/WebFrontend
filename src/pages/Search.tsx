// References
// https://www.makeuseof.com/react-infinite-scroll/
// https://beta.reactjs.org/learn/you-might-not-need-an-effect

import SearchBar from "../components/Search/SearchBar";
import MovieCell from "../components/Search/MovieCell";
import Backend from "../helpers/Backend";
import URLHelper from "../helpers/URLHelper";

import React, {useState, useEffect} from 'react';

async function getData(page: number) {
    let arr = [];

    // Gets data from inputs by stealing them from the URL (since the values are synced, teehee)
    const q = URLHelper.populateDefaultFromURL("q", "");
    const genre = URLHelper.populateDefaultFromURL("genre", "Disregard");
    const sort = URLHelper.populateDefaultFromURL("sort", "title");

    let path = `/search?p=${page}&genre=${genre}&sort=${sort}`;

    if (q !== "")
      path += `&q=${q}`;

    const resp = await Backend.getRequest(path);
    const data = resp.jsonResponse.results;

    for (let i = 0; i < data.length; i++) {
      arr.push(<MovieCell
          id={data[i].id}
          name={data[i].title}
          desc={data[i].overview}
          img={data[i].img}
          genres={data[i].genres}
          normalTriggers={["Trigger 1", "Trigger 2"]}
          flaggedTriggers={["Trigger 3"]}
          releaseDate={data[i].release}
          runtime={data[i].runtime}
          mpa={data[i].mpa}
      />);
    }

  return arr;
}

async function loadNext(items: any, setItems: any, hasMore: any, setHasMore: any, page: any, setPage: any) {
  // Abilty to block loading.
  if (!hasMore)
    return;

  let newItems: any = await getData(page + 1);

  if (newItems.length == 0) {
    setHasMore(false);
    setPage(page + 1);
    return;
  }

  setItems([...items, ...newItems])

  setPage(page + 1);
}

function Search() {
  const [items, setItems]: any = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
   
  // Initial load of data
  if (page < 1)
    loadNext(items, setItems, hasMore, setHasMore, page, setPage);

  const onSubmit = (e: any) => {
    if (e)
      e.preventDefault();

    setItems([]);
    setPage(0);
    setHasMore(true);
  }

  const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
   
      if (Math.ceil(scrollTop + clientHeight) >= (scrollHeight)) {
        loadNext(items, setItems, hasMore, setHasMore, page, setPage);
      }
  }
 
    useEffect(() => {
    // Infinite scroll
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }, [items, page])

    return (
        <div className="mx-auto max-w-3xl mt-20">
          <SearchBar handleSubmit={onSubmit} />
          <div id="results" className="text-white">
              { items }
          </div>
        </div>
    )
}

export default Search
