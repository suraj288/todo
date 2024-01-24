let inputTag = document.querySelector("#inputTag");

let btn = document.querySelector("#bt");

let list = document.querySelector("#list");

btn.addEventListener("click", function () {
  // console.log(inputTag.value)

  let inputText = inputTag.value;
  inputTag.value = "";
  if (inputText != "") {
    let liTag = document.createElement("li");
    liTag.innerHTML = inputText + '<svg class="dicon" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>';

    let deleteIcon = liTag.querySelector(".dicon");

    deleteIcon.addEventListener("click",function(){
        list.removeChild(liTag);
    })

    list.appendChild(liTag);
  } else {
    alert("Please in Input ");
  }
});