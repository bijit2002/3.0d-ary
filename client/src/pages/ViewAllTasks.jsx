import {useState,useEffect} from "react";
import Navigation from "../components/Navigation";
const ViewAllTasks =()=>{
    const [taskList,setTaskList]=useState([])

    useEffect(()=>{
      const allTasks = async()=>{
        try{
            const res = await fetch("https://todo-web3-1.onrender.com/api/ethereum/view-all-task",{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            })
            const data = await res.json();
            if(data.status===200){
                console.log(data.taskList)
                setTaskList(data.taskList)
            }
        }catch(error){
            console.error(error)
        }
      }
      allTasks();
    },[])
    return<>
      <Navigation/>
      <div className="view_all_tasks">
      {taskList.map((task)=>{
        return(
            <div 
            className="view_all_tasks_card"
            key={task.id}
            style={task.id!=="" && task.name!=="" && task.date!=="" ? {} : {display:"none"}}
            >   
                <p><strong>ID: </strong>{task.taskId}</p>
                <p><strong>Event: </strong>{task.name}</p>
                <p><strong>Date: </strong>{task.date}</p>
            </div>
        )
      })}
      </div>
    </>
}
export default ViewAllTasks;
