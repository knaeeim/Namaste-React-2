# 🚀 React Inception: Getting Started with Raw React via CDN

This project demonstrates the basic working principles of **React** using just a **CDN link** and **vanilla JavaScript**, without any build tools like Webpack or Create React App.

---

## 📁 Project Structure


---

## 🛠️ Setup Instructions

1. Create a `div` with the `id="root"` in your `index.html`.
2. Add the React and ReactDOM CDN links inside the `<head>` or before the closing `</body>` tag.
3. Link your external `app.js` file to write raw React using vanilla JavaScript.

---

## 📘 Core Concepts

### 1. React via CDN
We use CDN links to include React and ReactDOM libraries directly in our HTML. This gives us access to all React functions like `createElement` and `createRoot`.

### 2. `React.createElement()`
This method allows us to create React elements using JavaScript. It replaces JSX in this setup and returns an object representing a DOM element.


```js
const heading = React.createElement("h1", { }, "Hello World From React!!");
```

### 3. 🧠 Virtual DOM

React maintains a **Virtual DOM**, which is a lightweight representation of the actual DOM. When the state of an element changes, React compares the new Virtual DOM with the previous one and updates **only the parts that have changed**.

This selective rendering:
- Improves performance
- Reduces unnecessary reloads
- Makes UI updates smoother and more efficient

---

### 4. 🧩 `ReactDOM.createRoot()`

To render our React elements, we first target the `div` with `id="root"` in our `index.html`, then use `ReactDOM.createRoot()` to create a root where all our React components will be rendered.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

