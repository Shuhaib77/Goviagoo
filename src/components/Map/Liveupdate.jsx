import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationById } from "../../../Redux/destinationSlice";
import { savedmapDetails } from "../../../Redux/saveSlice";

function Liveupdate({ dest }) {
  const dispatch = useDispatch();
  const { dataById } = useSelector((state) => state.destination);
  const { data } = useSelector((state) => state.savedmaps);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (dest) {
      dispatch(destinationById(dest));
    }
  }, [dest, dispatch]);

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, [dispatch, id]);

  if (!dataById) {
    return (
      <div className="flex justify-center items-center h-screen bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={() => {
        // Handle click outside to close modal if needed
      }}
    >
      <div className="bg-white rounded-lg shadow-2xl w-11/12 max-w-4xl p-6 flex flex-col md:flex-row gap-6">
        {/* Destination Details Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Destination Details</h1>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={dataById.image}
              alt="Destination"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#FFFAEC]">
              <h2 className="text-xl font-semibold text-gray-800">{dataById.name}</h2>
              <p className="text-gray-600 mt-2">{dataById.description}</p>
            </div>
          </div>
        </div>

        {/* Saved Destinations Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Saved Destinations</h1>
          <div className="overflow-y-auto max-h-64 space-y-4">
            {data?.data?.savedMap.slice(0, 1)?.map((item) =>
              item.roadmapId.slice(0, 1).map((roadmap) =>
                roadmap.destinations.slice(0, 1).map((destination) => (
                  <div
                    key={destination._id}
                    className="flex items-center bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={destination.image}
                      alt="Destination"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{destination.name}</h2>
                      <p className="text-gray-600 text-sm">{destination.description}</p>
                    </div>
                  </div>
                ))
              )
            )}
          </div>
        </div>

        {/* Journey Details Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Journey</h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="text-center">
              <span className="text-gray-600 text-sm">24 August</span>
              <h2 className="text-xl font-semibold text-gray-800 mt-2">MAD → LON</h2>
              <p className="text-gray-600 mt-2">Flight details and other information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liveupdate;