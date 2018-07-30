var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArray = document.querySelectorAll("li");
var del = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var button = document.createElement("button"); 
    button.innerHTML="delete";
    button.onclick= deleteNode;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML=li.innerHTML+" ";
	
    li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
 
// function getEventTarget(e){
// 	e = e || window.event;
// 	return e.target || e.srcElement;
// }

// ul.onclick=function(event){
//     var target = getEventTarget(event);
// 	target.classList.toggle("done");
// }


ul.addEventListener("click", function(event){
    var target = event.target;
    target.classList.toggle("done");
});


for(i=0;i<del.length;i++){
    del[i].addEventListener("click", deleteNode);

}

function deleteNode(event){
   event.target.removeEventListener("click", deleteNode);
   event.target.parentNode.remove();

}









;