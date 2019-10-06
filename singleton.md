# Singleton Pattern

## Singleton pattern

> ensures a class has only one instance, and provides a global point of access to it.

## Playground

{% embed url="https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/singleton" %}

## What is it

The singleton pattern is super simple, by making the constructor private and ensuring that only one instance can exist by calling the static `getInstance` function. We can ensure that there is only ever one instance of the class in the app.

Why would you want this, well there are multiple reasons. Usually they are to:

* avoid global vars
* keep track of state across the entire app

Avoiding global vars is something we should always try do in many languages for many reasons. So having a instance of a class with some state like this.

`const user = User.getInstance(); if (user.loggedIn) { ... }`

we can know based on that one instance if something happened in our app. This is not the best example I know :D

Another example could be a class that would have some flags like gate.isOpen and gate.isClosed with multiple instances of gate you could call the openGate func thinking the gate was closed. but in fact as you made a new instance of gate you got the wrong state and it was in fact closed already.

A last example is something I did in one of my apps for iOS which uses singletons quite a bit, was to have a sound manager singleton. To make sure I would

* not play two sounds at the same time
* know if a sound is playing from some other interaction in the app
* know when a sound is done, paused and so on via hooks for the entire app.

![](.gitbook/assets/singleton.png)

