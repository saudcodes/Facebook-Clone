let commentbox = document.querySelector("#commentbox")
let addComment = document.querySelector("#addcomment") 


    let newComment = document.createElement("div")
   newComment.classList.add("bg-primary")
    newComment.textContent = "testing"
    commentbox.appendChild(newComment)
