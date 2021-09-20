
function Header(){
    return(
        <header>
            <div className = "headerText">
                <h1>hub</h1>
                <h2 className = "lighth2">are you... also kind of tired of among us and skribbl?</h2>
                <img src = "./assets/arrow1.svg"/>
                <h2>home-user-backpack is a hub (lol) for college event planners to help virtually connect classmates, student committees, and members of student orgs.</h2>
                <button type="submit" class="searchStyle">share with friends</button>

            </div>
            <div className = "headerImage">
                <img src= "./assets/hubLogo.png" />
            </div>
            
        </header>
    );
}

export default Header;