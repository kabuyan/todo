import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './TodoForm.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            newTodo: ''
        };
    }

    handleChange(e){
        this.setState({newTodo : e.target.value});
    }

    addTodo(){
        if(this.state.newTodo==='') return;
        const todos=JSON.parse(localStorage.getItem('todos'))||[];
        todos.push(this.state.newTodo);
        localStorage.setItem('todos',JSON.stringify(todos));
        this.setState({newTodo:''});
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to="/" className="toolbar-left">
                            <ArrowBackIcon style={{color:'white'}}/>
                        </Link>
                        <Typography variant="title" color="inherit" className="toolbar-center">My Todo</Typography>
                    </Toolbar>
                </AppBar>
                <Card>
                    <CardContent>
                        <TextField value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="Input here" className="input-field"/>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={this.addTodo.bind(this)}>ADD</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default TodoForm;