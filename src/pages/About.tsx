import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function AboutPage(){
    return (
        <div className="relative mb-10 mt-32 h-fit lg:mx-20">
            <div className="mt-5 text-light-1">
                <h1 className="text-3xl font-bold">About</h1>
                <br />
                <p className="text-1xl">MovieMentor is an application developed by Jeffrey DiVincent, Adam Fernandes, Jacob Franz, Nathanael Gaulke, Lauren Morris, and Garrett Spears as part of our Senior Design Project for Computer Science at the University of Central Florida.</p>
                <br />
                <p className="text-1xl">We wanted to create a place where users could gain more detailed information on potential trauma and content sensitivities found in certain movies. The MPAA rating system has a general guideline for ages and content found in movies, but has been subject to differing classification over the years making it merely a starting point. We have also used sites like Common Sense Media and Does the Dog Die, however we found that they focused on parental guidance and extremely traumatic events. We wanted to have a more wider platform that accommodated all sorts of potentially sensitive issues to serve a wider audience and include other groups of trauma that may be overlooked by the general population. Additionally, we wanted to designed the platform so that a user could hide content warnings they do not want to come in contact with at all, as well as reduce the chance of movie spoilers by having users opt to look closer at a content warning they might be on the fence about.</p>
                <br />
                <p className="text-1xl">We hope that you find this application useful in your search for new movies to watch that are interesting and trauma-free to you.</p>
                <br />
                <p className="text-1xl">Enjoy browsing and have a good day! -- MovieMentor Team</p>
                <br />
                
            </div>
            <div className="my-2 flex items-center"> 
                <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
            </div>
            
        </div>
    );
}

export default AboutPage;