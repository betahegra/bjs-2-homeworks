class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *=  1.5;
    }
        set state(newState) {
            if(newState <= 0) {
                this._state = 0;
            }
            if(newState >= 100) {
                this._state = 100;
            }
            if (newState > 0 && newState < 100) {
                this._state = newState;
            }
        }
        get state() {
            return this._state;
        }
}

class Magazine extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}



class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const result = this.books.find(item => item[type] === value);
        return result !== undefined ? result : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(item => item.name === bookName);
        if (index != -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}



class Student {
    constructor(name) {
    this.name = name;
    this.marks = {};
    }  

    addMark(mark, subject) {
       if(mark >= 2 && mark <= 5) {
           if (this.marks.hasOwnProperty(subject)  === true) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }
        } else {
            return 0;
        }
    }

    getAverageBySubject(subject) {
        if(this.marks.hasOwnProperty(subject)  === false) {
            return 0;
        }
        const accumulator = this.marks[subject].reduce((accumulator, item) => accumulator + item, 0);
        return accumulator / this.marks[subject].length;
    }
    

    getAverage() {
        const getMarks = Object.keys(this.marks);
        if(getMarks.length === 0) {
            return 0;
        }
        let result = 0;
        for (let i = 0; i < getMarks.length; i++) {
            result += this.getAverageBySubject(getMarks[i]);  
        }
        return result / getMarks.length;
    }
}