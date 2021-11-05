function getTotalBooksCount(books) {
  let total = 0
  for(i = 0; i < books.length; i++){
    total ++;
  }
  return total;
  
}

function getTotalAccountsCount(accounts) {
  let total = 0
  for(i = 0; i < accounts.length; i++){
    total ++;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false)
  return result.length;
                           
}

function getMostCommonGenres(books) {
  let countObj = {};
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  });
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}

function getMostPopularBooks(books, count=5) {
        const borrows = books.map(book=>      ({name:book.title, count:book.borrows.length}));
    borrows.sort((a,b) => b.count - a.count);
        return borrows.slice(0,count);
}


function getMostPopularAuthors(books, authors) {
const topAuthors = authors.map(a => ({
...a,
bookCount: books.filter(b => b.authorId === a.id).length,
borrowCount: books.filter(b => b.authorId === a.id).reduce((acc, cur) => acc + cur.borrows.length, 0)
})).sort((b, a) => a.borrowCount - b.borrowCount);
topAuthors.length = 5;
return topAuthors.map(ta => {
return {count: ta.borrowCount, name: ta.name.first + " " + ta.name.last};
})
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
