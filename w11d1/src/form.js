
import {useState} from 'react';

    const Form = () =>{

        const [newPerson, setPerson] = useState(
            {
                name: '',
                email:'',
                phonenumber:'',
                stafforstudent:'',
                phonetype:'',
                bio:'',
                emailnotif:'false'
            }
        )

        const handleChange = (attribute, e) =>{
            if (e.target.id === "EmailNotif") {
                setPerson(prev => ({...prev, 'emailnotif': e.target.checked}))
            } else {
                setPerson(prev =>  ({...prev,[attribute]: e.target.value})) 
            }
        }

        const formValidation = (e) => {
            e.preventDefault();
            let name = e.target[0].value;
            let email = e.target[1].value;
            validateName(name);
        }

        const validateName = (name) => {
            if (name === "") {
                return <h1>Not valid name</h1>
            } else {
                return null
            }
        }

        return(
            <>
            <form onSubmit={(e) => formValidation(e)}>
                <label htmlFor='Name'>Name</label>
                <input type='text' id='Name' value={newPerson.name} onChange ={e =>handleChange('name',e)}></input>
                
                <br></br>

                <label htmlFor='Email'>Email</label>
                <input type='text' id='Email' value={newPerson.email} onChange={e => handleChange('email', e)}></input>

                <br></br>

                <label htmlFor='PhoneNumber'>Phone Number</label>
                <input type='text' id='PhoneNumber' value={newPerson.phonenumber} onChange={e => handleChange('phonenumber', e)}></input>

                <br></br>

                <label htmlFor='PhoneType'>Phone Type</label>
                <select id='PhoneType' onChange={e => handleChange('phonetype', e)}>
                    <option disabled defaultValue value=''>Select</option>
                    <option value='Home' selected={newPerson.phonetype === 'Home' ? true : false}>Home</option>
                    <option value='Mobile' selected={newPerson.phonetype === 'Mobile' ? true : false}>Mobile</option>
                    <option value='Work' selected={newPerson.phonetype === 'Work' ? true : false}>Work</option>
                </select>

                <br></br>

                <label htmlFor='StaffORStudent'>Staff or Student</label>
                <input type='radio' id='StaffORStudent' value='Staff' name="status" onChange={e => handleChange('StaffORStudent', e)}></input>
                <input type='radio' id='StaffORStudent' value='Student' name="status" onChange={e => handleChange('StaffORStudent', e)}></input>

                <br></br>

                <label htmlFor='Bio'>Bio</label>
                <textarea id='Bio' value={newPerson.bio} onChange={e => handleChange('bio', e)}></textarea>

                <br></br>

                <label htmlFor='EmailNotif'>Email Notifications</label>
                <input type='checkbox' id='EmailNotif' value='true' onChange={e => handleChange('emailnotif', e)}></input>

                <br></br>

                <label htmlFor='submit'></label>
                <input type="submit" id="submit" value="Submit Form!!"></input>
                
            </form>
            </>
        )
    }

    export default Form