import React, {useState} from "react";
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Button,
    Form,
    Container,
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({addTodos}) =>{
    const [todoString, setTodoString] = useState("");


    const handleSubmit = e =>{
        e.preventDefault()
        if (todoString === ""){
            return alert ("Please fill some value")
        }
        const todo = {
           todoString,
           id:v4() 
        }

        //Todo:

        addTodos(todo)

        setTodoString("")
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input type="text"
                    name="todo"
                    id="todo"
                    placeholder="Enter a todo string"
                    value={todoString}
                    onChange={e=> setTodoString(e.target.value)}
                />
                    <InputGroupText addonType="prepend">
                        <Button color="success">
                            Add TOdo
                        </Button>
                    </InputGroupText>
                </InputGroup>   
            </FormGroup>
        </Form>
    )
}

export default TodoForm;