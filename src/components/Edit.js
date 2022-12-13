import React, {useState, useEffect} from "react";
import {Button, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import {v4 as uuid} from "uuid"
import {Link, useNavigate} from 'react-router-dom'

function Edit() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [className, setClassName] = useState("");
    const [marks, setMarks] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index =  Students.map(function(e) {
        return e.id
      }).indexOf(id);

      const handleSubmit= (e) => {
        e.preventDefault();

       let a = Students[index];
       a.name = name;
       a.age = age;
       a.class = className;
       a.marks = marks

       history("/")
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setClassName(localStorage.getItem('class'));
        setMarks(localStorage.getItem('marks'));
        setId(localStorage.getItem('id'));
    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(event)=> setName(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age"  value={age} required onChange={(event)=> setAge(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formClass">
                    <Form.Control type="text" placeholder="Enter Class Name" value={className} required onChange={(event)=> setClassName(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMarks">
                    <Form.Control type="text" placeholder="Enter Marks in Percentage"  value={marks} required onChange={(event)=> setMarks(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e)=> handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}

export default Edit;
