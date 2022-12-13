import React, {useState} from "react";
import {Button, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import {v4 as uuid} from "uuid"
import {Link, useNavigate} from 'react-router-dom'

function Add() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [className, setClassName] = useState("");
    const [marks, setMarks] = useState("");

    let history = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();

        const id = uuid();
        let uniqueId = id.slice(0, 8);

        let a = name,
        b = age,
        c = className,
        d = marks

        Students.push({id:uniqueId, name: a, age:b, class: c, marks:d });

        history("/")
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(event)=> setName(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(event)=> setAge(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formClass">
                    <Form.Control type="text" placeholder="Enter Class Name" required onChange={(event)=> setClassName(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMarks">
                    <Form.Control type="text" placeholder="Enter Marks in Percentage" required onChange={(event)=> setMarks(event.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" onClick={(e)=> handleSubmit(e)}>Submit</Button>
            </Form>
        </div>
    )
}

export default Add;
