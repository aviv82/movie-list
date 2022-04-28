import { Data, MovieDetails } from "../Data";

export const filterSelection = (userSearch) => {
  const filterSearch = (value) => {
    const lowerCaseSearch = userSearch.toLowerCase();
    const lowerCaseTitle = value.Title.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseSearch);
  };
  Object.keys(MovieDetails).forEach((key) => delete MovieDetails[key]);
  console.log("pong", MovieDetails);
  // console.log(Data.filter(filterSearch));
  return { Data: Data.filter(filterSearch) };
};
