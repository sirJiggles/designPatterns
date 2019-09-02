# Strategy pattern

### defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

- Algorithms in our example here are the behaviors of that are inter changeable
- we do this rather than the typical inheritance method of extending a duck
- the classes and their variables are not 'concrete implementations' they can change the functionality even at run time!

## Design Principles

- Favor composition over inheritance
- Program to an interface, not an implementation.
- Identify the aspects of your application that vary and separate them from what stays the same
