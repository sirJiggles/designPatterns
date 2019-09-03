# Observer Pattern

`defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.`

## What that means

An Observer listens to when the Subject sends out subscription information. This can be anything, for example with a newspaper you are an Observer if you subscribe to the newspaper and the publisher is the Subject. If you unsubscribe you will not get anymore newspapers. That is it in a nutshell.

# Relationship

The relationship with the Subject and the Observer is one to many as there can be 'many people subscribed to one newspaper' or 'many observers subscribed to a subject'

# Coupling

As the observers and subject just have a contract for subscriptions they are loosely coupled because

- we can change both classes without consequence
- we can add new observers at any time
- we can use observers and subjects independently of each other

# Design Principles

- Strive for loosely coupled designs between objects that interact.
