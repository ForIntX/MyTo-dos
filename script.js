const inputText = document.getElementById("input-text");
const addTodoButton = document.getElementById("adder");
const categoriesAdder = document.getElementById("categories");
const searchText = document.getElementById("search-text");
const searchButton = document.getElementById("search-button");
const selectCategorie = document.getElementById("categorie-select");


addTodoButton.addEventListener("click",AddTodo);
searchText.addEventListener("input",SearchTodo);
searchButton.addEventListener("click",SearchTodo);
selectCategorie.addEventListener("change",SelectCategorie);










function AddTodo(e){
    e.preventDefault();
    const contentList = document.getElementsByClassName("content-list")[0];
    const categorieSelect = document.getElementById("to-do-categories");
    const categorieVal= categorieSelect.options[ categorieSelect.selectedIndex ].value;

    if (categorieVal=="") {
        console.log("Select alanı boş bırakılamaz.");
        return;
    }
    else{
        if(inputText.value=="")
        {
            console.log("input alanı boş bırakılamaz.");
            return;
        }
        else{
            
            const listItem = document.createElement("li");
                listItem.className = "list-item";
                listItem.innerHTML = `<div class="to-do-item">
                            <div class="start">
                            <div>
                                <button type="button" class="check-button">
                                <i class="bi bi-check-circle-fill"></i>
                                </button>
                            </div>
                            <span class="item-type"></span>
                            <span class="item-name"></span>
                            </div>
                            <div class="delete-button-div">
                            <button type="button" class="delete-button">
                                <i class="bi bi-dash-circle-fill"></i>
                            </button>
                            </div>
                        </div>`;
                contentList.appendChild(listItem);
                const itemTypesList = document.querySelectorAll(".item-type");
                const itemType = itemTypesList[itemTypesList.length - 1];
                itemType.textContent = categorieVal;

                const itemNameList = document.querySelectorAll(".item-name");
                const itemName = itemNameList[itemNameList.length - 1];
                itemName.textContent = inputText.value;

                const checkMarkList = document.querySelectorAll(".check-button");
                const checkMark = checkMarkList[checkMarkList.length - 1];

                const deleteButtonList = document.querySelectorAll(".delete-button");
                const deleteButton = deleteButtonList[deleteButtonList.length - 1];
                




                inputText.value="";
            
            checkMark.addEventListener("click", function (e) {
                e.preventDefault();
                if(itemName.style.textDecoration=="line-through"){

                itemName.style.textDecoration="none";
                }
                else{
                    itemName.style.textDecoration="line-through";
                }

                if (itemType.style.textDecoration=="line-through") {
                    itemType.style.textDecoration="none"
                } 
                else{
                    itemType.style.textDecoration="line-through"
                }

            });

            deleteButton.addEventListener("click",function (e) {
                e.preventDefault();
                listItem.remove();
                
                
            });

            
            
        }
       
    }
             
}


function SearchTodo(e) {
    //searchText
    //seachButton
    // todo: const itemTypesList = document.querySelectorAll(".item-type"); add this and btns  
    if(e.type === "click") e.preventDefault();

   
    let searchTextVal = searchText.value;
    const itemNameList = document.querySelectorAll(".item-name");
    let listItem = document.querySelectorAll(".list-item");

    
   listItem.forEach((item, index) => {
    const name = itemNameList[index].textContent.toLowerCase();
    if(name.includes(searchTextVal.toLowerCase())){
        item.style.display = "flex";
    } else {
        item.style.display = "none";
    }
});

}












function SelectCategorie(event) {

    
    const eValue = event.target.value;
    const itemTypesList = document.querySelectorAll(".item-type");
    
    
    
    if ((eValue!="all" )&& (eValue !="uncompleted") && (eValue !="completed") ){
        itemTypesList.forEach(item=>{
            const liParent = item.closest("li");

        if (item.textContent == event.target.value) {
            liParent.style.display="flex";
        } else {
        
            liParent.style.display="none";
        }
        });
    }

    else if(eValue=="completed"){
        itemTypesList.forEach(item=>{
            const liParent = item.closest("li");

            if (item.style.textDecoration=="line-through") {
                liParent.style.display="flex";
            } else {
                liParent.style.display="none";
            
            }


        });
       
        
    }
    else if(eValue=="uncompleted")
    {
        itemTypesList.forEach(item=>{
                const liParent = item.closest("li");

                if (item.style.textDecoration!="line-through") {
                    liParent.style.display="flex";
                } else {
                    liParent.style.display="none";
                
                }


            });
    }
    else if(eValue=="all")
    {
        itemTypesList.forEach(item=>{
            const liParent = item.closest("li");
        liParent.style.display="flex";});
    }
   

}