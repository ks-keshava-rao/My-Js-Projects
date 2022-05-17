const msg = document.getElementById("msg")
const btn = document.getElementById("btn").addEventListener("click", render)
async function getdata() {
    let response = await fetch('https://httpbin.org/get?name=yash')
    let data = await response.json();
    return data;
}
function render() {
    getdata().then((data) => {
        console.log(data.args)
    })
}