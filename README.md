# Multiple Links

## What is it?

Welcome! This project makes it possible to create a link that directs user to multiple links! This is useful if you are only able to share a single URL (e.g. due to form limitations), but want the receiver of the URL to get to visit multiple URLs.

Best of all, you can use it as much as you like over on multiple-links.com, links never expire, you don't need an account (can't create one actually), and it is forever free to use!

## Examples

Visit this link to see my website, github, and linkedin:

https://multiple-links.com?v=1&l=holmes-software.com&h=My%20Website&t=GitHub&l=github.com/joshua-holmes&t=LinkedIn&l=www.linkedin.com/in/joshua-phillip-holmes/&h=My%20Socials

Notice all the data you see on the page is embedded in the URL params of the URL above. That's how it works.

## How do I make my own Multi-Link?

Right now, I don't have an easy way of building links, though that is coming soon. So I'll tell you how it works:

There are 3 possible URL params:
* `v` (required)
* `h` (required)
* `l` (required for each link)
* `t` (optional for each link)

A "__card__" consists of __card__ header (`h` param) and as many __links__ as desired (0 __links__ is valid).

A "__link__" consists of a url (`l` param for "link") and an optional text (`t` param), which is what shows up as clickable text. If `t` is not present for a __link__, the __link__'s url will show up as the clickable text.

First, the `v` param is always required and _must_ be the first param. "v" stands for version. Right now, only version 1 is supported, so you must start all Mutli-Links with `?v=1`. This is assumed in the rest of this explanation.

To build a basic __card__, simply add a `h` param `h=MyCard`. Notice I didn't include any __links__. This is valid. Two __cards__? `h=CardOne&h=CardTwo`. Want a space between your words? `h=My%20Card`. Pretty sure `h=My Card` also works, though it's not technically correct. [See here](https://www.w3schools.com/tags/ref_urlencode.ASP) for other encodings.

To build a __link__, use `l` like this: `l=https://google.com`. It also works without the "https" bit, though "https" is assumed, not "http": `l=google.com`. Want 2 links on the same __card__? Ok. `l=google.com&l=facebook.com`. Want to add custom clickable text? `t=Google&l=google.com&t=Facebook&l=facebook.com`. _NOTE: the `t` param (if you include it) MUST come before the `l` param!_

"Now hold on a minute," you say, "I just tried to make a link and nothing showed up! What gives!"

You're right. A link does nothing unless it belongs to a card. So add `h` at the end! `t=Google&l=google.com&h=MyCard`. _NOTE: the __link__ MUST come before the __card__ header. You can think of the `h` param as closing up your __card__._

Don't want a __card__ header? Wow, you're picky. Me too. Just make `h` empty: `t=Google&l=google.com&h=`

To add all that to the version number mentioned at the top, the params look like this in total:

```
?v=1&t=Google&l=google.com&h=MyCard
```

And to attach that to the multiple-links.com domain, it looks like this:

```
https://multiple-links.com?v=1&t=Google&l=google.com&h=MyCard
```

Hopefully this banter has made it clear. If you have questions, just reach out somehow.
