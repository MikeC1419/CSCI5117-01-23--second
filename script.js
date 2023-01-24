function myFunc(){
    console.log("hi");
    var members = document.getElementById("members");

    var input = document.getElementById("inp");
    //li.text = "hi";
    members.innerHTML += "<li>"+input.value+"</li>";
}
window.onload = function(){
    var button = document.getElementById("button");
    button.onclick = myFunc;
}
