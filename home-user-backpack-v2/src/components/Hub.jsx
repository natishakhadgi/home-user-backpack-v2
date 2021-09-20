import Search from './Search';
import Card from './Card'

function Hub(){
    return(
        <div id = "hub">
            <Search />
            <div id = "cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Hub;