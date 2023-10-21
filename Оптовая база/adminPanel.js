'use strict';

let obj = {
    user1:{id:1,userName:"Ivan1", lastName:"Ivanov1", ball:4},
    user1:{id:2,userName:"Ivan2", lastName:"Ivanov2", ball:5},
    user1:{id:3,userName:"Ivan3", lastName:"Ivanov3", ball:3},
    user1:{id:4,userName:"Ivan4", lastName:"Ivanov4", ball:4},
}

document.body.onload=function(){
    let table=document.createElement("table")
    for (const key in obj) {
        let tr = document.createElement("tr")
            tr.innerHTML=`  <td>${obj[key].id}</td>
                            <td>${obj[key].userName}</td>
                            <td>${obj[key].lastName}</td>
                            <td>${obj[key].ball}</td>`;
        //table += tr;
    }
    //console.log(table);
}

function editForm(){
    //SOMETHING WILL BE HERE
    //
    //
    //
    //
    this.removeEventListener("click", editForm)
    for (let i = 0; i < 5; i++)
        this.cells[i].setAttribute("contenteditable", "true");
    let btn = document.createElement("input");
    btn.value = "save";
    btn.type = "button";
    btn.addEventListener("click", saveForm);
    this.cells[4].appendChild(btn);
}



function saveForm(){
    let tr = this.parentElemnt.parentElement;
    for (let i = 0; i < 5; i++)
        tr.cells[i].setAttribute("contenteditable", "false");
    this.remove();
}