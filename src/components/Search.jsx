function Search(){
    return (
        <div className="searchContent">
            <div class="search">
                <input class="searchStyle searchTerm" type="text" placeholder="🔍 what's on your mind?" />
                <button type="submit" class="searchStyle searchButton">search</button>
            </div>
            <div id = "searchFilters">
                <button className = "searchFilter">free 🆓</button>
                <button className = "searchFilter">entertainment 🍿</button>
                <button className = "searchFilter">group activity 👥</button>
                <button className = "searchFilter">games 🎮</button>
                <button className = "searchFilter">single player 👤</button>
                <button className = "searchFilter">physical ⛳</button>
                <button className = "searchFilter">mental health 🌸</button>
            </div>
        </div>
    );
}

export default Search;