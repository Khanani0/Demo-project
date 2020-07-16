import React ,{useState,createContext}from 'react';
import uuid from 'uuid/v1';


export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [Project , setProject] = useState([
        {Title:'Dummy Project', CreatedBy:'ProtoTeam' , id:uuid()}
    ]);
    const [ProjectTitle, setProjectTitle] = useState([{title: '', id:uuid()}])
    const AddTitle = (title) =>{
        console.log('Added Title')
        setProjectTitle([{title , id:uuid()}])
    }
    const [Contributer , setContributer]= useState([
        {Name: 'AbdulRafay', id:2 }
    ])
    const AddProject =(Title,CreatedBy)=>{
        setProject([...Project,{Title , CreatedBy, id: uuid()} ]);
    }

    const DeleteProject =(id)=>{
        setProject(Project.filter(Project=> Project.id !== id));
    }

    const AddContributer = (Name) => {
        setContributer([...Contributer,{Name, id:uuid()}])
    }
  
    return(
        <ProjectContext.Provider value={{Project,AddTitle,ProjectTitle,AddProject,DeleteProject, Contributer,AddContributer}}>
            { props.children } 
        </ProjectContext.Provider>
        )
    }
export default ProjectContextProvider;