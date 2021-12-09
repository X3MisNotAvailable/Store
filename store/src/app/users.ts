
export class Users {
    public Id: number;
    public name: string;
    public pwd:string;
    public username:string;
    public phonenumber:string;
    public address:string;
    
    constructor(Id:number,name: string,pwd:string,username:string, phonenumber: string,  address: string,  ) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.username = username;
    this.phonenumber = phonenumber;
    this.address = address;

    }
    }