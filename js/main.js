
let active_id='home'

let projects=['1','2','3','4']
let activeProject='1'
let activeProjectId=0

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

function setActiveProject(id){
    if(id===activeProject){
        return
    }
    let active_proj=document.getElementById("proj-"+activeProject);
    let active_proj_detail=document.getElementById("proj-detail-"+activeProject);
    let active_proj_dot=document.getElementById("dot-"+activeProject);

    let new_proj=document.getElementById("proj-"+id);
    let new_proj_detail=document.getElementById("proj-detail-"+id);
    let new_proj_dot=document.getElementById("dot-"+id);

    active_proj.classList.remove("active")
    active_proj_detail.classList.remove("active")
    active_proj_dot.classList.remove("active")

    new_proj.classList.add("active")
    new_proj_detail.classList.add("active")
    new_proj_dot.classList.add("active")

    activeProject=id;
    activeProjectId=projects.indexOf(id);
    updateProjectsVisibility();
}

function moveToNextProject(){
    if(activeProjectId===projects.length-1){
        return
    }
    const id=projects[activeProjectId+1]
    let active_proj=document.getElementById("proj-"+activeProject);
    let active_proj_detail=document.getElementById("proj-detail-"+activeProject);
    let active_proj_dot=document.getElementById("dot-"+activeProject);

    let new_proj=document.getElementById("proj-"+id);
    let new_proj_detail=document.getElementById("proj-detail-"+id);
    let new_proj_dot=document.getElementById("dot-"+id);

    active_proj.classList.remove("active")
    active_proj_detail.classList.remove("active")
    active_proj_dot.classList.remove("active")

    new_proj.classList.add("active")
    new_proj_detail.classList.add("active")
    new_proj_dot.classList.add("active")

    activeProject=id;
    activeProjectId=projects.indexOf(id);
    updateProjectsVisibility();
}

function moveToPreviousProject(){
    if(activeProjectId===0){
        return
    }
    const id=projects[activeProjectId-1]
    let active_proj=document.getElementById("proj-"+activeProject);
    let active_proj_detail=document.getElementById("proj-detail-"+activeProject);
    let active_proj_dot=document.getElementById("dot-"+activeProject);

    let new_proj=document.getElementById("proj-"+id);
    let new_proj_detail=document.getElementById("proj-detail-"+id);
    let new_proj_dot=document.getElementById("dot-"+id);

    active_proj.classList.remove("active")
    active_proj_detail.classList.remove("active")
    active_proj_dot.classList.remove("active")

    new_proj.classList.add("active")
    new_proj_detail.classList.add("active")
    new_proj_dot.classList.add("active")

    activeProject=id;
    activeProjectId=projects.indexOf(id);
    updateProjectsVisibility();
}

function updateProjectsVisibility(){
    for(let i=0;i<projects.length;i++){
        let proj=document.getElementById("proj-"+projects[i]);
        let proj_detail=document.getElementById("proj-detail-"+projects[i]);
        if(Math.abs(activeProjectId-i)>1){
            if(!proj.classList.contains("disabled")){
                proj.classList.add("disabled")
                proj_detail.classList.add("disabled")
            }
        }else{
            if(proj.classList.contains("disabled")){
                proj.classList.remove("disabled")
                proj_detail.classList.remove("disabled")
            }
        }
    }
}