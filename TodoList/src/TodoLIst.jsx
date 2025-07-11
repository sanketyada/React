import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoLIst() {
    const [task,setTask] = useState([{uniquetask:'Sample Task',id:uuidv4()}]);
    const [inputValue,setInputValue] = useState('');
    let handleInput = (event)=>{
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }
    let addTask = ()=>{
        setTask((prevValue)=>{
            return [...prevValue,{uniquetask:inputValue,id:uuidv4()}]
        })
        setInputValue(''); 
    }
    let handleClick = (id)=>{
        // let copy=task.filter((indiTask)=>(indiTask.id != id));
        // setTask(copy)
        setTask((prevTask)=>{
            return task.filter((indiTask)=>(indiTask.id != id))
        })
    }
    let handleUpperCase =()=>{
        let newObjectdata = task.map((individualTask)=>{
            return {
                ...individualTask ,
                uniquetask:individualTask.uniquetask.toUpperCase()
            }

        })
        setTask(newObjectdata)
    }
    let handleUpperCaseOne =(id)=>{
       let copy= task.map((each)=>{
            if(each.id ==id){
                return{
                ...each,
                uniquetask:each.uniquetask.toUpperCase(),
                }
            }
            else{
                return each;
            }
        })
        console.log(copy)
        setTask(copy)
    }
  return (
    <div>
      <h1>Todo List App.</h1>
      <input value={inputValue} type="text" placeholder='Enter Your Task' onChange={handleInput}/>
      <br />
      <br />
      <button onClick={addTask}>Add Task</button>
      <h3>Tasks to Do</h3>
      <hr />
      <ul>
        {
            task.map((element)=>(
                <li key={element.id}>
                    <span>{element.uniquetask}</span>
                    <button onClick={()=>handleClick(element.id)}>Delete</button>
                    &nbsp;
                    <button onClick={()=>handleUpperCaseOne(element.id)}>UpperCase</button>
                </li>
            ))
        }
      </ul>
      <button onClick={handleUpperCase}>UpperCaseAll</button>
    </div>
  )
}

export default TodoLIst
