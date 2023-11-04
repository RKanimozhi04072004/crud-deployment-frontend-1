import StudentForm from "./StudentForm";
import {useState} from 'react';
import Axios from "axios";
function CreateStudent(){
    const [arr,setArr]=useState([]);//arr=[kani,kani@gmail.com,1]

    //Declaring a argument function
    const getState=(childData)=>{ //childDate=[kani,kani@gmail.com,1]
        setArr(childData);
    }
    //Axios.post("url",data);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("https://crud-deployment-backend-2-0csw.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status===200)
              alert("Record added Successfully");
            else
              Promise.reject();

        })
        .catch((err)=>alert(err));
        event.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
            nameValue=""
            emailValue=""
            rollNoValue=""
            >
                Create StudentForm
            </StudentForm>
        </form>
    )
}
export default CreateStudent;