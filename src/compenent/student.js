
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom";




export default function StudentsDetails({Studdata, setStuddata}){
    const history=useHistory();
  
    return(
        <BaseApp 

        title="Students-Details">
            <div className="student-container">
                <div>
                    {Studdata.map((student,idx)=>(

                        <div className="student-box" key={idx}>
                            <div className="student-card">
                            <div className="crd">
                                
                               <span className="stu stud-name"><span className="txt"></span>{student.StudentName}</span>
                               <span className="stu c"><span className="txt">RegisterNo : </span>{student.RegNo}</span>
                               <span className="stu c"><span className="txt">Class : </span>{student.Class}</span>
                               <span className="stu c"><span className="txt">Course : </span>{student.Course}</span>
                               <span className="stu c"><span className="txt">Activity : </span>{student.Activity}</span>
                               <span className="stu c"><span className="txt">Address : </span>{student.Address}</span>

                               <span className="stu b"> 
                               <button onClick={()=>history.push("/dashboard/editstudent")} className="btn btn1">Edit</button>
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