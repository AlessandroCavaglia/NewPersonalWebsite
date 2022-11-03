
let active_id='home'

let checkbox=null
document.addEventListener("DOMContentLoaded", function() {
    checkbox=document.getElementById("hiddenNavCheckBox");
});


function changeSection(id){
    if(id!==active_id){
        let active_elem=document.getElementById(active_id);
        let selected_elem=document.getElementById(id);

        active_elem.classList.add("hidden")
        selected_elem.classList.remove("hidden")
        active_id=id
    }
    checkbox.checked=false;
}