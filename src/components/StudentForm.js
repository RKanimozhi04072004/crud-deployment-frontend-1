import {useState,useEffect} from 'react';
function StudentForm(props){
    const [name,setName]=useState(props.nameValue);
    const [email,setEmail]=useState(props.emailValue);
    const [rollNo,setrollNo]=useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setrollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue])
    const arr=[name,email,rollNo];//[kani,kani@gmail.com,1]
    //Data available in the child component needs to transferred to parent compont
    //Callback function
    const handleClick=()=>{
        props.getState(arr);//getState available in a Parent Component.
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
          <input  defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)}class="form-control my-3" placeholder="Enter your name" />
          <input  defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
          <input  defaultValue={props.rollNoValue} onChange={(event)=>setrollNo(event.target.value)}class="form-control my-3" placeholder="Enter your rollNo" />
          <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;
//
//K   ->setName("K")  ->name="K"
//Ka  ->setName("Ka") ->name="Ka"
