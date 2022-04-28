import { Link } from "react-router-dom";
import "./Header.css";
import { filterSelection } from "../../logic/filterSelection";
import { Button } from "./button/Button";

export const Header = ({ clickHandle }) => {
  return (
    <header>
      <div className="head">
        <Button />
        <input type="input" className="user-input" placeholder="Search Movie" />
        <Link to="/">
          <input
            onClick={(event) =>
              clickHandle(
                filterSelection(
                  event?.target.parentElement.parentElement.children[1].value
                )
              )
            }
            type="button"
            className="user-btn"
            value="search"
          />
        </Link>
      </div>
    </header>
  );
};
/*
event?.target.parentElement.children[0].value
 */
