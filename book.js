// 1. Get The Element form the dom
1.// Get Element from the dom
const button  = document.querySelector('.btn')
const searchField  = document.querySelector('.searchField')
const container  = document.querySelector('.container')

2. //When the window load, display initial Books for users
const displayInitialBooks = async ()=> {
    let initalBooks = await displayBooks()
    initalBooks.map(initalBook => {
        renderBooks(initalBook)
    })
    
}
window.onload = displayInitialBooks

// .................................................




3. //  Function to get Books from the API
const displayBooks = async (term) => {

// Get Term value from search Field
if(!searchField.value){
    term = 'Biden'
}else {
    term = searchField.value
}

// API Url 
    const API_URL= `https://goodreads-server-express--dotdash.repl.co/search/${term}`;

 //Fetch Books from API
  try {
      const ApiFetch = await fetch(API_URL);
      const Books = await ApiFetch.json();
      return Books.list
  } catch(err) {
      return {
          err_mgs : 'Sorry! No Books Found'
      }
  }

}

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''


//Function tp query the Book API to get Books
const searchterm = button.addEventListener('click', function(e){
    e.preventDefault()

    //Empty the Container
    container.innerHTML =''

    //Initial Search Term
    let BookArray;

  
    // Function to Render Books to View
    displayBooks().then(data => {
        
        
        BookArray = data  
        console.log(BookArray)
        BookArray.map(Book => {
            renderBooks(Book)           
    })    
    })
       
 })   
 var names = [];


 //Render Book to Dom
 const renderBooks = (book) => {
        
    //Create a card for the book
    let card = document.createElement('div')
    card.classList.add('card');
    
    // create image tag for the image
    let Image = document.createElement("IMG");
    // Image.src = Book.imageUrl
    Image.src = book.imageUrl
    card.appendChild(Image);
    
    // create card body 
    let card_body = document.createElement('div')
    card_body.classList.add('card-body');
    
    // create title tag  
    let heading = document.createElement('h2')
    heading.classList.add('title');
    let book_title = document.createTextNode(book.title);  
    heading.appendChild(book_title)
    card_body.appendChild(heading);
    
    
    // create add author Name
    
    let author = document.createElement('p')
    author.classList.add('author');
    let authorName = document.createTextNode(book.authorName);  
    author.appendChild(authorName)
    
    
    card_body.appendChild(heading);
    card_body.appendChild(author);
    // Append Card-Body to Card
    card.appendChild(card_body)
    // Append Card to Container
    container.appendChild(card)
}

