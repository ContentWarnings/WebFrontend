import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function AttributionPage(){
    return (
        <div className="relative mb-10 mt-32 h-fit lg:mx-20">
            <div className="mt-5 text-light-1">
                <h1 className="text-3xl font-bold">Attribution</h1>
                <br />
                <span className="text-1xl">Source code can be found </span>
                <a href="https://github.com/orgs/ContentWarnings/repositories" style={{color: "#63a4ff"}}>here</a>
                <br />
                <br />
                <span className="text-1xl">This application uses the </span>
                <a href="https://www.themoviedb.org/documentation/api" style={{color: "#63a4ff"}}>TMDB API</a>
                <span className="text-1xl"> and </span>
                <a href="https://apis.justwatch.com/docs/api/" style={{color: "#63a4ff"}}> JustWatch API</a>
                <span className="text-1xl">.</span>
                <br />
                <br />
            </div>
            <div className="my-2 flex items-center"> 
                <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
            </div>
            
        </div>
    );
}

export default AttributionPage;