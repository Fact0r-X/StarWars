import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {characters} from "../utils/constants.ts";
import {useParams, Navigate} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const Home = () => {
    let {heroId} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (heroId) {
            changeHero(heroId);
        }
    }, [heroId]);

    if (heroId && !characters[heroId]) {
        return <Navigate to="/error" replace />;
    }

    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;