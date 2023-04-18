import React  from "react";
import BaseApp from "../Core/Base";


export default function TeachersDetails({teacher,setTeacher}){
    return(
        <BaseApp 

        title="Students-Details">
            <div className="student-container">
                <div>
                    {teacher.map((teach,idx)=>(

                        <div className="student-box" key={idx}>
                            <div className="student-card">
                            <div className="crd">
                                
                               <span className="stu stud-name"><span className="txt"></span>{teach.TeacherName}</span>
                               <span className="stu c"><span className="txt">Dept : </span>{teach.Department}</span>
                               <span className="stu c"><span className="txt">Experience: </span>{teach.Experience}</span>
                               <span className="stu c"><span className="txt">Salary : </span>{teach.Salary}</span>
                               <span className="stu c"><span className="txt">mail : </span>{teach.Email}</span>
                               <span className="stu c"><span className="txt">Address : </span>{teach.Address}</span>

                               <span className="stu b"> 
                               <button className="btn btn1">Edit</button>
                                <button className="btn btn2">Delete</button>
                        
                               </span>
                                
                                </div>
                               
                                
                          
                            </div>
                            </div>
                   ) )}
                </div>

            </div>
          
        </BaseApp>
    )

}
 