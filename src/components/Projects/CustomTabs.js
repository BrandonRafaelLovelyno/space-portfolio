//Importing react-bootstrap components
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//Importing the styles
import '../../styles/Projects/CustomTabs.css'

//Importing the projects array
import {done,toBeDone} from '../../data/Projects'

//Importing custom components
import ProjectCard from "./ProjectCard";

function CustomTabs() {
  return (
    <Tabs defaultActiveKey="done-1" className="mb-3 tab-container" fill>
      <Tab eventKey="done-1" title="First">
        {done.map((p)=><ProjectCard imageUrl={p.imageUrl} text={p.text} title={p.title}/>)}
      </Tab>
      <Tab eventKey="done-2" title="Second">
        Stay tune
      </Tab>
      <Tab eventKey="to-be-done" title="To be done">
      {toBeDone.map((p)=><ProjectCard imageUrl={p.imageUrl} text={p.text} title={p.title}/>)}
      </Tab>
    </Tabs>
  );
}

export default CustomTabs;
