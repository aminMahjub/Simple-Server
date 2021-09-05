(()=>{"use strict";new class{constructor(t,e){this.view=t,this.model=e,this.view.bindAddBtn(this.handleBindAddBtn),this.model.bindRenderPage(this.handleRenderPage),this.view.bindCompleteBtn(this.handleCompleteTask),this.view.bindDeleteBtn(this.handleDeleteTask),this.view.bindEditBtn(this.handleEditTask),this.view.bindFilterTask(this.handleFilterTasks)}handleBindAddBtn=t=>{this.model.addData(t)};handleRenderPage=t=>{this.view.renderPage(t)};handleCompleteTask=t=>{this.model.completeTask(t)};handleDeleteTask=t=>{this.model.removeTask(t)};handleEditTask=t=>{this.model.editTask(t)};handleFilterTasks=t=>{this.model.filterTasks(t)}}(new class{constructor(){this.btnAdd=document.querySelector(".add-task"),this.inputValue=document.querySelector("input"),this.todoList=document.querySelector(".todo-list"),this.filterElement=document.getElementsByClassName("filter")[0]}bindAddBtn=t=>{this.btnAdd.addEventListener("click",(e=>{e.preventDefault(),""==this.inputValue.value?alert("Your Input is Empty"):t(this.inputValue.value),this.inputValue.value=""}))};renderPage=t=>{this.todoList.innerHTML="",t.forEach((t=>{const{text:e,id:s,done:i,edit:n}=t;this.addTask(s,e,i,n)}))};addTask=(t,e,s,i)=>{let n=document.createElement("li");n.classList.add("li-item"),n.textContent=e,n.id=`${t}`,s&&(n.classList.remove("complete-btn"),n.classList.add("complete-status")),i&&(n.contentEditable=!0),this.bindCreateBtn("delete-btn","Delete",n),this.bindCreateBtn("edit-btn","Edit",n),this.bindCreateBtn("complete-btn","Complete",n),this.todoList.appendChild(n)};bindCreateBtn=(t,e,s)=>{let i=document.createElement("button");s.appendChild(i),i.className=t,i.textContent=e,console.log(i)};bindDeleteBtn=t=>{this.todoList.addEventListener("click",(e=>{let s=e.target;if(s.classList.contains("delete-btn")){let e=s.parentElement.id;t(e)}}))};bindCompleteBtn=t=>{this.todoList.addEventListener("click",(e=>{let s=e.target;if(s.classList.contains("complete-btn")){let e=s.parentElement.id;t(e)}}))};bindEditBtn=t=>{this.todoList.addEventListener("click",(e=>{let s=e.target;if(s.classList.contains("edit-btn")){let e=s.parentElement;t(e)}}))};bindFilterTask=t=>{this.filterElement.addEventListener("change",(e=>{e.preventDefault();let s=this.filterElement.value.toLowerCase();t(s)}))}},new class{constructor(){this.tasksList=[],this.status="all"}bindRenderPage=t=>{this.handleRenderPage=t};addData=t=>{let e={text:t,id:this.tasksList.length,done:!1,edit:!1};this.tasksList.push(e),this.handleRenderPage(this.tasksList)};editTask=t=>{for(let e of this.tasksList)t.id==e.id&&(e.edit=!e.edit,e.text=t.childNodes[0].nodeValue);this.handleRenderPage(this.tasksList)};removeTask=t=>{this.tasksList=this.tasksList.filter((e=>e.id!=t)),this.handleRenderPage(this.tasksList)};completeTask=t=>{for(let e of this.tasksList)t==e.id&&(e.done=!e.done);this.handleRenderPage(this.tasksList)};filterTasks=t=>{this.status=t;let e=this.tasksList.filter((t=>{switch(this.status){case"all":return!0;case"completed":return!!t.done;case"active":return!t.done}}));this.handleRenderPage(e)}})})();