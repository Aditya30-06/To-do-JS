let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete this task";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    console.log(inp.value);
    inp.value = "";
});
ul.addEventListener("click", function () {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("Delete");
    }
})

// let delbtns = document.querySelectorAll(".delete");

// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log("deleted");
//         par.remove();
//     });
// }