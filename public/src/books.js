function findAuthorById(authors, id) {
    for(i = 0; i < authors.length; i++){
    if(id === authors[i].id){
      return authors[i];
    }
  }
 }


function findBookById(books, id) {
    for(i = 0; i < books.length; i++){
    if(id === books[i].id){
      return books[i];
    }
  }
 }


function partitionBooksByBorrowedStatus(books) {
        let checkedOutBooks = [];
        let availableBooks = [];
        let checkedOutAndAvailableBooks = [];
    books.forEach((book) => {
                       if (book.borrows[0].returned === false) {
                    checkedOutBooks.push(book);
                }else{
               availableBooks.push(book);
                     }
            
        });
   checkedOutAndAvailableBooks.push(checkedOutBooks, availableBooks);
    console.log(checkedOutAndAvailableBooks)
        return checkedOutAndAvailableBooks;
    }

function getBorrowersForBook(book, accounts) {
        let accountBorrowers = [];
        let numTransactions = book.borrows.length;
  
  if (numTransactions >= 10){
    numTransactions = 10;
  }
    
        accounts.forEach((account) => {
            for (let i = 0; i < numTransactions; i++) {
                if (account.id === book.borrows[i].id) {
                  account.returned = book.borrows[i].returned;
                    accountBorrowers.push(account);
                }
            }
        });

        

        return accountBorrowers;
    }  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
