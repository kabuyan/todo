import React, { Component } from 'react';

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';

import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[]
        };
    }

    componentDidMount(){
        const todos=JSON.parse(localStorage.getItem('todos'))||[];
        this.setState({todos : todos});
    }

    addTodo(){
        this.props.history.push('/todos/add');
    }

    deleteTodo(i){
        const todos=this.state.todos;
        todos.splice(i,1);
        this.setState({todos:todos});
        localStorage.setItem('todos',JSON.stringify(this.state.todos));
    }

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div className="toolbar-left"></div>
                        <Typography variant="title" color="inherit" className="toolbar-center">My Todo</Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    {
                        this.state.todos.map((todo,i) => {
                            return (
                                <div>
                                    <ListItem key={i}>
                                        <ListItemText>{todo}</ListItemText>
                                        <IconButton aria-label="Delete" onClick={this.deleteTodo.bind(this,i)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ListItem>
                                    <Divider/>
                                </div>
                            )
                        })
                    }
                </List>

                <div className="bottom-right">
                    <Button variant="fab" color="primary" aria-label="Add" onClick={this.addTodo.bind(this)}>
                        <AddIcon/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default TodoList;