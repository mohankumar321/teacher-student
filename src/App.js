import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './compenent/dashboard';
import StudentsDetails from './compenent/student';
import { useState } from 'react';
import { Studentsdata, Teachersdata } from './Data/data';
import TeachersDetails from './compenent/teacher';
import EditStudents from './compenent/editstudent';


function App() {

  const [Studdata,setStuddata]=useState(Studentsdata);
  const [teacher,setTeacher]=useState(Teachersdata)
  return (



    <div className="App">

      <Switch>

        <Route  exact path="/"><Dashboard/></Route>

       <Route path="/dashboard/students"><StudentsDetails
       Studdata={Studdata}
       setStuddata={setStuddata}/></Route>

<Route path="/dashboard/teachers"><TeachersDetails
      teacher={teacher}
       setTeacher={setTeacher}/></Route>

      </Switch>




    </div>
  );
}

export default App;
