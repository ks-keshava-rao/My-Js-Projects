// fetchedData=undefined;
erasebtn = document.getElementById("clearbtn");
erasebtn.addEventListener("click", cleardb);

function cleardb() {

    if (localStorage.length == 0) {
        alert('Database is already clear')
    }
    else {
        let result = confirm("Do you want to wipeout all the data?");
        if (result) {
            localStorage.clear();
            location.reload();
            alert("Database cleared successfully");
        }
        else {
            alert("Databse not cleared");
        }
    }
}
function displaydata(tabdata) {
    let str = "";
    let count = 0;
    // let len = tabdata.length;
    console.log(tabdata);
    tabdata.forEach(function (info) {
        str = str + `<tr>
        <td>${info.ename}</td>
        <td>${info.id}</td>
        <td>${info.role}</td>
        <td><button id="edit" class="btn btn-hero" onclick="editdata(${count})">edit</button></td>
        <td><button id="delete" class="btn btn-hero" onclick="deletedata(${count})">Delete</button></td>
        </tr>`
        count++;
    })
    document.getElementById('tabody').innerHTML = str;

}
async function getAlldata() {
    if (localStorage.length == 0) {
        alert("No data Availible");
        return;
    }
    else {
        let fetchedData = await JSON.parse(localStorage.getItem('DataBase'));
        return fetchedData;
    }
}
if (localStorage.length != 0) {
    let data = getAlldata();
    data.then(function (fetchedData) {
        console.log(fetchedData);
        displaydata(fetchedData);
    }).catch(function (errors) {
        console.error(errors);
    });
}
function deletedata(elementindex){
    storedata = getAlldata();
    storedata.then((alldata)=>{
        alldata.splice(elementindex,1)
        setdata(alldata);
        alert("Data deleted succesfully from database")
        location.reload();
    }).catch((error)=>{
        console.error(error);
    })
}
function setdata(newdata){
    localStorage.setItem('DataBase',JSON.stringify(newdata));
}
