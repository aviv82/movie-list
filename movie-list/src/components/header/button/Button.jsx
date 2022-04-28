import "./Button.css";
import { Link } from "react-router-dom";
import { ClearMovieDetails } from "../../../logic/clearMovieDetail";

export const Button = () => {
  return (
    <div className="btn">
      <Link to="/" onClick={ClearMovieDetails}>
        <svg
          className="btn-icon"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            fill="black"
          />
          <path
            d="M18.125 2H5.875C5.37788 2.00053 4.90128 2.19824 4.54976 2.54976C4.19824 2.90128 4.00053 3.37788 4 3.875V16.125C4 17.159 4.841 18 5.875 18H11V20H7V22H17V20H13V18H18.125C18.6221 17.9995 19.0987 17.8018 19.4502 17.4502C19.8018 17.0987 19.9995 16.6221 20 16.125V3.875C19.9995 3.37788 19.8018 2.90128 19.4502 2.54976C19.0987 2.19824 18.6221 2.00053 18.125 2ZM12 15C9.243 15 7 12.757 7 10C7 7.243 9.243 5 12 5C14.757 5 17 7.243 17 10C17 12.757 14.757 15 12 15Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
};

/*
 <div className="app-header-logo">
      <Link to="/">
      <button className="btn-logo" onClick={handleHome}>
        <svg
         
        </svg>
      </button>
      </Link>
    </div>
*/
