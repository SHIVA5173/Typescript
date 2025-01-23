class Product {
  pID: number;
  pName: string;
  pCost: number;
  constructor(productID: number, productName: string, productCost: number) {
    this.pID = productID;
    this.pName = productName;
    this.pCost = productCost;
  }
}

const samSung = new Product(4881, "SamSung Galaxy J7", 8596000);
console.log(samSung);

// Access Modifiers: public,private and protected

class Customer {
  public customerName: string;
  protected customerAge: number;
  private customerAccount: number;

  constructor(cName: string, cAge: number, cAccountNum: number) {
    this.customerName = cName;
    this.customerAge = cAge;
    this.customerAccount = cAccountNum;
  }

  getCustomerInfo(): string {
    return `Customer Details:\n${this.customerName} ${this.customerAge} ${this.customerAccount}`;
  }
  getAge(): number {
    return this.customerAge;
  }

  getAccountNumber(): number {
    return this.customerAccount;
  }
}

const shiva = new Customer("Shiva WebDev", 22, 4210129698);
console.log(shiva.getCustomerInfo());
console.log(shiva.customerName);
console.log(shiva.getAge());
console.log(shiva.getAccountNumber());

class Radha extends Customer {
  customerCountry: string;

  constructor(
    cName: string,
    cAge: number,
    cAccountNum: number,
    cCountry: string
  ) {
    super(cName, cAge, cAccountNum);
    this.customerCountry = cCountry;
  }
}

const Krishna = new Radha("Krishna", 22, 2085545903, "India");
console.log(Krishna);
console.log(Krishna.getAccountNumber());
console.log(Krishna.getAge());

// setters and getters:

class BankUser {
  userName: string;
  _Balance: number = 0;
  constructor(User: string, Balance: number) {
    this.userName = User;
    this._Balance += Balance;
  }

  get getBalance(): string {
    return `Current Balance Is: ${this._Balance}`;
  }

  set setBalance(x: number) {
    this._Balance += x;
  }
}

const Aravind = new BankUser("Aravind", 5000);
console.log(Aravind);
Aravind.setBalance = 5000;
console.log(Aravind.getBalance);
