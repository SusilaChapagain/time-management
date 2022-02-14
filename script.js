// creat an array to store the tasks and hours
// loop the array and display under task list
// calculate total hours
// creata another list array
// total the hr of bad list

// delete the task and re-calculate the hours
// take task from list to bad list and vs.


const taskList = []
const badList = []
const hrPerWeak = 168

const handleOnSubmit =(e)=>{
    const frmData = new FormData(e);

    const task = frmData.get("task");
    const hr = +frmData.get("hr");

    const obj = {
        task,
        hr,
    };
   taskList.push(obj);
  display();
  totalHours()
   
};
const display =() =>{
    // console.log(taskList, "from display");
    let str = "";
    taskList.map((item, i) =>{
        str +=`
        <tr>
                                        <td>
                                            <input type="checkbox" name="" id="">
                                            ${item.task}
                                        </td>

                                        <td>${item.hr}</td>
                                        <td class="text-end">
                                            <button class="btn-danger" onclick="deleteItem(${i})">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <butten class="btn btn-sm ">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </butten>
                                        </td>

                                        
                                    </tr>
        `
    })
document.getElementById("task-list").innerHTML = str
    
}

const deleteItem = i =>{

    taskList.splice(i, 1);
    display();
    totalHours();
};
const totalHours = () =>{
const total = taskList.reduce((subttl, item)=> subttl + item.hr, 0);
    console.log(total);
    const totalHours = document.getElementById("totalHours").innerHTML = total;

};


