
        let addBtn=document.getElementById('add_btn')
        addBtn.addEventListener('click',addChapter)
        let parentList=document.getElementById('parentList')

        function addChapter(e){
            if(parentList.children[0].className =="emptyMsg"){
                parentList.children[0].remove()
            }
            let currentBtn = e.currentTarget;
            let currentInput = currentBtn.previousElementSibling
            let currentChapterName=currentInput.value
            
            let newLi = document.createElement('li')
            // newLi.classList.add('list-group-item')
            newLi.className ="list-group-item d-flex justify-content-between"
            newLi.innerHTML=`<h3 class="flex-grow-1">${currentChapterName}</h3>
                <button class="btn btn-warning mx-3">Edit</button>
                <button class="btn btn-danger" onclick="removeChapter(this)">Delete</button>`

            
            parentList.appendChild(newLi)
        }
    
        function removeChapter(currentElement){
            currentElement.parentElement.remove()
            let parentList=document.getElementById('parentList')
            if(parentList.children.length <=0){
                let newEmptyMsg = document.createElement("h3")
                newEmptyMsg.classList.add("emptyMsg")
                newEmptyMsg.textContent = "No chapters created yet!"
                parentList.append(newEmptyMsg)
            }



        }

        function editChapter(currentElement){
            if(currentElement.textContent=="Done"){
                currentElement.textContent="Edit"
                let currentChapterName= currentElement.previousElementSibling.value
                let currentHeading=document.createElement('h3')
                currentHeading.className="flex-grow-1"
                currentHeading.textContent=currentChapterName
                currentElement.parentElement.replaceChild(currentHeading,currentElement.previousElementSibling)



            }else{
            currentElement.textContent="Done"
           let currentChapterName= currentElement.previousElementSibling.textContent
           let currentInput =document.createElement('input')
           currentInput.type="text"
           currentInput.placeholder="Chapter Name"
           currentInput.className="form-control"
           currentInput.value= currentChapterName;
           currentElement.parentElement.replaceChild(currentInput,currentElement.previousElementSibling)
            }

        }
   