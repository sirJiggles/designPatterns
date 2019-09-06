# Abstract Factory Pattern

`provides an interface for creating families of related or dependent objects without specifying their concrete classes.`

Please read up on the factory pattern first

## What is she all about

Its is building upon the factory pattern, however this is about grouping related objects. in this example we have the issue that some of the locations of pizza shops "gareths and joes" use different ingredients for their pizzas.

We should be able to still have pizzas unaware of the dough and source that is used on them. Just know that they have them and likewise each "region" or family should be able to customise them as they need.

We do this by having a factory interface for this group, in this case an ingredients factory interface. Each location implements its own factory for ingredients. then
when the locations make a pizza they inject the factory into the pizza. This way you can think of this:

- A Cheese pizza from Joes always has a pesto base and thic crust
- A Cheese pizza from gareths always has tomato base and a thin crust
- The pizza does not care where it is made, it is just a pizza with some ingredients.
