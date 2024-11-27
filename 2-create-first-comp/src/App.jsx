import KgButton from "./KgButton";
import { MainHeading } from "./mainHeading";
import { SecondHeading } from "./mainHeading";
import Hello from "./Hello";
import Random from "./random";
function App() { // functional component
  return <div>
    <h1>Hello World</h1>
    <KgButton/>
    <MainHeading/>
    <SecondHeading/>
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div>
  
}

export default App; // exporting it for using in main file