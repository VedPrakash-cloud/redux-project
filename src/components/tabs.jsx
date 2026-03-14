import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/counterSlice";
import { useState } from "react";
import { setPage } from "../redux/features/counterSlice";

export const Tabs = () => {
    const tabs = ['photos', 'videos'];
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab);

    const { totalPage } = useSelector(
    (store) => store.search,
  );

    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(setPage(currentPage));
    }

    const limit = 20;

    const lastPage = Math.ceil(totalPage/limit)
    console.log("total page is ", lastPage)
  return (
    <div className="px-10 py-5 font-semibold flex justify-between">
        <div>
          {tabs.map((item, index)=>(
                <button
                className={`${(activeTab == item ? 'inset-shadow-sm inset-shadow-white/30 cursor-pointer active:scale-95 rounded-lg px-4 py-1 shadow-sm shadow-white/30': '')} cursor-pointer rounded-md uppercase py-2 px-5 border-t-0 active:scale-95`} 
                key = {index}
                 onClick={()=>{
                    dispatch(setActiveTab(item))
                }} value={item}>{item}</button>
        ))}
        </div>
          <form className="flex gap-5 items-center-safe" onSubmit={(e)=>{handleSubmit(e)}}>
            <button disabled = {currentPage == 1} onClick={()=>setCurrentPage(currentPage - 1)} className="inset-shadow-sm inset-shadow-white/30 cursor-pointer active:scale-95 rounded-lg px-4 py-1 shadow-sm shadow-white/30 disabled:text-red-500">Previous</button>
            <span className="inset-shadow-sm inset-shadow-white/30 active:scale-95 rounded-full px-4 text-2xl shadow-sm shadow-white/30">{currentPage}</span>
            <button disabled = {currentPage == lastPage} className="inset-shadow-sm inset-shadow-white/30 cursor-pointer active:scale-95 rounded-lg px-4 py-1 shadow-sm shadow-white/30 disabled:text-red-500" onClick={()=>setCurrentPage(currentPage + 1)}>Next</button>
          </form>
    </div>
  );
};

export default Tabs;