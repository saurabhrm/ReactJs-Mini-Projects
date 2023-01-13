import React, { useContext, useState } from "react";

import {FormGroup, Input, Button, Form, InputGroup, InputGroupAddon } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/Action.type";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

        const handleSubmit = e => {
           e.preventDefault();
           if(todoString === ""){
            return alert ("Please Enter a Todo");
           }

           const todo = {
            todoString,
            id: v4()
           }
           dispatch({
            type: ADD_TODO,
            payload: todo
           })

           setTodoString("")
        }




    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input type="text" name="todo" id="todo" placeholder="Your next Todo" value={todoString} onChange={e => setTodoString(e.target.value)}/>
                <InputGroupAddon addonType = "prepend">
                <Button color="warning"
                
                >
                    Add
                </Button>
                </InputGroupAddon>
                </InputGroup>
               
            </FormGroup>
        </Form>
    )
};

export default TodoForm