{
    // Getter ===> Setter

    class BanckAcount {
      public  id: number;
      public  name: string;
      private  balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

       set addBalance(amount: number) {
            this.balance = this.balance + amount;
        }
      get  getBalance() {
            return this.balance;
        }
    }


    const newUser = new BanckAcount(1, "Sadiq", 40);

    // newUser.addBalance(10);
    const addBalance = newUser.addBalance = 20

    const result = newUser.getBalance;

    console.log(result);
    





    //
}