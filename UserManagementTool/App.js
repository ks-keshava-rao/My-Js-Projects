// Main page operations -> form -> validate and Add data
// get inputfields
// f validate(adddata-callback or promise)
//f() adddata{json} 
/*---------------------------------------------------------------*/
const dataInput = document.querySelectorAll(".inputs")
const submitbtn = document.getElementById("subbtn");
submitbtn.addEventListener('click', submitData)
let dataArray = [];
const method = {
    displayData: function () {
        return (`${this.ename},${this.id},${this.role}`);
    },
    convertToArray: function () {
        return [this];
    },
}
function validate(empName, empId, role) {
    if (empName.value == null || empName.value == "") {
        alert("Name cannot be blank");
        return false;
    }
    else if (empId.value == "" || empId.value == null) {
        alert("ID cannot be empty");
        return false;
    }
    else if (role.value == "" || role.value == null) {
        alert("role cannot be empty");
        return false;
    }
    else {
        return true;
    }
}
function submitData(e) {
    e.preventDefault();
    userData = {};
    const empName = dataInput[0];
    const empId = dataInput[1];
    const role = dataInput[2];
    if (validate(empName, empId, role)) {
        userData.ename = empName.value;
        userData.id = empId.value;
        userData.role = role.value;
        let displaydata = method.displayData.call(userData);
        alert(`Details ${displaydata} added succesfully`);
        dataArray.push(userData);
        console.log(dataArray);
        setData();
    }
    else {
        alert("data not updated")
    }
}
function setData(){
    localStorage.setItem('DataBase',JSON.stringify(dataArray));
}
