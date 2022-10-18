export interface Transaction {
    id: number;
    amount: number;
    isEmailVerified: boolean;
    Comments: string;
    CurrencyCd: string;
    date: Date;
    status: string;
    recipient:{
        firstName: string,
        lastName: string,
        email:string,
        accountNumber:number,
        bank:string
    },
    sender:{
        firstName: string,
        lastName: string,
        dateOfBirth:Date,
        IDNumber:number
    }
}