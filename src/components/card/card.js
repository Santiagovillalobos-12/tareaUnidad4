import "./card.css";

export const Card = ({ titulo, image }) => {
  return (
    <div className="boxCategory">
      <h3>{titulo}</h3>
      <div className="containerImgCategory">
        <img src={image} alt=""></img>
      </div>
      <button className="showMore">
        <a href="#">Ver mas...</a>
      </button>
    </div>
  );
};
