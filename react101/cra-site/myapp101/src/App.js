// import logo from './logo.svg';
// import './App.css';
import './lessons/Lesson.css';

import Lesson1 from './lessons/Lesson1';
import Lesson2 from './lessons/Lesson2';
import Lesson3 from './lessons/Lesson3';
import Lesson4 from './lessons/Lesson4';

function App() {
  return (
    <main>
      <section>
        <Lesson1 />
      </section>
      <section>
        <Lesson2 />
      </section>
      <section>
        <Lesson3 />
      </section>
      <section>
        <Lesson4 />
      </section>
    </main>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
