---
layout: "@layouts/BlogPost.astro"
title: "What is Regex?"
description: A short exposé on regex given from the context of its use in javascript
pubDate: Mar 13, 2022
categories: [javascript, regex]
author: Zynh Ludwig
---

Regex, or Regular Expressions are patterns used to match character combinations
in strings. In Javascript we can use these patterns in a variety of methods in the `RegExp` and `String`
objects

But a high level definition isn't helpful to anyone, so let's look at how we make a regular expression;

- Regular Expression Literal:

```js
const re = /ab+c/; // Compiled at script load time.
// These perform the best, but can't be changed
```

- You can also construct a `RegExp` object:

```js
const re = new RegExp("ab+c"); // These are compiled at runtime
// These perform a bit worse, but can be changed.
```

<br />

## When shouldn't you use regex?

Wait why is this first? A lot of people when first introduced to regex want to
use it for everything, including simple string matching, however I urge you to
always make sure you _can't_ use `indexOf` or `includes` first.

This is because of performance mostly, while this is heavily dependant on the
browser your code is running on. `includes` or `indexOf` are almost always head
and shoulders faster, you can benchmark with your browser
[here](https://jsbench.me/okl0q8fwmk/1). If you don't wish to run it yourself,
I got `search` being twice as slow as `indexOf` on chrome, while `search` being
about 50% slower than `indexOf` in firefox.

And even putting performance aside, regex is complicated, and how a browser
interprets your regex varies fairly widely, so from a compatability perspective
indexOf makes the most sense as well.

## Great Zynh, you still haven't shown me any Regex...

Alright alright let's look at how we can make some regex. I will use regex
literals as they are prettier, but just know any of this regex would work with
objects too.

Despite my earlier claims, we have to start with basic text matching,
thankfully this is brief.

If you wish to match the text, it's as simple as `/abc/`

```js
let string = "example string with a slabcar";

console.log(string.search(/abc/) !== -1); // This logs true
```

So now we can match text, lets do the stuff Regex is good for, matching strings
dynamically based on criteria, and the easiest place to start is with
qualifiers.

### Qualifiers

```js
//  *   : match 0 or more of previous character
//  +    : match 1 or more of previous character
// {x}   : match x of the previous character
// {x,}  : match x or more of the previous character
// {x,y} : match between x or y of the previous character

let string = "I like books but I also like oatmeal served on a board";

// The g at the end of the literal makes .match return all matches
// and not just the first one and is called the 'global' flag

console.log(string.match(/o+/g)); // This logs ['oo', 'o', 'o', 'o']
console.log(string.match(/o{2}/g)); // This logs ['oo']
```

These quantifiers can also be combined along side basic string matching

```js
// same file as code block above
console.log(string.match(/bo*/g)); // This logs ['boo', 'b', 'bo']
console.log(string.match(/bo+/g)); // This logs ['boo', 'bo']
```

Just these two tools increase what we can match drastically, now rather than
strictly matching a substring, but theres one more instrumental tool;

### Character classes

There are two flavors are character classes, the first of which are premade
character classes, which represent useful character sets that we use often such
as 'whitespace' or 'word characters', I've listed some of them below;

```js
 -  . : Any character / wildcard
 - \w : Word characters / [A-Za-z0-9_]
 - \d : Digit characters / [0-9]
 - \s : Whitespace / spaces, tabs, and line breaks
 - \w, \d, and \s can all be negated by capitalizing them
                          (ex. \D is any non-digit character)
```

I teased them above, the next flavor of character classes are custom classes,
these are surrounded by square brackets: `[]`, and mean any character within
those brackets will match for that position.

```js
 - [acd_] will match any a, c, d, or underscore
```

You can define ranges within them;

```js
 - [a-d] will match a, b, c, or d
      To include a dash (-) in your class use an escape character (\-)
```

You can include any of the premade classes inside of a custom class;

```js
 - [a-d\d] will match a, b, c, d, or any digit 0 through 9
```

Lastly, you can negate an entire character set with `^`;

```js
 - [^a-d] will match anything other than a, b, c, or d
```

### Capture Groups, sort of...

Capture groups are parenthesis found in regular expressions, and have two main
uses. I will explain how to extract substrings with them next week, for now we
look at how we can use them to apply quantifiers to substrings within our
regular expression.

```js
let string = "book bookookook bookook boo";

console.log(string.match(/b(ook)+/g));
// This logs ['book', 'bookookook', 'bookook']
```

In the above example the string `ook` has the `+` quantifier, so it will match
any substring that starts with a b and has at least one `ook` at the end, as
the last `boo` does not contain all of `ook` it wont match.

## Conclusion

Regular Expressions are an extremely powerful tool, capable of parsing entire
data sets based off of a single expression. I highly recommend growing familiar
with them, as while there is always a solution that doesn't use regex,
sometimes regex is the simpler solution, but only if you already know how to
use it!

### Resources

[RegExr](https://regexr.com/) - An amazing tool for creating regex strings\
[MDN Regex Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) - MDNs own docs for using regex with javascript\
[JSFiddle with all of the above code](https://jsfiddle.net/zynh0722/rfqghpyz/19/)
