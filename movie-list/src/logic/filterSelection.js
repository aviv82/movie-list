import { Data } from "../Data";

export const filterSelection = (userSearch) => {
  const filterSearch = (value) => {
    const lowerCaseSearch = userSearch.toLowerCase();
    const lowerCaseTitle = value.Title.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseSearch);
  };
  // console.log(Data.filter(filterSearch));
  return { Data: Data.filter(filterSearch) };
};
