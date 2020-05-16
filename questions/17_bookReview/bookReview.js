class BookReview {
    constructor(title, author){
        this.rating;
        this.title=title;
        this.author=author;
        this.notes={}
    }

    addNotes(pgNum, note){
        let pageNotes=Object.keys(this.notes)

        if (pageNotes.includes(pgNum+'')){
            this.notes[pgNum]+=` ${note}`
        } else {
            this.notes[pgNum]=note;
        }
    }

    addRating(num){
        if(num>5 ||num<1){
            throw('Enter a number between 1 and 5')
        }
        this.rating=num
    }
}
module.exports = { BookReview };
