import React from "react";
import { useHistory } from "react-router-dom";


export default function BaseApp({title,styles,children}){
    const history =useHistory();
    return (
        <div className="con">

         <div>
            <div className="dashboard">
                <button onClick={()=>history.push("/")}>Dashboard</button>
                <button onClick={()=>history.push("/dashboard/students")}>Students-Details</button>
                <button onClick={()=>history.push("/dashboard/teachers")}> Teachers-Details</button>
            </div>

        <div className="title">{title}</div>

        </div>
        <div>{children}</div>
       

        <footer id="footer">
            <span>Contact : 7852174782</span>
            <span>E-mail : practice@gmail.com</span>
        </footer>

        </div>
    )
}