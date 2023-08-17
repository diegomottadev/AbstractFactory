# Abstract Factory Pattern

Abstract Factory is a design pattern that provides an interface for creating families of related or dependent objects, without specifying their concrete classes.

## Why use Abstract Factory?

Imagine you are designing a virtual reality platform that offers immersive experiences to users. This platform is compatible with various display systems, such as holographic displays and conventional virtual reality goggles. Each display system has its unique set of interactive elements, such as floating panels, gesture controls, and focus points.

This is where the Abstract Factory pattern comes into play. Instead of writing specific code for each display system, you can use the Abstract Factory pattern to create a common interface that allows the creation of interactive elements independently of the underlying system. This means that the platform can easily adapt to new display systems without having to completely rewrite the interaction code.

For example, if you decide to add support for a new augmented reality system that uses hand gestures to interact with virtual objects, you would simply implement a new abstract factory that creates the necessary interactive elements for that system. Without needing to alter the main platform code, you achieve seamless expansion through the Abstract Factory pattern.

In summary, the Abstract Factory pattern allows you to create a flexible and adaptable ecosystem, where different "families" of interactive elements can coexist harmoniously and evolve with the changing demands of display technology.

## Use the Abstract Factory pattern when:

1) A system needs to be independent of how its products are created, composed, and represented.
2) A system needs to be configured with a family of products from several options.
3) a family of related product objects is designed to be used together, and it's necessary to enforce this restriction.
4) you want to provide a library of product class interfaces and only want to reveal their interfaces, not their implementations.

## Participants
1) Abstract Factory: declares an interface for operations that create abstract product objects, such as floating panels, gesture controls, and focus points, regardless of the specific display system

2) Concrete Factory: implements the operations to create concrete product objects.  (holographic displays, virtual reality goggles, etc.).

3) Abstract Product: declares an interface for a type of product object, like floating panels or gesture controls.

4) Concrete Product: defines a product object to be created by the respective factory,implements the Abstract Product interface. Actual implementations of the interactive elements, tailored for each display system.

5) Client: only uses interfaces declared by the Abstract Factory and Abstract Product classes.  Utilizes the Abstract Factory and Abstract Product interfaces to create and interact with the appropriate interactive elements based on the chosen display system, ensuring a consistent user experience across different systems.

## Colaboradores

• Normally, only one instance of a Concrete Factory class is created at runtime. This concrete factory creates product objects with a specific implementation. To create different product objects, clients should use a different concrete factory.
• The Abstract Factory delegates the creation of product objects to its Concrete Factory subclass.
