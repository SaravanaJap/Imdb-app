

const WatchListCard = ({ movie }) => {
    return (
        <div className="flex items-center gap-4 p-4 mb-4 bg-white rounded-lg shadow-md">
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-20 h-28 object-cover rounded-md"
            />

            <div>
                <h2 className="text-lg font-bold text-gray-800">
                    {movie.title}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Release Date: {movie.release_date || 'N/A'}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                    ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                </p>
            </div>
        </div>
    )
}

export default WatchListCard