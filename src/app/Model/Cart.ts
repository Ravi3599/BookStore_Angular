export class Cart{
    userID:number;
    bookID:number;
    quantity:number;

    constructor(bookID:number,userID:number,quanity:number){
        this.userID=userID;
        this.bookID=bookID
        this.quantity=quanity;

    }
}