//Main Class And Objects
class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var mainArray = [];


function addNewView() {
    document.getElementById("addForm").hidden = false;
    document.getElementById("panel").hidden = true;
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("age")[0].value = "";
}
function addNew() {
    document.getElementById("addForm").hidden = true;
    document.getElementById("panel").hidden = false;
    var name = document.getElementsByName("name")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var x = new Friend(name,age);
    if(fromEditView == 1) {
    	mainArray[indexForEdit] = x;
    	fromEditView = 0;
    } else {
    	mainArray.push(x);
    }
}

function viewAllView() {
    var len = mainArray.length;
    if(len > 0) {
    	document.getElementById("panel").hidden = true;
    	document.getElementById("viewAll").hidden = false;
    	var htmlForTable = "<tr><th>Name</th><th>Age</th><th>Actions</th></tr>"; 
    	for(var i = 0 ; i < len ; i++ ) {
    	var need = mainArray[i];
    	htmlForTable += "<tr><td>"+ need.name + "</td><td>"+ need.age+ "</td> <td> <input type='image' src='delete.png' style='height:30px;width:30px;' name='deleteImage' value="+ i +" onclick='deleteRow(this)'> <input type='image' src='edit.png' style='height:30px;width:30px;' name='editImage' value="+ i +"  onclick='editRow(this)'> </td></tr>"
    	}
    	document.getElementsByName("mainTable")[0].innerHTML = htmlForTable;
	}
}
//value="+ i +"
function backHomeView() {
    document.getElementById("viewAll").hidden = true;
    document.getElementById("addForm").hidden = true;
    document.getElementById("panel").hidden = false;
}

var fromEditView = 0;
var indexForEdit = 0;

function editRow(element) {
	var index = element.value;
	indexForEdit = index;
	document.getElementById("addForm").hidden = false;
    document.getElementById("panel").hidden = true;
    document.getElementById("viewAll").hidden = true;
    document.getElementsByName("name")[0].value = mainArray[index].name;
    document.getElementsByName("age")[0].value = mainArray[index].age;
    fromEditView = 1;
}


function deleteRow(element) {
	var index  =  element.value;
	var len = mainArray.length;
	var need = [];
	for(var i = 0 ; i < len ; i++ ) {
	 	if(index != i) {
			need.push(mainArray[i]);
	 	}
	}
	if(need.length > 0) {
		mainArray = need;
		viewAllView();
	} else {
		mainArray.pop();
		document.getElementById("viewAll").hidden = true;
    	document.getElementById("addForm").hidden = true;
    	document.getElementById("panel").hidden = false;
	}
}