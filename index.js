import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { FaQuestionCircle} from "react-icons/fa";
import { BiAlarm } from "react-icons/bi";







import App from "./App";
const now = new Date().toLocaleTimeString();


  

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className = "time">
    <h1>{now}</h1>
    <h4> <FaQuestionCircle />     4 Multiple Choice Questions</h4>
    <h4><BiAlarm/>  1.5 minutes per Questions</h4>
    
    
    
   </div>
    <App />
  </StrictMode>,
  rootElement
);
