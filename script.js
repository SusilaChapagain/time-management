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
let total;

        
    
    
const handleOnSubmit =(e)=>{
    
    const frmData = new FormData(e);

    const task = frmData.get("task");
    const hr = +frmData.get("hr");

    if (hr<1){
        return alert ("Please enter a positive number")
    }

    const ttlBadHrs = totalBadHours()
    const total = taskList.reduce((subttl, item)=> subttl + item.hr, 0) +hr;
   if (ttlBadHrs+total >hrPerWeak){
       return alert("You have exceeded the maximum hours per week")
   }

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
                                            <button class="btn btn-sm" onclick="markAsNotToDo(${i})">
                                                <i class="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </td>

                                        
                                    </tr>
        `
    })
document.getElementById("task-list").innerHTML = str
    
}
const displayBadList =() =>{
    // console.log(taskList, "from display");
    let str = "";
    badList.map((item, i) =>{
        str +=`
        <tr>
                                        <td>
                                            <input type="checkbox" name="" id="">
                                            ${item.task}
                                        </td>

                                        <td>${item.hr}</td>
                                        <td class="text-end">
                                            <button class="btn-danger" onclick="deleteBadItem(${i})">
                                                <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button class="btn btn-sm" onclick ="markAsToDo(${i})">
                                                <i class="fa-solid fa-arrow-left"></i>
                                            </button>
                                        </td>

                                        
                                    </tr>
        `
    })
document.getElementById("bad-list").innerHTML = str
    
}

const deleteBadItem = i =>{
    if (!confirm("Are you sure you want to delete this item ?")){
        return;
    }
    badList.splice(i, 1);
    displayBadList();
    totalHours();
    totalBadHours();
};

const totalHours = () =>{
    const total = taskList.reduce((subttl, item)=> subttl + item.hr, 0);
    const ttlBdHr = totalBadHours()
    const ttlHrs = total + ttlBdHr
        
       document.getElementById("totalHours").innerHTML = ttlHrs;
    
    };

const deleteItem = i =>{
    if (!confirm("Are you sure you want to delete this item ?")){
        return;
    }
    taskList.splice(i, 1)
    display()
    totalHours()
}

const totalBadHours = ()=>{

const total = badList.reduce((subttl, item)=> subttl + item.hr, 0);
     
     document.getElementById("totalBadHours").innerText = total;
return total
};


const markAsNotToDo = i => {

    const itm = taskList.splice(i, 1);
    display();
    badList.push(itm[0]);
    displayBadList(); 
    totalBadHours();
}
const markAsToDo = i => {

    const itm = badList.splice(i, 1);
    displayBadList();

    taskList.push(itm[0]);
    console.log(taskList, i);
    display(); 
    totalHours();
}