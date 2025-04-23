

export class Link {
    constructor(url, text) {
        this.url = url; // type: string
        this.text = text; // type: string?
        this.length_limit = 25; // type: number
    }

    buildElement() {
        const link = document.createElement("a");
        link.href = this.url
        link.textContent = this.text || this.url
        if (link.textContent > this.length_limit) {
            link.textContent = link.textContent.slice(0, this.length_limit - 3) + "...";
        }
        link.className = "link";
        link.target = "_blank";
        return link;
    }
}
const ERROR_LINK = new Link("https://github.com/joshua-holmes/multiple-links", "Read instructions to build your own multi link");

export class Card {
    constructor(title, links, error) {
        this.title = title; // type: string
        this.links = !!error ? [ERROR_LINK] : links; // type: Link[]
        this.error = !!error;
    }

    buildElement() {
        const linkCard = document.createElement("div");
        if (this.title) {
            const label = document.createElement("span");
            label.className = "label";
            label.textContent = this.title;
            if (this.error) {
                label.classList.add("text-error");
            }
            linkCard.appendChild(label);
        }
        linkCard.className = "link-card";
        for (const link of this.links) {
            const linkEl = link.buildElement();
            linkCard.appendChild(linkEl);
        }
        return linkCard;
    }
}

export class Page {
    constructor() {
        let cards = [];
        const params = new URLSearchParams(window.location.search).entries();
        let p = new Param(params.next());
        if (p.done || p.key !== "v" || p.value !== "1") {
            cards.push(new Card("Error! Invalid multi link!", [], true));
            // run us out of params
            while (!p.done) {
                p = new Param(params.next());
            }
        }
        p = new Param(params.next());
        let t = undefined; // optional text for link
        let links = []; // all links for this card
        while (!p.done) {
            switch (p.key) {
                case "h": {
                    cards.push(new Card(p.value, links));
                    t = undefined;
                    links = [];
                    break;
                }
                case "l": {
                    links.push(new Link(p.value, t));
                    t = undefined;
                    break;
                }
                case "t": {
                    t = p.value;
                    break;
                }
                default: {
                    break;
                }
            }

            p = new Param(params.next());
        }

        for (const card of cards) {
            document.getElementById("card-container").appendChild(card.buildElement());
        }
    }
}

// helper class
class Param {
    constructor(iterResult) {
        this.done = iterResult.done;
        this.key = (iterResult.value ?? [])[0];
        this.value = (iterResult.value ?? [])[1];
    }
}
