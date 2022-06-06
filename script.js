import patient from "./patients"
let inputname, out, mybutton, patientList = [];
let innitUI = () =>{
    inputname = document.getElementById("inputname")
    mybutton = document.getElementById("mybutton")
    out       = document.getElementById("out")
    let createst = () => {
        let patient2 = new patient(
            inputname.value,[])
            return patient2
}
let addtolist = () => {
    let st=createst();
    patientList.push(ps)
    paint();
}
let paint = ()=> {
    let list = patientList.map(ps => `<tr><td>${ps.NAME}</td><td>${ps.AGE}</td><td>${ps.DISEASE}</td></tr>`)
    out.innerHTML = list.join("")
    paint();
}
mybutton.addEventListener("click", () =>{
    if(inputname.value==""){
        alert('input name')
    }else{
        addtolist()
    }
})
}
self.addEventListener("load", innitUI)