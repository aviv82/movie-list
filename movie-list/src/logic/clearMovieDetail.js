import { MovieDetails } from "../Data";
import { filterSelection } from "./filterSelection";

export const ClearMovieDetails = () => {
  Object.keys(MovieDetails).forEach((key) => delete MovieDetails[key]);
  console.log("ping", MovieDetails);
  return filterSelection("");
};
