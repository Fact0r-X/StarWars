import friend0 from "../assets/main.jpg";
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";
import {Characters, Item} from "./types";

export const base_url = 'http://sw-info-api.herokuapp.com';
export const version = '/v1';

export const characters: Characters = {
    luke: {
        name: "Luke Skywalker",
        img: friend0,
        url: `${base_url+version}/peoples/1`
    },
    c3po:{
        name: "C-3PO",
        img: friend2,
        url: `${base_url+version}/peoples/2`
    },
    r2d2:{
        name: "R2-D2",
        img: friend1,
        url: `${base_url+version}/peoples/3`
    },
    leia:{
        name: "Leia Organa",
        img: friend9,
        url: `${base_url+version}/peoples/5`
    },
    obi_wan:{
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url+version}/peoples/10`
    },
    chewbacca:{
        name: "Chewbacca",
        img: friend4,
        url: `${base_url+version}/peoples/13`
    },
    han_solo:{
        name: "Han Solo",
        img: friend5,
        url: `${base_url+version}/peoples/14`
    },
    yoda:{
        name: "Yoda",
        img: friend6,
        url: `${base_url+version}/peoples/0`
    },
    ewok:{
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${base_url+version}/peoples/30`
    },
    falcon:{
        name: "Millennium Falcon",
        img: friend7,
        url: `${base_url+version}/transports/10`
    }
};


export const friends = Object.keys(characters);
export const defaultHero = friends[0];
export const navItems: Item[] = [
    {title: 'Home', path: 'home'},
    {title: 'About Me', path: 'about_me'},
    {title: 'Star Wars', path: 'star_wars'},
    {title: 'Contact', path: 'contact'}
];
export const period_month = 30 * 24 * 60 * 60 * 1000;
export const starWarsInfo = `Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[b] Star Wars is one of the highest-grossing media franchises of all time.
The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to write and direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).
All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with Oscars going to the first three releases. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equate to over US$10 billion, making Star Wars the third-highest-grossing film franchise in cinematic history.
`;
