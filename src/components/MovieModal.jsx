import { X } from "lucide-react";

const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  const { name, image, summary, rating, premiered, genres } = show;
  const backdrop = image?.original || image?.medium;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex justify-end p-2 sticky top-0 bg-white">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {backdrop && (
          <img src={backdrop} alt={name} className="w-full max-h-80 object-cover" />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{name}</h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <p>⭐ Rating: {rating?.average ?? "N/A"}</p>
            <p>📅 Release: {premiered || "N/A"}</p>
            {genres?.length > 0 && <p> Genre: {genres.join(", ")}</p>}
          </div>

          <div>
            <h3 className="font-medium mb-1">Overview</h3>
            <div
              className="text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: summary || "No overview available.",
              }}
            />
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100 cursor-pointer"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;