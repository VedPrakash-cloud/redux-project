export const ResultCards = ({ item }) => {

  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    const newData = [...oldData,item];
    localStorage.setItem("collection", JSON.stringify(newData));
  };

  return (
    <div className="h-80 w-full md:w-[19vw] relative">
      <div className="h-full">
        <a href={item.src} target="_blank">
          {item.type == "photos" ? (
            <img
              className="h-full w-full object-cover object-center rounded-md shadow-md shadow-gray-600"
              src={item.thumbnail}
              alt={item.title}
            />
          ) : (
            ""
          )}
        </a>
        <a href={item.thumbnail} target="_blank">
          {item.type == "videos" ? (
            <video
              className="h-full w-full object-cover object-center rounded-md shadow-md shadow-gray-600"
              autoPlay
              loop
              muted
              playsInline
              src={item.src}
            ></video>
          ) : (
            ""
          )}
        </a>
        <div className="absolute bottom-0 flex justify-between gap-5 items-center text-xs text-wrap w-full p-2 bg-linear-to-t from-black to-transparent font-semibold capitalize">
          {item.title}
          <button
            className="bg-indigo-600 px-2 py-1 rounded active:scale-95 cursor-pointer"
            onClick={()=>{
              addToCollection(item)
            }}
          >
            Save
          </button>
        </div>
        <div>
          <a href={item.download} download target="_blank">
            <button className="bg-indigo-600 px-2 py-1 rounded active:scale-95 cursor-pointer">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
