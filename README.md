# Design patterns

This repo is just some small samples that I am making while working through the book "Head First Design Patterns"

Each folder is a pattern and in each to compile and test the output do the following

- cd into the folder e.g. strategy
- run `tsc` on the command line to compile the ts
- this will output the js into the dist folder
- cd into dist
- run `node run.js`

tldr `tsc && node dist/run.js`

The book is a great read and I would advise it to anyone this repo just scratches the surface of the goods within. It is more a ref for me and a place to physically type / play with patterns.

# Code playground

You can also play each pattern in the following code playgrounds:

- [Strategy](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/strategy)
- [Observer](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/observer)
- [Factory](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/factory)
- [Decorator](https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/decorator)

# Design Principles

These are the principles we try to broadly adhere to when we are talking about design patterns.

- Favor composition over inheritance
- Program to an interface, not an implementation.
- Identify the aspects of your application that vary and separate them from what stays the same
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension, but closed for modification.
- Depend upon abstractions. Do not depend upon concrete classes.
