
const library = [
    {
        title:"There There: A novel ", 
        author: "Tommy Orange",
        description: "Fierce, angry, funny, heartbreaking—Tommy Orange’s first novel is a wondrous and shattering portrait of an America few of us have ever seen, and it introduces a brilliant new author at the start of a major career. "
    },
    {
        title:"When Life Gives You Lululemons", 
        author: "Lauren Weisberger",
        description: "Welcome to Greenwich, Connecticut, where the lawns and the women are perfectly manicured, the Tito’s and sodas are extra strong, and everyone has something to say about the infamous new neighbor."
    },
    {
        title:"Frenemies: The Epic Disruption of the Ad Business (and Everything Else) ", 
        author: "Ken Auletta",
        description: "An intimate and profound reckoning with the changes buffeting the $2 trillion global advertising and marketing business from the perspective of its most powerful players, by the bestselling author of Googled."
    }

];

// let book1 = {
//     title:"There There: A novel ", 
//     author: "Tommy Orange",
//     description: "Fierce, angry, funny, heartbreaking—Tommy Orange’s first novel is a wondrous and shattering portrait of an America few of us have ever seen, and it introduces a brilliant new author at the start of a major career. "
// };

// const uniqueBooks = (Array, obj) => {
//     for(let i = 0; i < Array.length; i++){
//         let current = Array[i];
//         if(current.title === obj.title && current.author === obj.author){
//             return;
//         }
//         return Array.unshift(obj);
//     }
// };
//uniqueBooks(library, book1);
// localStorage.setItem("myLibrary", JSON.stringify(library))


let bookSubmit = document.querySelector("#submit-book");
let bookList = document.querySelector("#book-list");
let alertDiv = document.querySelector("#alert");


bookList.addEventListener("click",  function(e){

    if(e.target.id === "removeBook"){
     
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    }
    if(e.target.id === "read"){
      
        if(e.target.innerHTML === "Read"){
            e.target.innerHTML = "Not Read"
        }else{
        e.target.innerHTML ="Read";
    }}
});

const alertMessage= (message) => {
    alertDiv.innerHTML =  `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong> ${message} </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    };

const clearAlert =  ()=>{
    alertDiv.innerHTML = "";
 };


///book constructor function..
const Book = function(title, author, description="none"){
    this.title = title;
    this.author = author;
    this.description = description;
} 

const addBook = (e) => {
    e.preventDefault();
    
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let desc = document.querySelector("textarea").value || "No description available";
    if(title && author){
        book = new Book(title, author, desc);
        library.unshift(book);
        
    }else{
        alertMessage("Please add Book and author");
        setTimeout(clearAlert, 2000);
        return;
    }
   
    bookList.innerHTML = "";
    render(library);
   
    

}



///add items to library..
bookSubmit.addEventListener("click",addBook);

//console.log(library);
//render html
  const render = (Array) => {
    Array.forEach( book => {
        
        bookList.innerHTML += (            
        `<div class="col-md-4 my-2 id = "book">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                <p class="card-text">${book.description}.</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" id="read">Not Read</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id = "removeBook">Remove</button>
                </div>
            </div>
        </div>
    </div>
</div>`);
    })
  }

  render(library);

