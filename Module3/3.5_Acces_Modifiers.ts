{

    // Access Modifiers  ==> public  ==> readonly  ==> private  ==> protected

    class BanckAcount {
      public readonly id: number;
      public  name: string;
      private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addBalance(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance
        }
    }

    const fristUser = new BanckAcount(1, "Sadiq", 20);
     fristUser.addBalance(80);

    console.log(fristUser.getBalance());
    





    //
}