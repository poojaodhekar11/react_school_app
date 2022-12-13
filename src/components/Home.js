import React, { Fragment } from "react";
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import {Link, useNavigate} from 'react-router-dom'

function Home() {

  let history = useNavigate();

  const handleDelete = (id) => {
    var index =  Students.map(function(e) {
      return e.id
    }).indexOf(id);

    Students.splice(index, 1);
    history('/');
  }

  const handleEdit = (id, name, age, className, marks) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('class', className);
    localStorage.setItem('marks', marks);
  }
  
  return (
    <Fragment>
      <div style={{margin:"10rem"}}> 
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              Students && Students.length > 0 ?
              Students.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
                  <td>{item.marks}</td>
                  <td>
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                    &nbsp;
                    <Link to='/edit'>
                    <Button onClick={() => handleEdit(item.id, item.name, item.age, item.class, item.marks)}>Edit</Button>
                    </Link>
                  </td>
                </tr>
              )})
              :
              "No data available"
            }
          </tbody>
        </Table>
        <br/>
        <Link to="/create" className="d-grid gap-2">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Home;
