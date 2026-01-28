import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/counterSlice";

export const Tabs = () => {
    const tabs = ['photos', 'videos'];
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className="px-10 py-5 font-semibold flex">
        {tabs.map((item, index)=>(
                <button
                className={`${(activeTab == item ? 'border border-gray-700 bg-linear-to-t from-gray-750 to-gray-900 shadow-md shadow-gray-700': '')} cursor-pointer rounded-md uppercase py-2 px-5 border-t-0 active:scale-95`} 
                key = {index}
                 onClick={()=>{
                    dispatch(setActiveTab(item))
                }} value={item}>{item}</button>
        ))}
    </div>
  )
}

export default Tabs