import React, { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import { ContactService } from '../../../services/ContactService';
import { useEffect } from 'react';

const EditContact = ()=>
{
    let [state,setState]=useState({
    loading: false,
    contact:{},
    groups:[],
    errorMessage:''})

    useEffect(async () => {
        try{
         setState({...state,loading: true});
         let response = await ContactService.getContact(contact)
         //console.log(response.data);
         setState({
             ...state,
             loading: false,
             contacts: 
             {
                name:'',
                photo:'',
                mobile:'',
                email:'',
                company:'',
                title:'',
                group:''
             },
         })
        }
        catch(error){
         setState({
             ...state,
             loading: false,
             errorMessage: error.message
         })
        }
     
     },[])
     let {loading , contact, groups, errorMessage} = state;

    return(
        <>
        <pre>{JSON.stringify(state.contact)}</pre>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">Edit Contact</p>
                        <p className="fst-italic">This is our Edit contact Page in which we can edit  any a  contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, neque.lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus ratione eligendi nostrum. Iste, illum.</p>

                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className='form-control' placeholder='Name' />
                            </div>
                            <div className="mb-2">
                                <input type="text" className='form-control' placeholder='Photo Url' />
                            </div>
                            <div className="mb-2">
                                <input type="number" className='form-control' placeholder='Mobile' />
                            </div>
                            <div className="mb-2">
                                <input type="email" className='form-control' placeholder='Email' />
                            </div>
                            <div className="mb-2">
                                <input type="text" className='form-control' placeholder='Company name' />
                            </div>
                            <div className="mb-2">
                                <input type="text" className='form-control' placeholder='Title' />
                            </div>
                            <div className="mb-2">
                            <select className='form-control'><option value="">Select a Group</option></select>

                            </div>
                            <div className="mb-2">
                                <input type="submit" className='btn btn-primary' value='update' />
         <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAaVBMVEX///8AAAD8/Pz4+Pjt7e3z8/NBQUHw8PDX19dZWVmkpKTp6enDw8Pm5uZPT0/d3d2ysrI8PDwuLi7MzMyJiYljY2N0dHQdHR0oKCiQkJCrq6u9vb1/f39oaGgODg6ZmZlISEg1NTUXFxdieanuAAAHj0lEQVR4nNVc6bqqOgyVMsgkoCDKpOL7P+ShZSpQgZYG9lm/7nc5sJdtk6wmaU8nCVD96KGMEPtIxqclIivGHBuiRxOjgNwPk2SF71s9ml2LMP5FEuN+OZofAYq+cywV5WoeTbFCdpsniREeTRK9l0kqyutgnpdyDcujxzObeMpfeBzomFZNeAMvdM6HuCY152BJ8Hm7+zO1eFliWPa+JFcbzxhfd0+WV0GWFaLdWPorfPpv7BU+zXILS0UxduHpPLexrCxJg2fpbxxLjDu4XlYlsFSUBJilLoWlosD6JSTk1RmwdEia7C2PCADjEUqksVQUOCsKJLJU3lAsQ5ksFQ/IeWqbQuQUYMaeljJpxlA0TxdZ/ogAjOZJk8kTcAN/2aw7ekBGzFSAT5ox/7cFSPNU8pL8OJUUiBgPDMgdnM3J0q6jd/qaPLlB7t5NntX5iJ32vXDidh+QyRC0Xn48ItqYw8nvywBpntbmEa6pM3xxIgkCSJpss6Vx84ooY4TsscBKIWn6cwyN3M5CX2OrNHVkRqA0T78YxsF54c3RRBxAM3ZXCDNnWEsAXZsnhqDLnXVifLA6X6CWPk3GxatFxGBdP2GLB+MCS8qxraHfu8ImP4aO0+PKCNE/0YMiWGMgIyxn+QUKtMDKgfg1oO3AWvJBI5jUu8D1Dbo2wJsDvFDvAue7KCnH7aCdvkgDPOfU+uKd8sEuGrqm1dPk381oXdbegq6+9IKMX36fu3AJXtJwO5r873Y0gZ3miaIp8Kc0o3kXvsrepbwE0itaKegi+NG5aAGX0pRBCvmsJugyNAI0a/cOmkhoEcQv4UknNGET780f8jpDL/nfxuvaQ7oGXrKmRPGL/20cGqz4YxTADUq901T4hQetVWErrHgwrSQqBGka/W+8A7Brgaoo8qxEg2qmD5FiBD0XfIKaC2pF09jw/Up5fAuz3mwAVrD0atY+G7Za5t0iAg7LF8Bs8bmi6XGrTAqotnAsrcEKWBJo1kAxrJQjk7597evYhCBjUWVCt+0iLAB2SCdPymzhr4AmuhIZnsSv9pdX0PY+rB2srTtsW0xecUDFi3/j3lXHoRY2a0gySDdckRIyVPedoTp9KJvXCCbOWxh5bHkCY4r3J3eiW2Dn/ETlZkr+oNnndeB3lq1mfPC7+S4TUezQcRoYD0G52eR1vvcddkOVuYeZJzRxeNKLINivc/st5Oaxm9ghk9AD74kM3pfUYu9mfdIRy2vq/rNal7u2axPFyKu/7b0yHj2wb+Ftv/3CimEmntxGhM3uul368yHg3cTilbmvnWPoHl9oJt0X1138+gDui0uD2xIkoBCwsZdr/QtJ3kLXgpggEnll4tfHlRaons0FECWxatqRt496YwNP+2vFH1dJgXp3K2+h31YJOrL5Ae/JnwHJyi4FI5WwvB95gJU4+dfsntsklTXv2HPLxB0+ZiK1Wxd9i2Npnut9Q/KDRX80b+9gPkS7C7NYA6o3zd0v2OTwCnRlotekHQnZzcM3XhmfA8h1CCsN+YzKZucemE0XH9L8rJ1uLyS9qa+9lSaNhAhy/96OqRfnUZLksdU1lSY4QuLn8XFG5H+bcOlSFR8Kt7hWbuZR8qgGmVjyX2o2bd0v351Dxb+CeycqC2SQWhPWffvT9+98y9ykfBDpFQCsXcwhxaw+tENUwzSJoihJx+2cCI/79win5NR9eSv1u0aK8PHONz4gv2keXN0P0dSOLXO/cISytkOBowmz7VS07D2GFJ3DuLeU0VYRubFR3giM2Bw4StT3bj6MwAGVdVpo58O28EFsGR0RGTj0y+CRYr0zmJKLGiaWMbnWYdAzNT5XEs08q9yqFUm9p0Dz3TT+cRsKnQhUxw+fVFbkx5GTW56Fl+1kNTeJrblDgdQWRxs/o+4gCGcufTGKPBA2K9Ux7fvvb7co+z+gj59Rqoh1sGkIzzb5hzW043KZI0ZfL1PHo/7sfoLDliYjPIp3tn5YkR9NbeUnbv2LYzPpi9Eu81Xm57z0x9GTIRzbW/4YjV61n4eLhLrEhe+TRbAYNexV00ODSmANVid16GLiA5bwmVcp4fRo3CLos3MadeUH5ap4LqhpMFfyyAVYDpNDfud4qPFQV3iMKc9fN5WcRb5W4Uot+Z4mpfBE5qhCwcwt68InfKn56f3jc9OcE7A6PZHgWCq047mw1iZa791GYKhZ7huOejw7I6KPsHR/Y73TnGCSBl8+mDiDzlzoRdgdrxKfpkm5axKPuWBorHFrVMm2G3+GYX5ZGsyi+dHDk7cvdbIQ+DFIMnOdQGbgQ74SjmyFOFR9y5zT6377YDbHSMZfuZI53/hlejg3fqr+2CRyk6gu6jQ79Cx5D8dPgesE08teYlXCCPThbNvyIchOiHHT2GWL02zQBQ9Twg0oBvNOmnxyepQfZWtEUi698ZmE/A2XubVoZh1tiJM9DObekXMnwERj6+dSwrcAYdRC6bL8L4+FJm9pQqIOxVKWJiTqxcm9l9wbpMcKSbyWBwZkv+IvXD18PEhH65+3oNqGNksYeNj/g6GTtPNGdb0LKkEofB/tjvhog2sX/ix8Cbp1B4T/AFCZYZYpssHrAAAAAElFTkSuQmCC" alt=''className='img-fluid contact-img'/>


                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default EditContact;