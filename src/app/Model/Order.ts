export class Order{
    quantity:number;
    address:string;
    price:number;
    userID:number;
    bookID:number;
    cancel:boolean;

    constructor(quanity:number,address:string,bookID:number,price:number,userID:number,cancel:boolean){
        this.userID=userID;
        this.bookID=bookID
        this.quantity=quanity;
        this.price=price;
        this.address=address;
        this.cancel=cancel;
    }
}