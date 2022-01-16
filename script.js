let commentbox = document.querySelector("#commentbox")
let addComment = document.querySelector("#addcomment") 

addComment.addEventListener("submit", function() {
    let newComment = document.createElement("div")
    newComment.textContent = "testing"
    commentbox.appendChild(newComment)
})