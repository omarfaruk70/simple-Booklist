// define all UI element. and add event listener.
let form  = document.getElementById('inputBook');
form.addEventListener('submit', addedNewBook);
let singleBook = document.getElementById('all-books');
singleBook.addEventListener('click', removeSingleBook);
let deleteAll = document.getElementById('deleteAll');
deleteAll.addEventListener('click', clearAll)
// creating Object class or object method
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    };
};
class BookCollection{
    constructor(){
    };
    addToBookList(bookParam){
        let allBook = document.getElementById('all-books');
        let row = document.createElement('tr');
        row.innerHTML =`
        <td>${bookParam.title}</td>
        <td>${bookParam.author}</td>
        <td>${bookParam.isbn}</td>  
        <td><a href= '#' class = 'delete'> X </a></td>
        `;
        allBook.appendChild(row);      
    };
    clearfields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
};
// define function
function addedNewBook(element){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let book  = new Book(title,author,isbn);
    let ui = new BookCollection();
    ui.addToBookList(book);
    element.preventDefault();
    ui.clearfields();
};
function removeSingleBook(e){
    if(e.target.hasAttribute('href')){
        let item = e.target.parentNode.parentNode;
        item.remove();
    };
    e.preventDefault();
};   
function clearAll(){
    if(confirm(' Are you sure ? ')){
        let all = document.getElementById('all-books');
        all.innerHTML = '' ;
    };
};