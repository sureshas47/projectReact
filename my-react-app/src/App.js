import logo from './logo.svg';
import './App.css';

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
//           this is react.
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

 import React, {Component} from 'react';
    import './App.css';
    import './index.css';
    import FirstComponent from './component/firstComponent'; //call component


import Routes from "./routes";
class App extends Component {
    render() {
        return (//...we can apply inline css in react within double courlie bracket
           //  <div>
           // <div style={{background:"aqua"}}>
           //    <p style={{fontSize:50, textAlign:"center"}}>this is react</p>
           // </div>
           //      <div>
           //          <p className="headerName">this is react applied css from outside</p>
           //
           //      </div>
           //      <div>
           //          {console.log("we can write js code by closing with curlie bracket")};
           //          <p className="cssindex">hy this is react applied css from outside refers to index</p>
           //
           //      </div>
           //          <FirstComponent/>
           //          <ThirdComponent/>
           //  </div>

            <div className="headerName">
                <Routes/>
                {/*<DigitalClock/>*/}
            </div>
        );
    }
}

export default App;
//....class base compoment maa state hunxa..............
//....functional component maa state hudaina but, use garna milxa by using react hooks which is easy...........
