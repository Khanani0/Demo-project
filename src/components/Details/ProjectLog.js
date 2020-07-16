import React from 'react';
import {Link} from 'react-router-dom';
 
const ProjectLog = ({project}) =>{
    return (
        <Link to={'/ProjectDetails/'+ project.id}>
        <div className='container'>
            <div  className='card card-content z-depth-0 grey-text'>
                <li><h5 className='card-title'>{project.Title}</h5></li>
                <br/>
                <br/>
                <li>Created By {project.CreatedBy}</li>
                <span>Created on 8/10/2019</span>
            </div>
        </div>
        </Link>
         );
}
 
export default ProjectLog;