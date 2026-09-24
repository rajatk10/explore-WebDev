# React Essentials

> A beginner-friendly checklist for learning, practising, and revising the core ideas of React.

## How to use this guide

Work through the sections in order. For each task:

1. Read the short explanation.
2. Complete the task in the app.
3. Tick the checkbox only when you can explain what you did.
4. Try the extension task if you want extra practice.

Keep this file open beside the editor. Do not rush to learn every React library. Strong React fundamentals are more valuable than memorising tools.

## Current project commands

This repository was created with Create React App, so its commands are:

```bash
npm start                 # start the development server
npm test -- --watchAll=false
npm run build             # create a production build
```

For future practice projects, Vite is a good modern choice:

```bash
bun create vite react-learning --template react
cd react-learning
bun install
bun run dev
```

The React concepts in this guide are the same in both setups.

## How React runs during development

This is one of the most important ideas to understand:

> Node.js runs the development tools. The browser runs your React application.

When you run `npm start`, your React component file is not executed directly by Node.js. Instead, Node.js starts the CRA development tools, which prepare your code and make it available to the browser.

### What starts when you run `npm start`?

```text
npm start
   |
   v
react-scripts start
   |
   v
Node.js runs the CRA tools
   |
   +--> Webpack compiles JSX and resolves imports
   |
   +--> Webpack Dev Server listens on localhost:3000
   |
   v
Browser requests the React application
```

In this project, `react-scripts` uses Webpack and Webpack Dev Server behind the scenes. You normally do not need to configure them while learning React.

### What happens in the browser?

Your browser requests the development server:

```text
Browser
   |
   | GET http://localhost:3000
   v
Development server
   |
   +--> returns public/index.html
   +--> serves the compiled JavaScript
   +--> serves CSS, images, and other assets
   |
   v
Browser executes the JavaScript
   |
   v
React renders App into <div id="root"></div>
```

The important files are connected like this:

```text
public/index.html
   contains <div id="root"></div>
          |
          v
src/index.js
   finds the root element and renders <App />
          |
          v
src/App.js
   returns the user interface
```

### What does the development server do?

It helps during development by:

- Serving `index.html` to the browser.
- Transforming JSX into JavaScript the browser can execute.
- Resolving imports such as `import App from './App'`.
- Serving CSS, images, and other imported files.
- Watching your source files for changes.
- Updating the browser when you save a file.
- Showing compilation errors in the terminal or browser.

For example, when you edit `src/App.js`:

```text
Save App.js
   -> development server notices the change
   -> the file is compiled again
   -> the browser receives the update
   -> React renders the updated UI
```

This automatic update is called hot reload or Fast Refresh.

### Development server versus application server

The word “server” does not always mean “backend application server.” Different servers have different jobs:

| Server | Main responsibility |
| --- | --- |
| React development server | Prepare and serve frontend files while developing |
| Static web server | Serve the built frontend files in production |
| Backend application server | Run business logic and provide API endpoints |
| Database server | Store and retrieve application data |

The CRA development server handles requests such as:

```text
GET /
GET /static/js/main.js
GET /static/css/main.css
```

It does not automatically provide backend features such as:

```text
GET /api/users
POST /api/orders
```

Those requests would normally be handled by a backend server. A development server can be configured to proxy API requests to a backend, but this project does not currently contain a backend.

### Is Node.js the server?

Node.js is a JavaScript runtime. It can run JavaScript outside the browser, but it is not automatically a web server.

In this project:

```text
Node.js             = runtime
react-scripts       = CRA command-line tool
Webpack             = build and bundling tool
Webpack Dev Server  = local HTTP development server
Browser             = where React runs
```

A Node.js program can create a server, for example:

```js
import http from 'http';

http.createServer((request, response) => {
  response.end('Hello from Node.js');
}).listen(3000);
```

Here, Node.js runs the program, and the program creates an HTTP server. Node.js itself is the runtime that makes this possible.

### Why is a development server needed for React?

A simple JavaScript page can be linked directly:

```html
<script src="app.js"></script>
```

