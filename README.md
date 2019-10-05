---
description: >-
  TLDR notes to serve as a reminder on design patterns after working through a
  book on them.
---

# Design Patterns

![](.gitbook/assets/patterns.png)

This repo is just some small samples that I am making while working through the book [Head First Design Patterns](https://www.amazon.de/First-Design-Patterns-Brain-Friendly/dp/0596007124), if you want a nicer readme for each pattern you can go [here](https://gareth-fuller.gitbook.io/design_patterns) \(But they only make real sense when also looking at the code\)

Each folder is a pattern and in each to compile and test the output do the following

- cd into the folder e.g. strategy
- run `tsc` on the command line to compile the ts
- this will output the js into the dist folder
- cd into dist
- run `node run.js`

tldr `tsc && node dist/run.js`

The book is a great read and I would advise it to anyone this repo just scratches the surface of the goods within. It is more a ref for me and a place to physically type / play with patterns.

## Code playground

You can also play each pattern in the following code playgrounds:

- [Strategy](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/strategy)
- [Observer](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/observer)
- [Factory](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/factory)
- [Abstract Factory](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/abstract-factory)
- [Decorator](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/decorator)
- [Singleton](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/singleton)
- [Command](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/command)
- [Adapter](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/adapter)
- [Facade](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/facade)
- [Template method](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/template-method)
- [Iterator](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/iterator)

## Design Principles

These are the principles we try to broadly adhere to when we are talking about design patterns.

- Favor composition over inheritance
- Program to an interface, not an implementation.
- Identify the aspects of your application that vary and separate them from what stays the same
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension, but closed for modification.
- Depend upon abstractions. Do not depend upon concrete classes.
- Principle of Least Knowledge "talk only to your immediate friends."
- Don’t call us, we’ll call you. \(Holywood principle\)
- A class should have only one reason to change.
