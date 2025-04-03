import {characters, navItems} from "../utils/constants.ts";
import {NavLink} from "react-router";

interface Props {
    friend: string,
    pos: number
}

const Friend = ({friend, pos}: Props) => {
    let styles = "w-100 ";

    if (pos === 7) {
        styles += "bottomLeft";
    }

    if (pos === 9) {
        styles += "bottomRight";
    }

    return (
        <NavLink className={'col-sm-4 p-1'} to={`/${navItems[0].path}/${friend}`}>
            <img className={styles} src={characters[friend].img} alt="Friend"/>
        </NavLink>
    );
};

export default Friend;