React projects commonly use JSX, imports, npm packages, CSS imports, and image imports:

```jsx
import Button from './Button';

export default function App() {
  return <Button>Save</Button>;
}
```

The browser does not understand every part of this source format directly. The development tool prepares it for the browser.

The development server is therefore a bridge:

```text
Your React source code
        |
        | compile, resolve, transform, serve
        v
Browser-compatible files
        |
        v
Browser runs React and displays the UI
```

### Development server versus production

During development, run:

```bash
npm start
```

This gives you file watching, hot reload, readable errors, and a local URL.

For production, create a build:

```bash
npm run build
```

This creates optimized static files in the `build` directory. A production web server, CDN, or hosting platform can then serve those files.

```text
Development:
source files -> development server -> browser

Production:
source files -> build command -> optimized build files -> web server/CDN -> browser
```

### Key revision points

- [ ] `npm start` starts development tooling.
- [ ] Node.js runs the development tooling.
- [ ] Webpack transforms and bundles the project.
- [ ] Webpack Dev Server serves the project locally.
- [ ] The browser executes the compiled React JavaScript.
- [ ] React mounts into `<div id="root"></div>`.
- [ ] The CRA development server is not automatically a backend API server.
- [ ] `npm run build` creates files intended for production hosting.

### Revision questions

1. What process starts when you run `npm start`?
2. What is the difference between Node.js and Webpack Dev Server?
3. Which environment executes your React component: Node.js or the browser?
4. What is the purpose of `<div id="root"></div>`?
5. What role does `src/index.js` play?
6. Why can a plain JavaScript file sometimes run without a build tool?
7. Why does a JSX-based React project benefit from a development server?
8. Is the CRA development server automatically a backend server?
9. What is the difference between `npm start` and `npm run build`?

### A simple explanation to remember

> The development server prepares my React files and delivers them to the browser. Node.js runs the tools, but the browser runs my React UI.

---

## Progress board

- [ ] JavaScript foundations
- [ ] Understand the project structure
- [ ] Components and JSX
- [ ] Props and composition
- [ ] Events and state
- [ ] Conditional rendering and lists
- [ ] Forms
- [ ] Designing and sharing state
- [ ] Effects and refs
- [ ] Custom hooks and Context
- [ ] Testing and debugging
- [ ] Complete the capstone project

---

## 0. JavaScript foundations

React is JavaScript plus a way to describe user interfaces. Before going deep into React, make sure you are comfortable with these ideas.

### Checklist

- [ ] Variables with `const` and `let`
- [ ] Functions, arrow functions, and return values
- [ ] Objects and arrays
- [ ] Destructuring objects and arrays
- [ ] Spread syntax: `{ ...user }` and `[...items]`
- [ ] Array methods: `map`, `filter`, `find`, and `some`
- [ ] Conditional expressions and the ternary operator
- [ ] ES modules: `import` and `export`
- [ ] Promises and `async`/`await`
- [ ] Basic `fetch` usage

### Task 0.1: Transform data

Create an array of five tasks in JavaScript. Use `map` to display their titles, `filter` to find completed tasks, and `find` to locate one task by its id.

```js
const tasks = [
  { id: 1, title: 'Read JSX', completed: true },
  { id: 2, title: 'Practise props', completed: false },
];
```

**Done when:** You can explain what each array method returns and why `map` does not modify the original array.

---

## 1. Understand the project

### The important files

- `src/index.js` is the entry point. It creates the React root.
- `src/App.js` is the main component.
- `src/App.css` styles the `App` component.
- `public/index.html` contains the HTML element where React mounts.
- `package.json` contains dependencies and commands.
- `src/App.test.js` contains a UI test.

### Task 1.1: Trace the first render

Read `public/index.html`, `src/index.js`, and `src/App.js` in that order. Draw or write this flow:

```text
HTML root element -> React root -> App component -> browser UI
```

- [ ] I can explain where React starts.
- [ ] I can explain what `document.getElementById('root')` returns.
- [ ] I can explain why `App` is wrapped in `React.StrictMode`.

### Task 1.2: Make a visible change

