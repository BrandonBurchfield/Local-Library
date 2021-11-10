function findAccountById(accounts, id) {
  for(i = 0; i < accounts.length; i++){
    if(id === accounts[i].id){
      return accounts[i];
    }
  }
 }

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1);
}
   

function getTotalNumberOfBorrows(account, books) {
    let numOfBorrows = 0;
    let accountId = account.id;

    books.forEach(book => {
      for(let i = 0; i < book.borrows.length ; i++) {
        if(book.borrows[i].id === accountId) {
          numOfBorrows++;
        }
      }
     })
      return numOfBorrows;
  }



function getBooksPossessedByAccount(account, books, authors) {
        let accountId = account.id;
        let possessedBooksArray = [];

        books.forEach((book) => {
            for (let i = 0; i < book.borrows.length; i++) {
                if ((book.borrows[i].id === accountId) && (book.borrows[i].returned === false)) {
                  possessedBooksArray.push(book);
                  
                  authors.forEach((author) => {
                    if (author.id === book.authorId) {
                      possessedBooksArray[i].author =
                      createAuthorRecord(author.id, author.name.first, author.name.last)
                      //  {
                      //   id: author.id,
                      //   name: {
                      //     first: author.name.first,
                      //     last: author.name.last
                      //   }
                      // }
                    }
                  });                                        
                }
            }
        });
        
    return possessedBooksArray;
    }

   function createAuthorRecord(authorId, firstName, lastName) {
     let record = {
        id: authorId,
        name: {
          first: firstName,
          last: lastName
        }
      }
      return record;
    }
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
