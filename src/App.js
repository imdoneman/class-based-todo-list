import react, {Component} from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'shani',
      toDoItems: [
        {action:'Buy milk' , done: false},
        {action: 'dentist at 5pm' , done: false},
        {action: 'startup opening', done: false},
      ],
      newToDo:'',
    }
  }

  // changeStateData = () => {
  //   this.setState({
  //     userName : this.state.userName === 'shani'? 'majumdar' : 'shani',
  //   });
  // };

  toDoRows = () => 
    this.state.toDoItems.map(item =>
      (
        <tr key={item.action}>
          <td>{item.action}</td>
          <td>
            <input type='checkbox' checked={item.done} onChange={()=>this.toggleDone(item)}/>
          </td>
        </tr>
      )
    );
  
  updateValue = (event) => {
    this.setState({newToDo: event.target.value });
  };
  addToList = () => {
    this.setState({
      toDoItems:[
        ...this.state.toDoItems,
        {action: this.state.newToDo, done: false}
      ]
    })
  };

  toggleDone = (todo) => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => item.action === todo.action ? {...item, done: !item.done}: item),
    })
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">To Do List</h2>
          <p>{this.state.userName}</p>
          {/* <button className="btn btn-secondary m-2" onClick={this.changeStateData}>Change</button> */}
        </div>
        <div className="col-12">
          <input className="form-control" value={this.state.newToDo} onChange={this.updateValue}/>
          <button className="btn btn-primary" onClick={this.addToList}>Add</button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.toDoRows()}</tbody>
          </table>
        </div>        
      </div>
    </div>
    
  );
}