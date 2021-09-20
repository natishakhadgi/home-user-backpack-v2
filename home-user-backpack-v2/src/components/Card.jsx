function Card(){
    return(
        <div className = "card">
            <img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-072121-backpacks-1627052271.png?crop=1.00xw:0.773xh;0,0.229xh&resize=1200:*" />
            <h1>title</h1>
            <div className = "cardFooter">
                <div className = "cardFilters">
                    <button className = "cardFilter">🎮</button>
                    <button className = "cardFilter">👥</button>
                </div>
                <button className = "cardLink">🔗</button>
            </div>
        </div>
    );
}

function TeamCard(props){
    return(
        <div className = "teamCard">
            <div className = "teamHeader">
                <h1>{props.name}</h1>
                <p>{props.title}</p>
            </div>
            <p>{props.text}</p>
            <div className = "teamLinks">

            </div>
        </div>
    );
}

export default Card;
export {TeamCard};