const Card = ({ upperText, lowerText }) => {
  return (
    <div className="card-container">
      <h2>{upperText}</h2>
      <p>{lowerText}</p>
    </div>
  );
};

export default Card;
