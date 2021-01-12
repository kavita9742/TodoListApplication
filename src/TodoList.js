import React,{Component} from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
         items:[]
        };  
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e)
    {
      if(this._inputelement.value!=='')
      {
        var newelement=
        {
           text: this._inputelement.value,
           key: Date.now()
        };

        this.setState((prevState)=>{
            return{
                items:prevState.items.concat(newelement)
            };
        }
        );
        this._inputelement.value=" ";
        console.log(this.state.items);
        e.preventDefault();
      }
    }

    deleteItem(key)
    {
        // alert("deleted");
       var filteredItem=this.state.items.filter(function(item){
        return (item.key!==key)
        });

        this.setState({items:filteredItem});
        
    }
    render()
    {
        return(
          <div className="todoListMain">
             <div className="header">
                 <form onSubmit={this.addItem}>
                     <input ref={(a)=>this._inputelement=a}
                     placeholder="enter task"></input>
                     <button type="submit">Add</button>
                 </form>
             </div>
             <TodoItems entries={this.state.items}
                 delete={this.deleteItem}
             />
          </div>
        );
    }
}

export default TodoList;