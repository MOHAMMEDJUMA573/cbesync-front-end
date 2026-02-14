function CreatePopUp(id){
    let popNode = document.querySelector(id)
    let overlay = popNode.querySelector(".overlay")
    let closebtn = popNode.querySelector(".close-btn")
    function openPopup(){
        popNode.classList.add("active");

    }
    function closePopup(){
        popNode.classList.remove("active");
        
    }
    overlay.addEventListener("click", closePopup)
    return openPopup
}

const studentPopup = CreatePopUp("#popup")
document.querySelector("#studentsView").addEventListener("click", studentPopup)