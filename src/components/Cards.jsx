const Cards = ({ show, onSeeDetails }) => {
  const { name, image, rating, premiered } = show;
  const year = premiered ? premiered.slice(0, 4) : "N/A";
  const ratingValue = rating?.average ?? "N/A";
  const poster = image?.medium || "https://placehold.co/210x295?text=No+Image";

  return (
    <div className="border bg-base-100 shadow-md rounded-xl p-2 hover:bg-amber-200 duration-500 flex flex-col">
      <figure className="overflow-hidden rounded-lg">
        <img src={poster} alt={name} className="w-full h-64 object-cover" />
      </figure>

      <div className="px-2 my-3 flex flex-col flex-1">
        <h2 className="text-lg font-medium line-clamp-1">{name}</h2>

        <div className="flex gap-2 items-center text-sm text-gray-600 mt-1">
          <p>⭐ {ratingValue}</p>
          <span>•</span>
          <p> {year}</p>
        </div>

        <div className="card-actions justify-end mt-auto pt-3">
          <button
            onClick={() => onSeeDetails(show)}
            className="text-sm px-3 py-1.5 border rounded-md hover:bg-white transition-colors cursor-pointer"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;