Change the heading or link in `App.js`, save the file, and observe the browser update.

**Done when:** You can describe the development server, hot reload, and the difference between editing source code and refreshing the browser.

---

## 2. Components and JSX

A component is a JavaScript function that returns a description of UI.

```jsx
function Greeting() {
  return <h1>Hello, React learner!</h1>;
}
```

JSX looks like HTML, but it is written inside JavaScript. Important differences include:

- Use `className`, not `class`.
- JavaScript expressions go inside `{}`.
- A component must return one parent element, or a Fragment.
- Component names begin with a capital letter.

### Task 2.1: Create your first components

Create these components in `App.js` or separate files:

- `Header`
- `WelcomeMessage`
- `Footer`

Render all three from `App`.

- [ ] I created a component as a function.
- [ ] I returned JSX from it.
- [ ] I rendered it using `<ComponentName />`.
- [ ] I split UI by responsibility rather than by arbitrary file size.

### Task 2.2: Use JavaScript in JSX

Create a `user` object and display the user's name, role, and whether they are learning React.

```jsx
const user = { name: 'Ada', role: 'Learner', learningReact: true };
```

**Done when:** You can explain the difference between text, a JavaScript expression, and a JSX element.

---

## 3. Props and composition

Props are inputs passed from a parent component to a child component. They should be treated as read-only by the child.

```jsx
function Badge({ label, colour }) {
  return <span className={colour}>{label}</span>;
}

<Badge label="Beginner" colour="green" />
```

### Task 3.1: Build a reusable profile card

Create a `ProfileCard` component that accepts:

- `name`
- `role`
- `avatarUrl`
- `isAvailable`

Render three profile cards with different values.

- [ ] I passed data through props.
- [ ] I read props using destructuring.
- [ ] I reused one component with different data.
- [ ] I did not change props inside the child.

### Task 3.2: Practise `children`

Create a `Card` component that renders a border around whatever is placed between its opening and closing tags.

```jsx
<Card>
  <h2>Learning React</h2>
  <p>Small steps every day.</p>
</Card>
```

**Key idea:** Composition is often better than creating a component with dozens of configuration props.

---

## 4. Events and state

An event is something that happens in the browser, such as a click or input change. State is data that can change and cause a component to render again.

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
}
```

### Task 4.1: Build a counter

Add buttons for:

- Increment
- Decrement
- Reset

Rules:

- [ ] The count is stored with `useState`.
- [ ] Each button has an event handler.
- [ ] Reset returns the count to zero.
- [ ] The UI displays the current state.

### Task 4.2: Understand functional updates

Add a button that increments the count three times. Use this form:

```jsx
setCount(previousCount => previousCount + 1);
```

**Explain:** Why is the functional form safer when the next state depends on the previous state?

### Task 4.3: Build a like button

Create a button that toggles between `Like` and `Unlike`, and displays the number of likes.

**Done when:** You can explain that calling a state setter requests a new render; it does not immediately change the existing render's variable.

---

## 5. Conditional rendering and lists

React lets you choose what to render using normal JavaScript.

```jsx
{isLoggedIn ? <Dashboard /> : <LoginMessage />}
```

For lists, use `map` and give each sibling a stable `key`.

```jsx
{tasks.map(task => (
  <li key={task.id}>{task.title}</li>
))}
```

### Task 5.1: Status message

Render one of these messages based on state:

- `Loading...`
- `No tasks yet`
- `You have tasks to complete`
- `All tasks are complete`

### Task 5.2: Render a task list

Create a list from an array of task objects. Add a stable `id` to every task and use it as the key.

- [ ] I used `map` to render repeated UI.
- [ ] I used a stable id as the key.
- [ ] I understand that a key helps React identify an item across renders.
- [ ] I do not use the array index as a key when list items can be reordered or removed.

### Task 5.3: Filter the list

Add buttons for `All`, `Active`, and `Completed`. Store the selected filter in state and derive the visible list from the original tasks.

**Important:** The filtered list is derived data. You usually do not need a second state variable for it.

---

## 6. Forms and controlled inputs

A controlled input gets its value from React state and reports changes through an event handler.

```jsx
const [title, setTitle] = useState('');

