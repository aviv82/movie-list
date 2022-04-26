import "./Header.css";
import { filterSelection } from "../../logic/filterSelection";

export const Header = ({ clickHandle }) => {
  return (
    <header>
      <div className="head">
        <input type="input" className="user-input" placeholder="Search Movie" />
        <input
          onClick={(event) =>
            clickHandle(
              filterSelection(event?.target.parentElement.children[0].value)
            )
          }
          type="button"
          className="user-btn"
          value="search"
        />
      </div>
    </header>
  );
};
/*
event?.target.parentElement.children[0].value
 */
