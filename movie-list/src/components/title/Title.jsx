import "./Title.css";

export const Title = ({ details }) => {
  return details.map((detail, index) => (
    <div key={index} className="thumb">
      <p key={index} className="title">
        {detail.Title}
      </p>
      <img
        key={index + 1}
        src={detail.Poster}
        alt={detail.Title}
        className="image"
      ></img>
    </div>
  ));
};
