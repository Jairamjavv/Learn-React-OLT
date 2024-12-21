# Prerequistics

- node --version
- npm --version

## Install vite

- `npm create vite@latest`

## Spwaning up the react project

- `npm run dev`

## React

- React is Composable(Modular, Reuseable and repurpose).
- React is Declarative(Just tell me what to do, I will do it).

- Ex

  - The below is declarative

  - ```javascript
        import { createRoot } from "react-dom/client"
        const root = createRoot(document.getElementById("root"))
        root.render(
            <h1>Hello, React!</h1>
        )
    ```

  - The below is imperative

  - ```javascript
        const root = document.getElementById("root");
        const h1 = document.createElement("h1");
        h1.textContent = "Hello, React!";
        h1.className = "header";
        root.appendChild(h1);
    ```

- JSX is a syntactic sugar for React.createElement(component, props, ...children).
- `React.createElement(component, props, ...children)`
-

## QnA

1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

All the elements I render get put inside the div with the id of "root"
(or whatever other element I might select when calling createRoot)

2. What would show up in my console if I were to run this line of code:

```javascript
console.log(<h1>Hello world!</h1>)
```

An object! Unlike creating an HTML element in vanilla DOM JS, what
gets created from the JSX we have in our React code is a plain JS object
that React will use to fill in the view.

1. What's wrong with this code:

```javascript
root.render(
    <section>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </section>
)
```

You can only render 1 parent element at a time. That parent element can have
as many children elements as you want.

4. What does it mean for something to be "declarative" instead of "imperative"?
*Imperative* means we need to give specific step-by-step instructions on how to
accomplish a task.
*Declarative* means we can write our code to simply "describe" *what* should show up
on the page and allow the rool (React, e.g.) to handle the details on *how* to
put those things on the page.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger or greater than the individual pieces themselves.

6. What do props help us accomplish?
It makes a component more reusable.

7. How do you pass props into a component?
In the same way one pass attributes values to a HTML element.

8. Can I pass a custom prop to a native DOM element?
No. Because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.

9. What is the datatype of `props`?
Object
