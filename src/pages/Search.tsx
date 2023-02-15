// References
// https://www.makeuseof.com/react-infinite-scroll/
// https://beta.reactjs.org/learn/you-might-not-need-an-effect

import SearchBar from "../components/Search/SearchBar";
import MovieCell from "../components/Search/MovieCell";

import React, {useState, useEffect} from 'react';

function getData(page: number) {
    let arr = [];
    
    for (let i = 0; i < 10; i++) {
      arr.push(<MovieCell
          id="42069"
          name={"Movie Name " + page.toString() + " : #" + i.toString()}
          desc="This is the story of a fake movie."
          img="https://www.themoviedb.org/t/p/w440_and_h660_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
          genres={["Action", "Adventure"]}
          normalTriggers={["Trigger 1", "Trigger 2"]}
          flaggedTriggers={["Trigger 3"]}
          releaseDate="2000-02-24T00:00:00.000Z"
          runtime={139}
      />);
    }

  return arr;
}

function Search() {
    const [items, setItems]: any = useState(getData(1));
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    
    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
     
        if (Math.ceil(scrollTop + clientHeight) >= (scrollHeight)) {
          console.log("Loading page " + page.toString())
          const newItems: any = getData(page + 1);
     
          if (page === 3) {
              setHasMore(false);
          }

          console.log(newItems);

          setItems([...items, ...newItems])

          setPage(page + 1);
        }
    }
 
    useEffect(() => {
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }, [items, page])

    return (
        <div className="mx-auto max-w-3xl mt-20">
          <SearchBar />
          <div id="results" className="text-white">
              { items }
          </div>
        </div>
    )
}

export default Search