<input
  value={title}
  onChange={event => setTitle(event.target.value)}
/>
```

### Task 6.1: Add a task form

Build a form with:

- A text input
- An `Add task` button
- Empty-input validation
- Submission handled by `onSubmit`
- `event.preventDefault()` to stop a page reload
- The input cleared after a successful submission

- [ ] I know where the input value lives.
- [ ] I can read `event.target.value`.
- [ ] I can handle form submission.
- [ ] I can display a useful validation message.

### Task 6.2: Add a priority select

Add a select with `Low`, `Medium`, and `High` options. Store the selected value in state and display it beside each task.

---

## 7. Designing and sharing state

Before adding state, ask:

1. Is this information changing?
2. Is it already available from props or existing state?
3. Which component needs to read it?
4. Which component should own it?

### Task 7.1: Lift state up

Create these components:

```text
App
├── TaskForm
├── FilterButtons
└── TaskList
    └── TaskItem
```

Keep the task array in `App`. Pass data and callback functions to the children.

- [ ] `App` owns the task state.
- [ ] `TaskForm` receives an `onAddTask` callback.
- [ ] `FilterButtons` receives the active filter and an `onChangeFilter` callback.
- [ ] `TaskList` receives the tasks to display.
- [ ] `TaskItem` receives one task and an `onToggleTask` callback.

### Task 7.2: Update arrays immutably

Implement toggle and delete without changing the existing array directly.

Useful patterns:

```js
setTasks(tasks =>
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )
);

