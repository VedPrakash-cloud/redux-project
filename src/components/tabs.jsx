import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setPage } from "../redux/features/counterSlice";
import { useState, useEffect } from "react";

export const Tabs = () => {
  const tabs = ["photos", "videos"];
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className="p-5 font-semibold flex justify-between items-center-safe">
      <div className="flex">
        {tabs.map((item, index) => (
          <button
            className={`${activeTab == item ? "inset-shadow-sm inset-shadow-white/30 cursor-pointer active:scale-95 rounded-lg px-4 py-1 shadow-sm shadow-white/30" : ""} cursor-pointer rounded-md uppercase py-2 px-5 border-t-0 active:scale-95 text-xs md:text-base`}
            key={index}
            onClick={() => {
              dispatch(setActiveTab(item));
            }}
            value={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex gap-2 md:gap-5 items-center-safe">
        <button
          disabled={currentPage == 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="inset-shadow-sm inset-shadow-white/30 cursor-pointer text-xs md:text-base active:scale-95 rounded-lg md:px-4 px-2 py-1 md:py-1 shadow-sm shadow-white/30 disabled:text-red-500/40"
        >
          Previous
        </button>
        <span className="inset-shadow-sm inset-shadow-white/30 active:scale-95 rounded-full md:px-4 px-2 py-1 md:py-1 md:text-2xl shadow-sm shadow-white/30 text-xs">
          {currentPage}
        </span>
        <button
          className="inset-shadow-sm inset-shadow-white/30 cursor-pointer active:scale-95 rounded-lg md:px-4 px-2 py-1 md:py-1 text-xs md:text-base shadow-sm shadow-white/30 disabled:text-red-500"
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tabs;
