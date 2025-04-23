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

export class Card {
    constructor(title, links) {
        this.title = title; // type: string
        this.links = links; // type: Link[]
    }

    buildElement() {
        const linkCard = document.createElement("div");
        if (this.title) {
            const label = document.createElement("span");
            label.className = "label";
            label.textContent = this.title;
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

