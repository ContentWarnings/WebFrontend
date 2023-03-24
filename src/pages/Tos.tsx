import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function TosPage() {
  return (
    <div className="relative mb-10 mt-32 h-fit lg:mx-20">
      <div className="mt-5 text-dark-3 dark:text-light-1">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <br />
        <h2 className="text-2xl font-bold">Agreement to our Terms</h2>
        <br />
        <p>
          MovieMentor ("Application") is an application developed and maintained
          by Jeffrey DiVincent, Adam Fernandes, Jacob Franz, Nathanael Gaulke,
          Lauren Morris, and Garrett Spears (the "Developers," "we," "us,"
          "our"). We operate the website moviementor.app (the "Site,"
          "Website"), a suite of mobile applications (the "Apps"), as well as
          other related products and services that fall under these terms (the
          "Terms") (collectively, the "Services").
        </p>
        <br />
        <p>MovieMentor can be contacted by email at moviementor@divi.sh.</p>
        <br />
        <p>
          These Terms constitute a legally binding agreement between you,
          whether personally or on behalf of an entity ("you"), and the
          Developers, concerning your use and access to the Services. You agree
          that by accessing the Services, you have read, understood, and agreed
          to be bound by all of these Terms.
        </p>
        <br />
        <p>
          The Application and its Developers reserve the right to amend these
          Terms at any time. Updated Terms will be listed on the Site and be
          indicated by updating the "Last updated" date on these Terms, and you
          waive the right to receive specific notice of each such change. It is
          your responsibility to periodically review these Terms to stay
          informed up updates. Terms updates are effective immediately on
          publication.
        </p>
        <br />
        <h2 className="text-2xl font-bold">Our Services</h2>
        <br />
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such use would be contrary to law or regulation or which
          subject us to any registration requirement within such jurisdiction or
          country. Accordingly, those persons who choose to access the Services
          in other locations do so on their own initiative and are soley
          responsible for compliance with local laws, if and to the extent local
          laws are applicable.
        </p>
        <br />
        <p>
          MovieMentor should not be used by government agencies where secrecy is
          required. MovieMentor is also not a medical application; while all
          user data is stored on-device, we are not beholden to the Health
          Insurance Portability and Accountability Act (HIPAA).
        </p>
        <br />
        <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
        <br />
        <p>
          The source code of the Apps and the Site are open-sourced under the
          MIT License. Movie data is provided by The Movie Database (TMDB) and
          streaming data is provided by JustWatch. We may link to such services
          to provide additional functionality to you (the User). All
          user-submitted content is to be irreversibly and perpetually licensed
          under a CC-0 license; contributors waive their copyrights under the
          terms of the CC-0 license.
        </p>
        <br />
        <p>
          You are required to own the copyright of any and all submitted
          content. If you believe any material available on or through the
          Services violates any copyrights you own or control, please send
          takedown notices to moviementor.copyright@divi.sh
        </p>
        <br />
        <p>
          MovieMentor, its logo, and the MovieMentor TV Creature are the shared
          intellectual property of the Developers.
        </p>
        <br />
        <p>
          The Developers are to abide by security best practices and to keep
          user data safe to our best ability.
        </p>
        <br />
        <h2 className="text-2xl font-bold">User Registration</h2>
        <br />
        <p>
          By creating an account for the Services, you agree that submitted
          information is accurate, kept up-to-date, and does not perform the
          following:
        </p>
        <br />
        <p>
          - Perform any actions that may lead us to violate our contractual
          agreements with The Movie Database, JustWatch, Amazon Web Services,
          Cloudflare, GitHub, or any other dependent parties, including data
          scraping or unauthorized use of our Services.
        </p>
        <p>- Trick, defraud, or mislead us and other users for any reason.</p>
        <p>
          - Circumvent, disable, or interfere with security-related features, in
          line with the Computer Fraud and Abuse Act (CPAA).
        </p>
        <p>
          - Upload and transmit viruses, Trojan horses, trackers, spyware, other
          malware, or other illicit material, including excessive use of capital
          letters, abuse of Unicode characters, and other spam content (posting
          of repetitive and/or derivative content).{" "}
        </p>
        <p>
          - Disparage, tarnish, or otherwise harm, in our opinion, the
          Developers, the Site, the Apps, and/or the Services.
        </p>
        <p>- Engage in unauthorized framing of or linking to the Services.</p>
        <p>
          - Engage in any automated use of the system, including unauthorized
          use of APIs and reverse-engineering of the Services.
        </p>
        <p>
          - Harass, annoy, intimidate, or threaten the Developers or other users
          of the Services.
        </p>
        <p>
          - Use the Services to advertise or offer to sell goods and services
        </p>
        <br />
        <p>
          We reserve the right to delete any account for any reason. Users
          cannoy re-create deleted accounts without written consent by the
          Developers. Users also have the right to request user data stored
          through the Application and to terminate their own account at any
          time. User-submitted data will not be deleted automatically on account
          deletion. These Terms shall remain in full force while you use the
          Services.
        </p>
        <br />
        <h2 className="text-2xl font-bold">Services Management</h2>
        <br />
        <p>We reserve the right, but not the obligation, to:</p>
        <br />
        <p>- Monitor the Services for violations of these Terms.</p>
        <p>- Restrict access to the Services at our own discretion.</p>
        <p>- Add or remove content to the Services.</p>
        <p>
          - Otherwise manager the Services to protect our rights and ensure
          continued operation.
        </p>
        <br />
        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <br />
        <span>We care about data privacy and security, Please review our</span>
        <a href="/privacypolicy" style={{ color: "#63a4ff" }}>
          {" "}
          Privacy Policy
        </a>
        <span>
          . By using the Services, you agree to be bound by our Privacy Policy,
          which is incorporated into these Terms. Please be advised that our
          services are based in the United States, but we will make a best
          effort to comply with European privacy regulations like the Gerneral
          Data Protection Regulation (GDPR). For more information, contact
          moviementor.privacy@divi.sh.
        </span>
        <br />
        <br />
        <h2 className="text-2xl font-bold">Dispute Resolution</h2>
        <br />
        <p>
          MovieMentor and the Developers are a small independently-operated
          project. We reserve the right to resolve disputes in any manner we see
          fit. To file a complaint, contact moviementor@divi.sh. Disputes have
          no grounding after three (3) months since the incident in question.
          For purposes of litigation, arbitration, and liability, we operate out
          of the city of Seattle in King County, Washington, United Stated of
          America.
        </p>
        <br />
        <p className="text-2xl font-bold">Last Updated 2023-03-11</p>
        <br />
      </div>
      <div className="my-2 flex items-center">
        <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
      </div>
    </div>
  );
}

export default TosPage;
