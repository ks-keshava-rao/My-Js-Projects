// Main page operations -> form -> validate and Add data
// get inputfields
// f validate(adddata-callback or promise)
//f() adddata{json} 
/*---------------------------------------------------------------*/
const dataInput = document.querySelectorAll(".inputs")
const submitbtn = document.getElementById("subbtn");
submitbtn.addEventListener('click', submitData)
const method = {
    displayData : function(){
        return(`${this.ename},${this.id},${this.role}`);
    },
    convertToArray: function(){
        return [this];
    }
} 
function submitData(e){
    userData = {};
    // e.preventDefault();
    const empName = dataInput[0];
    const empId = dataInput[1];
    const role = dataInput[2];
    userData.ename = empName.value;
    userData.id = empId.value;
    userData.role = role.value;
    let displaydata = method.displayData.call(userData);
    let dataArray = method.convertToArray.call(userData);
    // console.log(dataArray);
    
    alert(`Details" ${displaydata}  "added succesfully`);
}
