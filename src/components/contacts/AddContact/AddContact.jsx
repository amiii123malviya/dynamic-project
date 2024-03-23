import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
 import {useState} from 'react';
import { ContactService } from '../../../services/ContactService';
import { useEffect } from 'react';

const AddContact = ()=>
{
    let navigate =useNavigate()
    let [state,setState] = useState({
        loading : false,
        contact : {

            name:'',
            photo:'',
            mobile:'',
            email:'',
            company:'',
            title:'',
            group:''
        },
        groups :[],
        errorMessage:''
    });
    // const myNav=useNavigate();
    // const [input, setInput]= useState({});

    // const  handleInput=(e)=>{
    //       let name=e.target.name;
    //       let value=e.target.value;
    //       setInput(values=>({...values, [name]:value}));
    // }
    let updateInput = (event)=>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [event.target.name]:event.target.value
            }
        });
    };
    useEffect(async()=>{
        try{
            setState({...state,loading: true});
            let response = await ContactService.getGroups();
            setState({
                ...state,
                loading: false,
                
                group : response.data
            })
            console.log(response.data);
        }
        catch(error)
        {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })

        }
        
    
    },[]);
    let submitform=async (event)=>
    {
        event.preventDefault();
        try{
            let response=await ContactService.createContact(state.contact);
            if(response)
            {
navigate('/contacts/list',{replace :true});
            }
        }
        catch(error){
            setState({...state,errorMessage:error.message});
            navigate('/contacts/add',{replace :false});

        }

    }

    let {loading , contact, groups, errorMessage} = state;

    return(
        <>
        {/* <pre>{JSON.stringify(state.contact)}</pre> */}
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-success fw-bold">Create Contact</p>
                        <p className="fst-italic">This is our Add contact Page in which we are creating any a new contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, neque.lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus ratione eligendi nostrum. Iste, illum.</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={submitform}>
                            <div className="mb-2">
                                <input
                                required={true}
                                name="name"
                                value={contact.name}
                                onChange={updateInput}
                                type="text" className='form-control'/*value={input.name}  onChange={handleInput}*/ placeholder='Name' />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true}
                                name="photo"
                                value={contact.photo}
                                onChange={updateInput}
                                type="text" className='form-control'/*value={input.photo}  onChange={handleInput}&=*/ placeholder='Photo Url' />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true}
                                name="mobile"
                                value={contact.mobile}
                                onChange={updateInput}
                                type="number" className='form-control'/* value={input.mobile}  onChange={handleInput}*/ placeholder='Mobile' />
                            </div>
                            <div className="mb-2">
                                <input
                                required={true}
                                name="email"
                                value={contact.email}
                                onChange={updateInput}
                                type="email" className='form-control' /*value={input.email}  onChange={handleInput} */placeholder='Email' />
                            </div>
                            <div className="mb-2">
                                <input
                                required={true}
                                name="company"
                                value={contact.company}
                                onChange={updateInput}
                                type="text" className='form-control' /*value={input.company}  onChange={handleInput}*/ placeholder='Company name' />
                            </div>
                            <div className="mb-2">
                                <input
                                required={true}
                                name="title"
                                value={contact.title}
                                onChange={updateInput}
                                type="text" className='form-control' /*value={input.title}  onChange={handleInput}*/ placeholder='Title' />
                            </div>
                         <div className="mb-2">
                            <select
                            required={true}
                            name="group" 
                             value={contact.group}
                             onChange={updateInput}
                             className='form-control'><option value="">Select a Group</option>
                             <option>developer</option>
                             <option>Ananlyst</option>
                             <option>Hr</option>
                             <option>Manager</option>

                             {
                                groups.length > 0 &&
                                groups.map(group =>{
                                    return(
                                        <option key= {groups.id} value={groups.id}>{groups.name}</option>
                                    )

                                })
                              
}</select>

                             </div>
                            <div className="mb-2">
                                <input type="submit" className='btn btn-success' value='Create' />
         <Link to={'/contacts/list'} className='btn btn-dark ms-2'> Cancel</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default AddContact;