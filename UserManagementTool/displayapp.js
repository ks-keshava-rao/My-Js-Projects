// fetchedData=undefined;
let referenceindex = undefined;
let newarray = undefined;
let state = false;
const erasebtn = document.getElementById("clearbtn");
erasebtn.addEventListener("click", cleardb);
const updatabtn = document.getElementById('update')
    .addEventListener('click', () => {
        if (state == false) {
            alert("only used to edit data")
        }
        else if (state == true) {
            updatedata();
        }
    });
const uname = document.getElementById("uname");
const uid = document.getElementById("uid");
const urole = document.getElementById("urole");
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
function deletedata(elementindex, disp = true) {
    const storedata = getAlldata();
    storedata.then((alldata) => {
        alldata.splice(elementindex, 1)
        setdata(alldata);
        if (disp) {
            alert("Data deleted succesfully from database");
        }
        location.reload();
    }).catch((error) => {
        console.error(error);
    })
}
function setdata(newdata) {
    localStorage.setItem('DataBase', JSON.stringify(newdata));
}
function editdata(index) {
    state = true;
    getAlldata().then(function (datafetched) {
        referenceindex = index;
        newarray = datafetched;
        // console.log(datafetched[index].ename);
        uname.value = datafetched[index].ename;
        uid.value = datafetched[index].id;
        urole.value = datafetched[index].role;
    })
}
function uvalidate(empName, empId, role) {
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
function updatedata() {
    const newUdata = {}
    if (uvalidate(uname, uid, urole)) {
        newUdata.ename = uname.value;
        newUdata.id = uid.value;
        newUdata.role = urole.value;
        newarray.push(newUdata);
        setdata(newarray);
        deletedata(referenceindex, false);
        location.reload();
    }
    else {
        alert("Data not updated");
    }
}
/* Date - 11-May-2022  */