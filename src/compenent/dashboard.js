import React from "react";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom";

export default function Dashboard(){
    const history=useHistory();
    return(
        <BaseApp
        
        title="Students-Details / Teachers-Details">
            <div className="cards"> 
                <button onClick={()=>history.push("/dashboard/students")} className="card1  dashboard-card">Student-Details</button>
                
                <button onClick={()=>history.push("/dashboard/teachers")} className="card2  dashboard-card">Teacher-Details</button>
            </div>
       
        </BaseApp>
    )
}