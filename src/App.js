import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
    <NavBar/>
    <Banner greeting={'Welcome to my portfolio'} toRotate={['Student','Full stack developer','Software Engineer']}/>
    </>
  );
}

export default App;
