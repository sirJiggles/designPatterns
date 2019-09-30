# Template Method pattern

`The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.`

# What is it

It is just a method that is a template for an algorithm. In our case we had the template method prepare() which was the template method. This method does not care how the steps are implemented but will just call some methods to get something done.

Using this in an abstract class allowed us to make the actual implementation of some of those method steps different. In the case of the Tea we can do something different for the steps brew and addCondiments, likewise with Coffee.

But the template method does not care it just calls those methods in order of which some are customized in the sub classes.