setTasks(tasks => tasks.filter(task => task.id !== id));
```

**Done when:** You can explain why `push`, direct object mutation, and direct array mutation are poor choices for React state.

---

## 8. Effects and refs

Learn `useEffect` after understanding rendering and state. An effect is for synchronising React with something outside React, such as:

- A network request
- The browser document title
- A timer
- A subscription
- Browser storage

Do not use an effect just to calculate ordinary derived data.

### Task 8.1: Update the document title

Set the browser tab title to show the number of incomplete tasks.

```jsx
useEffect(() => {
  document.title = `${remainingCount} tasks remaining`;
}, [remainingCount]);
```

### Task 8.2: Add local storage

Save tasks to `localStorage` when they change and load them when the app starts.

- [ ] I understand why the effect has a dependency array.
- [ ] I understand that effects can return cleanup functions.
- [ ] I know that browser storage contains strings, so arrays need JSON conversion.
- [ ] I can identify what external system the effect synchronises with.

### Task 8.3: Focus an input with `useRef`

Add a `Focus input` button that focuses the task input. Use a ref for the DOM element.

**Key idea:** State is for data that affects rendering. A ref is for a value or DOM node that must persist without causing a render.

---

## 9. Reuse with custom hooks and Context

These are useful fundamentals, but learn them after you can build the task app with props and callbacks.

### Task 9.1: Create a custom hook

Create `useLocalStorage` that returns a stored value and a setter.

```js
const [tasks, setTasks] = useLocalStorage('react-tasks', []);
```

**Done when:** You can explain that a custom hook is a reusable function for stateful React logic, and its name starts with `use`.

### Task 9.2: Try Context carefully

Create a light/dark theme using Context. Add a theme toggle and use the theme in several components.

**Remember:** Context is useful for shared values such as theme or current user. It is not a replacement for thinking carefully about state ownership.

---

## 10. Testing and debugging

### Task 10.1: Test behaviour

Add tests for:

- The app displays an empty-state message.
- A user can add a task.
- A user can mark a task complete.
- A user can filter tasks.
- A user can delete a task.

Prefer tests that interact with the UI like a user. Test what the user can see and do rather than private implementation details.

Run:

```bash
npm test -- --watchAll=false
```

### Task 10.2: Practise debugging

Intentionally introduce and fix these mistakes:

- Forget to add a `key` to a list item.
- Read the wrong prop name.
- Call a handler while rendering: `onClick={handleClick()}`.
- Mutate an array instead of creating a new one.
- Leave a required effect dependency out.

Use the browser console, React DevTools, and small `console.log` statements to investigate.

---

## 11. Accessibility and quality basics

For every feature, check:

- [ ] Buttons have clear text.
- [ ] Inputs have labels.
- [ ] Images have meaningful `alt` text, or empty `alt` text when decorative.
- [ ] The app can be used with a keyboard.
- [ ] Colour is not the only way information is communicated.
- [ ] Empty, loading, success, and error states are considered.
- [ ] Components have clear names.
- [ ] Repeated code has been made reusable only when that improves clarity.

---

## Capstone: Task tracker

Build the complete app without copying a finished solution.

### Required features

- [ ] Add a task with a title.
- [ ] Reject empty task titles.
- [ ] Mark a task complete or active.
- [ ] Delete a task.
- [ ] Filter by all, active, and completed.
- [ ] Display the number of remaining tasks.
- [ ] Show a useful empty state.
- [ ] Persist tasks in local storage.
- [ ] Use separate components.
- [ ] Add at least five behaviour-focused tests.
- [ ] Make the interface keyboard-friendly.

### Stretch features

- [ ] Edit a task.
- [ ] Add priorities.
- [ ] Add due dates.
- [ ] Sort tasks.
- [ ] Add a light/dark theme.
- [ ] Add a loading state for initial storage loading.

### Capstone reflection

Write short answers after finishing:

1. Which component owns the task state, and why?
2. Which values are derived rather than stored?
3. Where do events enter the component tree?
4. Where did you need an effect, and what external system did it synchronise with?
5. What would you change if the app had 100 components?
6. Which React concept is still unclear?

---

## Revision questions

Try answering these without looking at your code:

1. What is a component?
2. What is JSX?
3. What is the difference between props and state?
4. Why should props be treated as read-only?
5. What causes a component to render again?
6. Why do list items need keys?
7. What is a controlled input?
8. What does “lifting state up” mean?
9. What is derived data?
10. When should you use `useEffect`?
11. What is the difference between state and a ref?
12. Why should state arrays and objects be updated immutably?
13. What problem does a custom hook solve?
14. When might Context be useful?
15. What should a good UI test verify?


---

## Project anatomy and responsiveness (CRA - SITE/myapp01)

This section explains the files in this CRA project and how they relate to one another.

### The big picture

```text
package.json
   defines the project, commands, and requested packages
          |
          v
package-lock.json
   records the exact dependency versions
          |
          v
node_modules/
   contains installed packages used by the tools
          |
          v
tsconfig.json
   tells TypeScript how to understand .ts and .tsx files
          |
          v
react-scripts start
   starts the development build process
          |
          v
public/index.html
   provides the HTML document and the root element
          |
          v
src/index.js
   starts React and renders App
          |
          v
src/App.js
   composes the lessons
          |
          v
src/lessons/Lesson1.jsx ... Lesson4.tsx
   describe the UI that React renders
