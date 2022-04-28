import { Data, MovieDetails } from "../Data";

export const UpdateDetails = (index) => {
  MovieDetails.data = Data.filter((list) => {
    return list.Title === index;
  });
  // console.log("details", index, MovieDetails);
  return MovieDetails;
};
