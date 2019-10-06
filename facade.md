# Facade Pattern

## Facade pattern

> `provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher- level interface that makes the subsystem easier to use.`

## Playground

{% embed url="https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/facade" %}



## What is it

If you have a bunch of classes and they each have methods, and maybe you also have something that involves calling methods on those classes again and again you may want a facade.

An example would be `makeATea()` this will involve talking to

* kettle class
* tap class
* fridge class
* milk class

And calling methods on each of them. Well why not make a Tea class that calls these methods in a new method `makeTea()` that is basically a facade. It is not really a class that does anything other than pull other systems together to do something.

This is helpful as if making a tea suddenly involved adding cream, you can play with the facade class and leave the sub system in tact. And alternately if you want to mess with the sub system you can without worrying about the facade.

