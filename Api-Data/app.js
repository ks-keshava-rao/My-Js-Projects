let database =[];
let state = false;
let referenceindex = undefined;
document.getElementById("trigger")
.addEventListener("click",render)
document.getElementById('update')
.addEventListener('click',function(){
    if(state==false){
        alert("Click on edit button to edit data")
    }
    else if(state==true){
        submitdata();
    }
});
const ulogin = document.getElementById("uname");
const uid = document.getElementById("uid");
const unodeid = document.getElementById("nodeid");

async function fetchdata(){
    response = await fetch("https://api.github.com/users");
    data = await response.json();
    return data;
}
function render(){
    fetchdata().then((data)=>{
        database = [...data];
        console.table(data);
        console.table(database);
        filltable(database);
    }).catch((err)=>{
        console.error(err);
    })
}
function filltable(tabdata){
    let count = 0 ,sno=1;
    let str = ""
    tabdata.forEach(info => {
        str = str + `<tr>
        <td>${info.login}</td>
        <td>${info.id}</td>
        <td>${info.node_id}</td>
        <td><button id="edit" class="btn btn-hero" onclick="editdata(${count})">edit</button></td>
        <td><button id="delete" class="btn btn-hero" onclick="deletedata(${count})">Delete</button></td>
        </tr>`
        count++;
        sno++;
    });
    document.getElementById('tabody').innerHTML = str;
}
function editdata(eindex){
    state= true;
    ulogin.value = database[eindex].login;
    uid.value = database[eindex].id;
    unodeid.value = database[eindex].node_id;
    referenceindex = eindex;
}
function deletedata(dindex){
    database.splice(dindex,1);
    filltable(database);
}
function submitdata(){
   database[referenceindex].login = ulogin.value;
   database[referenceindex].id = uid.value;
   database[referenceindex].node_id = unodeid.value;
   filltable(database);
   alert("data edited successfully")
   state = false;
}

