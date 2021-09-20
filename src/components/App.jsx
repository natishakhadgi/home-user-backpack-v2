import React from 'react';
import Nav from "./Nav";
import Header from './Header';
import Hub from './Hub';
import Footer from './Footer';

import Faq from './Faq';
import { TeamCard } from './Card';

function App() {
    return (
        <div>
            <Nav />
            <Header />
            <Hub />
            <div className = "wrapper">
                <h1>about hub</h1>
                <Faq />
                <h1>about the team</h1>
                <div className = "team">
                    <TeamCard 
                        name = "amy"
                        title = "ux designer" 
                        text = "freshman at university of texas. i'm a ux designer who helps teams design user experience & realize their product vision! at home, i've been binge-watching anime & C-drama >.< my fav resources from our app are the online escape rooms!"
                    />
                    <TeamCard 
                        name = "natisha"
                        title = "fullstack engineer" 
                        text = "senior at san jose state university. at home, i've been consuming more pasta, salmon, & film & television! my fav resources from our app are the online escape rooms & streaming services for entertainment!"
                    />
                    <TeamCard 
                        name = "zenya"
                        title = "frontend developer" 
                        text = "freshman at georgia institute of technology. i am a designer, coder, & professional planner. i hope to become a product designer &/or product manager. i love meeting new people ☺️, eating different cuisines, & listening to music in my free time."
                    />
                    <TeamCard 
                        name = "vyshu"
                        title = "frontend developer" 
                        text = "freshman at georgia institute of technology. i'm an aspiring developer & designer ✍🏼 interested in hci research, frontend dev, & using tech principles for nonprofit work & social good 🌿 i like to play video games, learn languages, & eat ridiculous amounts of sushi 🍣"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;