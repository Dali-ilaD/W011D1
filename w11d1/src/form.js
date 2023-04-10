
import {useState} from 'react';

    const Form = () =>{

        const [newPerson, setPerson] = useState(
            {
                name: '',
                email:'',
                phonenumber:'',
                stafforstudent:'',
                bio:'',
                emailnotif:''
            }
        )

        const handleChange = (attribute, e) =>{
            setPerson(prev =>  ({...prev,[attribute]: e.target.value}))
        }


        console.log(newPerson)
        return(
            <>
                <label htmlFor='Name'>Name</label>
                <input type='text' id='Name' value={newPerson.name} onChange ={e =>handleChange('name',e)}></input>

                <label htmlFor='Email'>Email</label>
                <input type='text' id='Email' value=''></input>

                <label htmlFor='PhoneNumber'>Phone Number</label>
                <input type='text' id='PhoneNumber' value=''></input>

                <label htmlFor='PhoneType'>Phone Type</label>
                <select id='PhoneType'>
                    <option disabled defaultValue value=''>Select</option>
                    <option value='Home'>Home</option>
                    <option value='Mobile'>Mobile</option>
                    <option value='Work'>Work</option>
                </select>

                <label htmlFor='StaffORStudent'>Staff or Student</label>
                <input type='radio' id='StaffORStudent' value='Staff'></input>
                <input type='radio' id='StaffORStudent' value='Student'></input>

                <label htmlFor='Bio'>Bio</label>
                <textarea id='Bio'></textarea>

                <label htmlFor='EmailNotif'>Email Notifications</label>
                <input type='checkbox' id='EmailNotif'></input>




            </>
        )
    }

    export default Form