```

### 1. `node_modules/`

`node_modules` contains the packages installed from npm, including their source code and executable commands.

In this project it contains things such as:

- React and React DOM.
- `react-scripts`.
- Webpack and Babel.
- TypeScript.
- Jest and Testing Library.
- Many transitive dependencies.

`node_modules` is generated from `package.json` and `package-lock.json`. It is normally listed in `.gitignore` because it is large and can be recreated.

If it is removed, reinstall packages with:

```bash
npm install
```

`node_modules` affects development startup time and disk usage. It does not mean the entire directory is sent to the browser. The build tools select and transform the code that your application imports.

### 4. `tsconfig.json`

`tsconfig.json` configures the TypeScript compiler and editor support. It applies to the files under `src` because this project contains:

```json
"include": ["src"]
```

Important options in this project:

| Option | Meaning |
| --- | --- |
| `target` | JavaScript language level to produce or understand |
| `lib` | Browser and JavaScript APIs available to TypeScript |
| `allowJs` | Allows `.js` files in this TypeScript project |
| `strict` | Enables stricter type checking |
| `skipLibCheck` | Skips checking the internals of type declaration packages |
| `module` | Describes how imports and exports are handled |
| `moduleResolution` | Describes how imported files are found |
| `resolveJsonModule` | Allows importing JSON files |
| `isolatedModules` | Ensures files can be processed independently by the build tool |
| `noEmit` | TypeScript checks types but does not create `.js` output files |
| `jsx` | Tells TypeScript how to process JSX in `.tsx` files |
| `include` | Chooses which project files TypeScript checks |

`tsconfig.json` is not imported into `App.js`. CRA and your editor read it as configuration. It mainly affects development and build-time checking, not React runtime performance.

The current project intentionally allows both JavaScript lessons and TypeScript lessons:

```text
Lesson1.jsx, Lesson2.jsx, Lesson3.jsx -> JavaScript + JSX
Lesson4.tsx                           -> TypeScript + JSX
```

The `tsx` extension means “TypeScript with JSX.” It does not create a type named `TSX.Element`. For a component return type, this project uses:

```tsx
import type { ReactElement } from 'react';

function Example(): ReactElement {
  return <h1>Hello</h1>;
}
```

### 5. `public/index.html`

This is the HTML document template sent to the browser. It is not a React component.

The important element is:

```html
<div id="root"></div>
```

React does not replace the entire HTML document. It takes control of this root element and renders the component tree inside it.

Other files in `public` include:

- `favicon.ico`: browser tab icon.
- `manifest.json`: metadata for installable web-app behavior.
- `robots.txt`: instructions for search-engine crawlers.
- `logo192.png` and `logo512.png`: template images.

Files in `public` are copied or served as static assets. They are not imported and type-checked like files under `src`.

### 6. `src/index.js`

This is the React bootstrap file. It runs first in the browser after the JavaScript bundle loads.

```js
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Its responsibilities are:

- Import React DOM.
- Find the HTML root element.
- Import the top-level `App` component.
- Render the React component tree.
- Load global CSS.
- Optionally call the web-vitals helper.

`StrictMode` helps detect certain problems during development. Some behavior can appear more than once in development while React checks your components; this does not represent the normal production behavior.

### 7. `src/App.js`

`App.js` is the top-level application component. It decides which lesson components appear in the page.

Your current flow is:

```text
App
├── Lesson1
├── Lesson2
├── Lesson3
└── Lesson4
```

Rendering all lessons is useful while comparing them. However, when you add many lessons, it is better to render one active lesson at a time:

```jsx
import Lesson4 from './lessons/Lesson4';

function App() {
  return <Lesson4 />;
}

export default App;
```

This keeps the screen focused and prevents every lesson from contributing to the rendered DOM. Later, you can build a lesson menu.

`App.js` is not an app server. It is a React component that runs in the browser after the development tooling has prepared the code.

### 8. `src/lessons/`

This is your learning area. Each lesson is a component module.

- `Lesson1.jsx` practises a basic component and button.
- `Lesson2.jsx` practises a child component and `.map()`.
- `Lesson3.jsx` continues list rendering.
- `Lesson4.tsx` practises TypeScript types, typed props, and typed data.

Each lesson can import smaller components, styles, and data. As lessons become larger, use folders such as:

```text
src/lessons/Lesson4/
├── Lesson4.tsx
├── AddressList.tsx
└── Lesson4.css
```

### 9. CSS files

`src/index.css` is imported by `src/index.js`, so its rules apply globally.

`src/lessons/Lesson.css` is imported by `App.js`, so it also applies globally to every rendered lesson. For example, this selector affects every `h1` in the application:

```css
h1 {
  color: red;
}
```

Global selectors are fine for small exercises, but they can create surprising effects as the app grows. Prefer clear class names:

```jsx
<h1 className="lesson-title">Welcome</h1>
```

```css
.lesson-title {
  color: red;
}
```

Your current `.button` rule contains `center: auto`, which is not a valid CSS property, and it declares `color` twice. The second `color` declaration wins. These do not stop React from rendering, but the browser ignores invalid CSS declarations.

