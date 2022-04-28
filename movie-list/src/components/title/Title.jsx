import "./Title.css";
import { Link } from "react-router-dom";
import { UpdateDetails } from "../../logic/updateDetails";

export const Title = ({ details, linkHandle }) => {
  return details.Data.map((detail, index) => (
    <div key={index} className="thumb">
      <p key={index} className="title">
        {detail.Title}
      </p>
      <Link to="/details">
        <img
          onClick={(event) =>
            linkHandle(
              UpdateDetails(
                event.target.parentElement.parentElement.children[0].innerHTML
              )
            )
          }
          key={index + 1}
          src={detail.Poster}
          alt={detail.Title}
          className="image"
        ></img>
      </Link>
    </div>
  ));
};

/*
<button className="btn-poster">
            <Link to="/details">
              <img
                className="poster"
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                onClick={() => updateMovieDetail(movie)}
              />
            </Link>
          </button>
*/
