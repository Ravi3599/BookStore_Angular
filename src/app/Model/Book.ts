export class Book{
    bookName:string;
    authorName:string;
    bookDescription:string;
    bookImg:string;
    price:number;
    quantity:number;

    constructor(bookName:string,authorName:string,bookDescription:string,bookImg:string,price:number,quanity:number){
        this.bookName=bookName;
        this.authorName=authorName;
        this.bookDescription=bookDescription;
        this.bookImg=bookImg;
        this.price=price;
        this.quantity=quanity;

    }
}