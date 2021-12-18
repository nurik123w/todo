
let tasks1 = [];
let jsonTasks1 = localStorage.getItem("task1");
if(jsonTasks1!=null){
	tasks1 = JSON.parse(jsonTasks1);
}

let tasks2 = [];
let jsonTasks2 = localStorage.getItem("task2");
if(jsonTasks2!=null){
	tasks2 = JSON.parse(jsonTasks2);
}

let tasks3 = [];
let jsonTasks3 = localStorage.getItem("task3");
if(jsonTasks3!=null){
	tasks3 = JSON.parse(jsonTasks3);
}

let tasks4 = [];
let jsonTasks4 = localStorage.getItem("task4");
if(jsonTasks4!=null){
	tasks4 = JSON.parse(jsonTasks4);
}

function showTasks(){

	for(let i = 0 ; i<tasks1.length;i++){
		if(tasks1[i].date == "Monday"){	
			let inDiv = document.createElement("div");
			let span = document.createElement("span");
			let img = document.createElement("img");
			inDiv.className = "inDiv";
			img.className = "imgInput";
			span.className = "newTask";
			span.innerText = tasks1[i].text;
			img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qH0j0Dl-Ou-qa2ZPMlRr9jIL5P8h-DrEg&usqp=CAU";
			img.addEventListener("click",removeTask);
			img.addEventListener('mouseover',imgInput);
			img.addEventListener("mouseout",newImg);			
			span.addEventListener("dblclick",crossTask);
			inDiv.appendChild(img);
			inDiv.appendChild(span);
			mn.appendChild(inDiv);
			if(tasks1[i].isCrossed==true){
				span.classList.remove("newTask");
				span.classList.add("oldTask");
			}else if(tasks1[i].isCrossed==false){
				span.classList.remove("oldTask");
				span.classList.add("newTask");
			}
		}
	}

	for(let i = 0 ; i<tasks2.length;i++){
		 if (tasks2[i].date == "Tuesday"){
		 	let inDiv = document.createElement("div");
			let span = document.createElement("span");
			let img = document.createElement("img");
			inDiv.className = "inDiv";
			img.className = "imgInput";
			span.className = "newTask";
			span.innerText = tasks2[i].text;
			img.addEventListener('mouseover',imgInput);
			img.addEventListener("mouseout",newImg);
			img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qH0j0Dl-Ou-qa2ZPMlRr9jIL5P8h-DrEg&usqp=CAU";
			img.addEventListener("click",removeTask);
			span.addEventListener("dblclick",crossTask);
			inDiv.appendChild(img);
			inDiv.appendChild(span);
			mn1.appendChild(inDiv);
			if(tasks2[i].isCrossed==true){
				span.classList.remove("newTask");
				span.classList.add("oldTask");
			}else if(tasks2[i].isCrossed==false){
				span.classList.remove("oldTask");
				span.classList.add("newTask");
			}
		}
	}	

	for(let i = 0 ; i<tasks3.length;i++){
		if(tasks3[i].date == "Wednesday"){
		 	let inDiv = document.createElement("div");
			let span = document.createElement("span");
			let img = document.createElement("img");
			inDiv.className = "inDiv";
			img.className = "imgInput";
			span.className = "newTask";
			span.innerText = tasks3[i].text;
			img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qH0j0Dl-Ou-qa2ZPMlRr9jIL5P8h-DrEg&usqp=CAU";
			img.addEventListener("click",removeTask);
			img.addEventListener('mouseover',imgInput);
			img.addEventListener("mouseout",newImg);
			span.addEventListener("dblclick",crossTask);
			inDiv.appendChild(img);	
			inDiv.appendChild(span);
			mn2.appendChild(inDiv);
			if(tasks3[i].isCrossed==true){
				span.classList.remove("newTask");
				span.classList.add("oldTask");
			}else if(tasks3[i].isCrossed==false){
				span.classList.remove("oldTask");
				span.classList.add("newTask");
			}
		}
	}

	for(let i = 0 ; i<tasks4.length;i++){
		if(tasks4[i].date == "Thursday"){
		 	let inDiv = document.createElement("div");
			let span = document.createElement("span");
			let img = document.createElement("img");
			inDiv.className = "inDiv";
			img.className = "imgInput";
			span.className = "newTask";
			span.innerText = tasks4[i].text;
			img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qH0j0Dl-Ou-qa2ZPMlRr9jIL5P8h-DrEg&usqp=CAU";
			img.addEventListener('mouseover',imgInput);
			img.addEventListener("mouseout",newImg);
			img.addEventListener("click",removeTask);
			span.addEventListener("dblclick",crossTask);
			inDiv.appendChild(img);	
			inDiv.appendChild(span);
			mn3.appendChild(inDiv);
			if(tasks4[i].isCrossed==true){
				span.classList.remove("newTask");
				span.classList.add("oldTask");
			}else if(tasks4[i].isCrossed==false){
				span.classList.remove("oldTask");
				span.classList.add("newTask");
			}
		}
	}
}

