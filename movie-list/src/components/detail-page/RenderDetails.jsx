import "./RenderDetails.css";

export const RenderDetails = ({ info }) => {
  const infoKeys = Object.keys(info.data[0]);
  const infoValues = Object.values(info.data[0]);
  console.log("render", infoKeys);
  return infoKeys.map((key, index) =>
    key === "Poster" ? (
      <img
        className="detail-img"
        src={info.data[0].Poster}
        alt={info.data[0].Title}
      ></img>
    ) : (
      <ul>
        <li key={index} className="detail-info">
          {key}: {infoValues[index]}
        </li>
      </ul>
    )
  );
};

/*
return (
    <div className="movie-detail">
      <img
        className="detail-img"
        src={info.data[0].Poster}
        alt={info.data[0].Title}
      ></img>
    </div>
  );

{infoKeys.forEach((key, index) => {
        return (
          <p key={index} className="detail-info">
            {key}
          </p>
        );
      })}

      const PEl = () => {
    infoKeys.forEach((key, index) => {
      return (
        <p key={index} className="detail-info">
          yo
        </p>
      );
    });
  };
      */