### 10. `src/App.test.js`

This file contains a Jest and Testing Library test for the `App` component.

The original CRA test looks for the old `Learn React` link. Since you replaced the CRA screen with lessons, the test is now stale. A test should describe the UI your app currently promises, for example:

```js
test('renders the address lesson', () => {
  render(<App />);
  expect(screen.getByText(/address app/i)).toBeInTheDocument();
});
```

Tests do not improve runtime responsiveness directly. They improve confidence that changes have not broken behavior.

### 11. `src/setupTests.js`

This file runs before tests and imports Testing Library matchers such as:

```js
expect(element).toBeInTheDocument();
```

It is test setup, not browser application code.

### 12. `src/reportWebVitals.js`

This helper can measure browser performance signals such as loading and rendering milestones. Your current code calls:

```js
reportWebVitals();
```

Because no callback is supplied, it currently does not report measurements anywhere. It does not make the application faster by itself.

Performance measurement and performance improvement are different activities:

```text
measure -> identify a slow area -> change code -> measure again
```

### 13. `.gitignore`

`.gitignore` tells Git which generated or local files should not be committed. This project ignores:

- `node_modules`: recreated with `npm install`.
- `build`: generated by `npm run build`.
- `coverage`: generated by test coverage tools.
- Local environment files and logs.

Ignoring a file does not delete it. It only keeps Git from normally tracking it.


## How these files affect responsiveness

“Responsiveness” has two related meanings:

1. **Development responsiveness:** how quickly the development server starts and reflects changes.
2. **Browser responsiveness:** how quickly the page loads and responds to user interaction.

### Development responsiveness

```text
package.json + package-lock.json
   -> npm installs node_modules
   -> react-scripts starts Webpack Dev Server
   -> source files are watched and transformed
   -> browser receives updates
```

Large dependency trees can make installation and startup heavier. Vite generally provides a faster modern development experience, but the React component concepts remain the same.

### Initial browser loading

When the app starts, the browser downloads the generated JavaScript bundle. If `App.js` imports and renders every lesson, all imported lesson code can become part of the application graph, and all lesson UI is created in the DOM.

For four tiny lessons this impact is negligible. For a larger app, improve initial loading by:

- Rendering only the active page or lesson.
- Splitting large features into routes or lazy-loaded modules.
- Avoiding unnecessarily large dependencies.
- Compressing and caching production assets.
- Measuring before making performance changes.

### Rendering responsiveness

When state changes, React determines what UI needs to be updated. Keep interactions responsive by:

- Keeping state close to the components that need it.
- Avoiding unnecessary duplicated state.
- Deriving simple values during rendering.
- Rendering lists with stable keys.
- Splitting very large components.
- Avoiding expensive work inside every render.

Your current lessons mostly contain static arrays and simple markup, so they should render quickly. The main value now is learning the data flow, not optimising them.

### Compile-time versus runtime

| Item | Main time it matters | Direct runtime effect |
| --- | --- | --- |
| `package.json` | Install and build | None after bundling, except selected dependencies |
| `package-lock.json` | Installation | None in the browser |
| `node_modules` | Development and build | Selected code may be included in the bundle |
| `tsconfig.json` | Editor, type-checking, and build | Usually none directly |
| `src/index.js` | Browser startup | Starts React and mounts the tree |
| `src/App.js` | Browser startup and rendering | Determines the component tree |
| Lesson components | Browser startup and interaction | Produce the visible UI |
| CSS | Browser loading and painting | Affects layout and visual rendering |
| `reportWebVitals.js` | Optional browser measurement | Measures only when given a callback |


### Final mental model

```text
package.json       = project requests and commands
package-lock.json  = exact dependency recipe
node_modules       = installed tool and package files
tsconfig.json      = TypeScript rules
public/index.html  = HTML shell and root element
src/index.js       = React bootstrap
src/App.js         = top-level component composition
src/lessons/*      = your React learning components
CSS files          = visual rules
tests              = behavior checks
development server = prepares and serves the app locally
browser            = runs React and displays the UI
```

