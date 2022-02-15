
import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './Car.js';
import Goal from './Conditional.js';
import Football from './Football.js';
import MyForm from './Forms.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/Nopage";
import Timer from './Timeout.js';
import Counter from './Calculation.js';
import App from './App.js';

// const myfirstelement = <h1>Hello React!</h1>

// const myElement =(
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const reactvar = 10;
// const x = <h1>React is {reactvar} times better with JSX</h1>;


// ReactDOM.render(<Goal isGoal={true} />, document.getElementById('root'));

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }




ReactDOM.render(<App />, document.getElementById('root'));