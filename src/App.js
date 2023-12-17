import SearchBar from "./components/SearchBar";
function App() {
    const handleClick = (term) => {
        console.log(term)
    }
    return <div>
        <SearchBar onSubmit={handleClick} />
    </div>
}

export default App;