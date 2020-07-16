import React,{useContext} from 'react';
import { ProjectContext } from '../Context/ProjectContext';
import ProjectLog from './ProjectLog';
import { Button } from 'antd';
import '../../App.css'

const ProjectList = () => {
        const {Project , DeleteProject} = useContext(ProjectContext)
        return Project.length ? (
            <div>
                <ul>
                    {Project.map(Project=>{
                        return(<div className='row' key={Project.id}>
                                <div className='col s12 m6'>
                                    <ProjectLog project ={Project} />
                                </div>
                                <div className='col s12 m6 '>
                                    <Button type="danger" onClick={()=> DeleteProject(Project.id)}>Discard</Button>
                                </div>
                               </div>)
                    })}
                </ul>
            </div>
        ): (<h4>You have no projects yet...</h4>)
}
 
export default ProjectList;