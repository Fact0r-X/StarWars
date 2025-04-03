import {characters, starWarsInfo} from "../utils/constants.ts";
import {useParams, Navigate} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const StarWars = () => {
    let {heroId} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (heroId) {
            changeHero(heroId);
        }
    }, []);

    if (heroId && !characters[heroId]) {
        return <Navigate to="/error" replace />;
    }

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;