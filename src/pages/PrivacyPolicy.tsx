import Primary2Button from "../components/shared/Primary2Button";
import { AiFillHome } from "react-icons/ai";

function PrivacyPage(){
    return (
        <div className="relative mb-10 mt-32 h-fit lg:mx-20">
            <div className="mt-5 text-light-1">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <br />
                <p className="text-1xl">Overall our goal is to reduce tracking and data storage on users to promote a safe environment for all users. </p>
                <br />
                <h2 className="text-2xl font-bold">Tracking and Data Storage</h2>
                <br />
                <p className="text-1xl font-bold">For users who do not have an account:</p>
                <br />
                <p className="text-1xl">There is minimal data tracking which primarily includes data collected by CloudFlare such as which pages are accessed, how many requests are made, how many unique users are visiting, and the country of origin of said users.</p>
                <br />
                <p className="text-1xl font-bold">For users with an account:</p>
                <br />
                <p className="text-1xl">Data related to your account such as your email and login credentials, as well as content warnings you have submitted are securely stored. These are availible for your viewing discretion in your profile and can be exported there.</p>
                <br />
                <p className="text-1xl font-bold" style={{color: "#b085f5"}}>For your safety, your content warnings are NOT stored on MovieMentor's servers, rather saved in your browser on your local machine.</p>
                <br />
                <p className="text-1xl">In compliance with regulations such as those presented by the General Data Protection Regulation (GDPR) and California Consumer Protection Act (CCPA) all data is secured and monitored for potential data breaches. Additionally users are provided with the option to delete their account including all data stored, as well as export all of the data stored on an individual. </p>
                <br />
                <h2 className="text-2xl font-bold">Legal Compliance</h2>
                <br />
                <p className="text-1xl">MovieMentor reserves the right to give any data to law enforcement given a proper warrent is issued. MovieMentor is based in the United States of America, as is CloudFlare, GitHub, and Amazon Web Services. As of 2023-03-11 MovieMentor has not shared any data with the authorities.</p>
                <br />
            </div>
            <div className="my-2 flex items-center"> 
                <Primary2Button href="/" name="Return Home" icon={<AiFillHome />} />
            </div>
            
        </div>
    );
}

export default PrivacyPage;