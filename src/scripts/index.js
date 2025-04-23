import { Card, Link } from "./classes.js"

const link = new Link("https://apple.com");
const link2 = new Link("https://apple.com2", "Apple2");
const card = new Card("Apple card", [link, link2])

const el = card.buildElement();
document.getElementById("card-container").appendChild(el);
