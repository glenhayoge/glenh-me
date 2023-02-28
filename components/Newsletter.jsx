import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <>
    <div className=" bg-white dark:bg-gray-900 flex flex-col items-center w-full p-6  ">
      <h2 className="text-xl font-bold text-center text-gray-600 dark:text-yellow-400">
      Interested In Software Development?
      </h2>
      <p className="mt-2 font-light text-gray-600 dark:text-gray-400 text-center leading-relaxed">
      Sign up & be notified when stuffs are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
      </p>
      <form className="flex w-full justify-center mt-5 flex-col lg:flex-row">
        
        <input
          className=" sm:rounded-none sm:rounded-l-lg appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border  py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={`sm:rounded-none sm:rounded-r-lg w-full lg:w-1/3 shadow bg-yellow-400 focus:shadow-outline  justify-center focus:outline-none text-center dark:text-gray-800 font-bold py-2 px-4 rounded flex ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Sign Up
        </button>
        
        
      </form>
     
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
       <div className="mx-auto max-w-screen-sm text-sm mt-4 text-center text-gray-600  dark:text-gray-400 newsletter-form-footer ">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read Privacy Policy</a>.</div>
    </div>
    </> 
  );
};
Newsletter.displayName = "Newsletter"; // Adding the display name

export default Newsletter; // Exporting the component after assigning it to a variable