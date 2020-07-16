import React, { useContext } from 'react';
import EditableTable from './Table'; 
import { ProjectContext } from '../Context/ProjectContext';

const ProjectDetails = () => {
    const {Project , Contributer} = useContext(ProjectContext)
    return ( 
        <div className='container'>
            <EditableTable Project= {Project} Contributer = {Contributer} key ={Project.id}/>
        </div>
     );
}
 
export default ProjectDetails;