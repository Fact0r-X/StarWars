import Friend from "./Friend.tsx";
import {friends} from "../utils/constants.ts";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

const DreamTeam = () => {
    const {hero} = useContext(SWContext);

    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.filter(friend => friend !== hero).map((friend, i) => <Friend friend={friend} pos={i + 1} key={i} />)}
        </section>
    );
};

export default DreamTeam;