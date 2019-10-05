# Factory Pattern

`A factory method handles object creation and encapsulates it in a subclass. This decouples the client code in the superclass from the object creation code in the subclass.`

### Playground

{% embed url="https://codesandbox.io/embed/github/sirJiggles/designPatterns/tree/master/factory" %}

### What is it

As with every factory, the Factory Method Pattern gives us a way to encapsulate the instantiations of concrete types. Looking at the class diagram below, you can see that the abstract Creator gives you an interface with a method for creating objects, also known as the “factory method.” Any other methods implemented in the abstract Creator are written to operate on products produced by the factory method. Only subclasses actually implement the factory method and create products.

As in the official definition, you’ll often hear developers say that the Factory Method lets subclasses decide which class to instantiate. They say “decides” not because the pattern allows subclasses themselves to decide at runtime, but because the creator class is written without knowledge of the actual products that will be created, which is decided purely by the choice of the subclass that is used.

![](.gitbook/assets/factorypattern%20%281%29.png)