function imgInput(event){
	let img = event.target;
 	img.classList.remove("imgInput");
 	img.classList.add("newImg");
}


function newImg(event){
	let img = event.target;
 	img.classList.remove("newImg");
 	img.classList.add("imgInput");
}





function addTask(){
	let text1 = inputText.value;
	let date1 =  calendarity.value;

	let inDiv = document.createElement("div");
	let span = document.createElement("span");
	let img = document.createElement("img");
	inDiv.className = "inDiv";
	img.className = "imgInput";
	span.className = "newTask";
	span.innerText = text1;
	img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4qH0j0Dl-Ou-qa2ZPMlRr9jIL5P8h-DrEg&usqp=CAU";
	img.addEventListener("click",removeTask);
	img.addEventListener('mouseover',imgInput);
	img.addEventListener("mouseout",newImg);
	span.addEventListener("dblclick",crossTask);
	inDiv.appendChild(img);
	inDiv.appendChild(span);

	let obj = 
    {	
		text:  text1,
		date:  date1,
		isCrossed: false
    };

		if(date1 == "Monday"){
			mn.appendChild(inDiv);
		 	tasks1.push(obj);
		    localStorage.setItem("task1",JSON.stringify(tasks1));
		}else if (date1 == "Tuesday"){
			mn1.appendChild(inDiv);
		 	tasks2.push(obj);
		    localStorage.setItem("task2",JSON.stringify(tasks2));
		}else if(date1 ==  "Wednesday"){
			mn2.appendChild(inDiv);
		 	tasks3.push(obj);
		    localStorage.setItem("task3",JSON.stringify(tasks3));			
		}else if(date1 == "Thursday"){
			mn3.appendChild(inDiv);
		 	tasks4.push(obj);
		    localStorage.setItem("task4",JSON.stringify(tasks4));			
		}
		inputText.value = "";
}


function removeTask(element){
	let parent = element.target.parentElement.parentElement.getElementsByClassName("inDiv");
	let child = element.target.parentElement;
	let index = Array.from(parent).indexOf(child);
	let differ = element.target.parentElement.parentElement.firstChild;
	if(differ.innerText=="Monday:"){
		tasks1.splice(index,1);
		localStorage.setItem("task1",JSON.stringify(tasks1));
		child.remove();
	}else if(differ.innerText=="Tuesday:"){
		tasks2.splice(index,1);
		localStorage.setItem("task2",JSON.stringify(tasks2));
		child.remove();
	}else if(differ.innerText=="Wednesday:"){
		tasks3.splice(index,1);
		localStorage.setItem("task3",JSON.stringify(tasks3));
		child.remove();
	}else if(differ.innerText=="Thursday:"){
		tasks4.splice(index,1);
		localStorage.setItem("task4",JSON.stringify(tasks4));
		child.remove();
	}			
}

function crossTask(event){
	let span = event.target;
	let child = event.target.parentElement;
	let parent = event.target.parentElement.parentElement.getElementsByClassName("inDiv");
	let index = Array.from(parent).indexOf(child);
	let differ = event.target.parentElement.parentElement.firstChild;
	if(span.classList.contains("newTask")){
		span.classList.remove("newTask");
		span.classList.add("oldTask");
		if(differ.innerText == "Monday:"){
			tasks1[index].isCrossed = true;
			localStorage.setItem("task1",JSON.stringify(tasks1));
		}else if(differ.innerText == "Tuesday:"){
			tasks2[index].isCrossed = true;
			localStorage.setItem("task2",JSON.stringify(tasks2));
		}else if(differ.innerText == "Wednesday:"){
			tasks3[index].isCrossed = true;
			localStorage.setItem("task3",JSON.stringify(tasks3));
		}
		else if(differ.innerText == "Thursday:"){
			tasks4[index].isCrossed = true;
			localStorage.setItem("task4",JSON.stringify(tasks4));
		}
	}else if (span.classList.contains("oldTask")){
		span.classList.remove("oldTask");
		span.classList.add("newTask");
		if(differ.innerText == "Monday:"){
			tasks1[index].isCrossed = false;
			localStorage.setItem("task1",JSON.stringify(tasks1));
		}else if(differ.innerText == "Tuesday:"){
			tasks2[index].isCrossed = false;
			localStorage.setItem("task2",JSON.stringify(tasks2));
		}else if(differ.innerText == "Wednesday:"){
			tasks3[index].isCrossed = false;
			localStorage.setItem("task3",JSON.stringify(tasks3));
		}
		else if(differ.innerText == "Thursday:"){
			tasks4[index].isCrossed = false;
			localStorage.setItem("task4",JSON.stringify(tasks4));
		}
	}
}





