import ResultGrid from "./components/resultGrid.jsx"
import SearchBar from "./components/searchBar.jsx"
import Tabs from "./components/tabs.jsx"

export default function App(){

  return(
    <div className='min-h-screen w-full text-white bg-gray-950'>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}