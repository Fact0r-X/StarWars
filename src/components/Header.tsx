import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const Header = () => {
    const {hero} = useContext(SWContext);

    if (!hero || !characters[hero]) {
        return null;
    }

    return (
        <header className="rounded-top-4">
            <Navigation/>
            <h1 className="text-center fs-1 py-4">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;