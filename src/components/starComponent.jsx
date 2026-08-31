const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating / 19);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
