import React, { useEffect, useState } from "react";
import BaseApp from "../Core/Base";

import { useHistory, useParams } from "react-router-dom";

export default function EditStudents({Studdata, setStuddata}){
    const history=useHistory();
const [idx,setidx]=useState("");
  const [StudentName,setName]=useState("");
  const [RegNo,setReg]=useState("");
  const [Class,setClass]=useState("");
  const [Course,setCourse]=useState("");
  const [Activity,setActivity]=useState("");
  const [Address,setAddress]=useState("");
  const {Id}=useParams();

  const selectstudents=Studdata.find((stud,index)=>stud.Id===Id);
  useEffect(()=>{
    setidx(selectstudents.Id)
    setName(selectstudents.StudentName)
    setReg(selectstudents.RegNo)
    setClass(selectstudents.Class)
    setCourse(selectstudents.Course)
    setActivity(selectstudents.Activity)
    setAddress(selectstudents.Address)
  },[selectstudents])

  const Editdetails=()=>{
    const edit=Studdata.findIndex(stud=>stud.Id===Id)
    const Editeddetails={
        Id,
        StudentName,
        RegNo,
        Class,
        Course,
        Activity,
        Address
    }
    Studdata[edit]=Editeddetails;
    setStuddata([...Studdata]);
    history.push("/dashboard/students")
  }

    return(
        <BaseApp 
        title="EditStudentDetails">

            <div className="edit-student"> 

            <div className="card">
                <input 
                placeholder="No"
                value={idx}
                onChange={(event=>setidx(event.target.value))}
                />
            
                <input
                 placeholder="Name"
                 value={StudentName}
                 onChange={(event=>setName(event.target.value))}
                 />

                <input
                 placeholder="Register No"
                 value={RegNo}
                 onChange={(event=>setReg(event.target.value))}
                 />

                <input 
                placeholder="Class"
                value={Class}
                onChange={(event=>setClass(event.target.value))}
                />

                <input
                 placeholder="Course"
                 value={Course}
                 onChange={(event=>setCourse(event.target.value))}
                 />

                <input
                 placeholder="Activity"
                 value={Activity}
                 onChange={(event=>setActivity(event.target.value))}
                 /> 

                    <input
                 placeholder="Address"
                 value={Address}
                 onChange={(event=>setAddress(event.target.value))}
                 /> 
            </div>
            <button onClick={(Editdetails)}>Update</button>
            </div>
        </BaseApp>
    )
}