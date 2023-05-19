import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function AboutPage() {
  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="mt-5 text-dark-3 dark:text-light-1">
        <h1 className="text-3xl font-bold">About</h1>
        <br />
        <p>
          MovieMentor is an application developed by Jeffrey DiVincent, Adam
          Fernandes, Jacob Franz, Nathanael Gaulke, Lauren Morris, and Garrett
          Spears as part of our Senior Design Project for Computer Science at
          the University of Central Florida.
        </p>
        <br />
        <p>
          We wanted to create a place where users could gain more detailed
          information on potential trauma and content sensitivities found in
          certain movies. The MPAA rating system has a general guideline for
          ages and content found in movies, but has been subject to differing
          classification over the years making it merely a starting point. We
          have also used sites like Common Sense Media and Does the Dog Die,
          however we found that they focused on parental guidance and extremely
          traumatic events. We wanted to have a more wider platform that
          accommodated all sorts of potentially sensitive issues to serve a
          wider audience and include other groups of trauma that may be
          overlooked by the general population. Additionally, we designed the
          platform so that a user could hide content warnings they do not want
          to come in contact with at all, as well as reduce the chance of movie
          spoilers by having users opt to look closer at a content warning they
          might be on the fence about.
        </p>
        <br />
        <p>
          We hope that you find this application useful in your search for new
          movies to watch that are interesting and trauma-free to you.
        </p>
        <br />
        <h1 className="text-3xl font-bold">How to Use MovieMentor</h1>
        <br />
        <h2 className="text-xl font-bold">Browsing</h2>
        <p>
          Before looking for movies, we recommend going to Settings &gt; Content
          Warnings. There you can choose whether to filter content warnings by
          choosing to show, warn, or hide them. To see the warnings for a
          specific movie, first search it up. If the movie does not appear, this
          could mean that the movie contains content that you have chosen to
          "hide" in settings. Otherwise, click on the desired result. If the
          movie contains material that you want to be warned about, a warning
          will appear near the top of the page and all warnings associated with
          that content will be highlighted. All content warnings submitted for
          the movie are at the bottom of the page. Clicking the warning, opens a
          popup with a description of the content. If you have watched the
          movie, we kindly ask that you confirm or refute the warning using the
          respective buttons.
        </p>
        <br />
        <h2 className="text-xl font-bold">Contributing</h2>
        <p>
          To contribute, create an account in Settings &gt; My Profile. You will
          need an email address to verify your account. If you would like to
          submit content warnings for a movie you have recently watched, first
          search it up. If the movie does not appear, this could mean that the
          movie contains content that you have chosen to "hide" in settings.
          Otherwise, click on the desired result. Once you have created your
          account, you will notice a "+" (plus symbol) near the bottom next to
          the "Content Warnings" heading. Clicking the button will open a popup
          to submit a warning. Please make sure that a warning for your
          submission has not already been posted and that the information is
          accurate. Then, submit the warning. All submissions are anonymous.
        </p>
        <br />
        <br />
        <p>Enjoy browsing and have a good day! -- MovieMentor Team</p>
        <br />
      </div>
      <div className="my-2 flex items-center">
        <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
      </div>
    </div>
  );
}

export default AboutPage;
