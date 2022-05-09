// Main page operations -> form -> validate and Add data
// get inputfields
// f validate(adddata-callback or promise)
//f() adddata{json} 
/*---------------------------------------------------------------*/
const dataInput = document.querySelectorAll(".inputs")
const submitbtn = document.getElementById("subbtn");
submitbtn.addEventListener('click', submitData)
function submitData(e){
    userData = {
        displayData : function(){
            console.log(`${this.ename},${this.id},${this.role}`);
        }
    };
    // e.preventDefault();
    const empName = dataInput[0];
    const empId = dataInput[1];
    const role = dataInput[2];
    userData.ename = empName.value;
    userData.id = empId.value;
    userData.role = role.value;
    alert("Details" + userData.displayData() + "added succesfully");
    
}
