import searchImages from "./api";
import SearchBar from "./components/SearchBar";
function App() {
    const handleClick = async (term) => {
        const result = await searchImages(term);
    }
    return <div>
        <SearchBar onSubmit={handleClick} />
    </div>
}

export default App;