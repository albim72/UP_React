import React, {Component} from "react";
import {TodoBanner} from "./TodoBanner";
import {TodoCreator} from "./TodoCreator";
import {TodoRow} from "./TodoRow";
import {VisibilityControl} from "./VisibilityControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      todoItems: [{action:"Kupić kwiaty", done: false},
        {action:"posprzątać mieszczkanie", done: false},
        {action:"Zrobić trening", done: false},
        {action:"Zadwonić do szefa", done: false}],
      showCompleted:true
    }
  }
  
  updateNewText = (event) => {
    this.setState({newItemTeskt:event.target.value});
  }
  
  createNewTodo = (task) => {
    if(!this.state.todoItems.find(item => item.action === task)){
      this.setState({
        todoItems:[...this.state.todoItems, {action: task,done:false}]
      }, () => localStorage.setItem("todos",JSON.stringify(this.state)))
    }
  }
  
  toogleTodo = (todo) => this.setState({
    todoItems:
    this.state.todoItems.map(item => item.action === todo.action
    ? {...item, done: !item.done}:item)
  });
}
