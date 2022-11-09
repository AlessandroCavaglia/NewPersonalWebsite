
let active_id='home'
const allProjects=['1','2','3','4']
const projectsCat=['backend architecture','frontend','data&ai','misc']

let projects=['1','2','3','4']
let activeProject='1'
let activeProjectId=0
let filter=null;

let checkbox=null
document.addEventListener("DOMContentLoaded", function() {
    checkbox=document.getElementById("hiddenNavCheckBox");
});

function setFilter(new_filter){
    let validProjects=[]
    let new_filterObject=document.getElementById("filter-"+new_filter);
    let old_filterObject=document.getElementById("filter-"+filter);
    if(filter===new_filter){
        filter=null
        new_filterObject.classList.remove("active")
    }else{
        filter=new_filter
        new_filterObject.classList.add("active")
        if(old_filterObject!=null)
            old_filterObject.classList.remove("active")
    }
    for(let i=0;i<allProjects.length;i++){
        let id=allProjects[i]
        let proj=document.getElementById("proj-"+id);
        let proj_detail=document.getElementById("proj-detail-"+id);
        let proj_dot=document.getElementById("dot-"+id);
        let proj_card=document.getElementById("project-card-"+id);
        if(projectsCat[i].includes(filter) || filter===null){
            validProjects.push(allProjects[i])
            proj.classList.remove("active")
            proj_detail.classList.remove("active")
            proj_dot.classList.remove("active")
            proj_card.classList.remove("active")
            proj_card.classList.add("disabled")
            proj_dot.classList.remove("disabled")
        }else{
            proj.classList.remove("active")
            proj_detail.classList.remove("active")
            proj_dot.classList.remove("active")
            proj_card.classList.remove("active")
            proj.classList.add("disabled")
            proj_detail.classList.add("disabled")
            proj_dot.classList.add("disabled")
            proj_card.classList.add("disabled")
        }
    }
    projects=validProjects;
    activeProject=null;
    setActiveProject(projects[0])
}

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
    let active_proj_card=document.getElementById("project-card-"+activeProject);
    if(activeProject!=null){
        active_proj.classList.remove("active")
        active_proj_detail.classList.remove("active")
        active_proj_dot.classList.remove("active")
        active_proj_card.classList.add("disabled")
    }
    let new_proj=document.getElementById("proj-"+id);
    let new_proj_detail=document.getElementById("proj-detail-"+id);
    let new_proj_dot=document.getElementById("dot-"+id);
    let new_proj_card=document.getElementById("project-card-"+id);

    new_proj.classList.add("active")
    new_proj_detail.classList.add("active")
    new_proj_dot.classList.add("active")
    new_proj_dot.classList.remove("disabled")
    new_proj_card.classList.remove("disabled")

    activeProject=id;
    activeProjectId=projects.indexOf(id);
    updateProjectsVisibility();
}

function moveToNextProject(){
    if(activeProjectId===projects.length-1){
        return
    }
    setActiveProject(projects[activeProjectId+1])
}

function moveToPreviousProject(){
    if(activeProjectId===0){
        return
    }
    setActiveProject(projects[activeProjectId-1])
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