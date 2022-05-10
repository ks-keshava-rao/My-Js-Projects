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
            alert("Database cleared successfully");
        }
        else {
            alert("Databse not cleared")
        }
    }
}
async function getAlldata() {
    if (localStorage.length == 0) {
        console.log("No data Availible");
    }
    else {
        fetchedData = await JSON.parse(localStorage.getItem('DataBase'));
    }
    return fetchedData;
}
data = getAlldata();
data.then(function(){
    console.log(fetchedData);
}).catch(function(errors){
    console.error(errors);
});