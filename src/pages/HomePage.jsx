import ResultGrid from "../components/resultGrid.jsx"
import SearchBar from "../components/searchBar.jsx"
import Tabs from "../components/tabs.jsx"

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  )
}

export default HomePage
