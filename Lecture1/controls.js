function sayHello(){
    alert("Hello World!");
}

function dummyFunc(val){
    alert(++val);
}

/*
function validate(){
    const nameElement = document.getElementById("name");
    const value = nameElement.value;
    if (value == null || value.length === 0){
        alert("Please fill mandatory data!");
    }
    else{
        alert("Name is " + value);
    }
}
*/

function validate(){
    const value = $("#name").val();
    const mCtrl = $(".mandatory");
    if (value == null || value.length === 0){
        alert("Please fill mandatory data!");
    }
    else{
        alert("Name is " + value);
    }
}