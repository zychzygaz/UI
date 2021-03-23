const form = document.getElementById("form");
const addItem = document.getElementById("addItem");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addItem.value === "") {
        addItem.className = "error";
        document.querySelector("small").className = "smallError";
    } else if (addItem.value != "") {
        addItem.className = "passed";
        document.querySelector("small").className = "unvis";
        setTimeout(changeBack, 1000);
        function changeBack() {
            addItem.className = "";
        }

        const listOfItems = document.getElementById("listOfItems");
        const item = document.createElement("li");
        const delTag = document.createElement("a");
        item.innerHTML = addItem.value;
        delTag.innerHTML = '<i class="fas fa-trash"></i>';
        delTag.className = "delete-item secondary-content";

        item.appendChild(delTag);
        listOfItems.appendChild(item);

        delTag.addEventListener("click", () => {
            item.parentNode.removeChild(item);
        });

        addItem.value = "";
    }
});
