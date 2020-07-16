import React , { Component }from 'react';
import { NavLink} from 'react-router-dom'
import { Modal } from 'antd';
import '../../App.css';
import firebase from 'firebase';

class SignedInLinks extends Component {
    render() { 
        const { confirm } = Modal;

        const showConfirm = () => {
            confirm({
                title: 'Do you want to SignOut?',
                content: 'Click OK',
        onOk() {
           return (firebase.auth().signOut(),
           console.log('LoggedOut')
           )},
        onCancel() {},
        });
    }
        return ( 
            <ul className='right'>
            <li><NavLink to='/ProjectForm'>NewProject</NavLink></li>
            <li><NavLink to='/MyProjects'>MyProjects</NavLink></li>
            <li><NavLink to='/'>SignIn</NavLink></li>
            <li>
                <button onClick={showConfirm} className='btn btn-floating  white grey-text'>AR</button>
            </li>
        </ul>
         );
    }
}
 
export default SignedInLinks;