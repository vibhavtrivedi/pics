function SearchBar({ onSubmit }) {
    const handleClick = (term) => {
        onSubmit(term);
    }
    return (
        <div>
            <input />
            <button onClick={handleClick('cars')}>Click me</button>
        </div>
    )
}

export default SearchBar;