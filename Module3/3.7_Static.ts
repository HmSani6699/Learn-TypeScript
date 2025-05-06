{

    // Static in OOP

    class Counter {
      static  count: number = 0;
        
        increase() {
           return Counter.count = Counter.count+1;
        }

        decrease() {
          return  Counter.count = Counter.count-1;
        }
    }

    const fristCount = new Counter();
    console.log(fristCount.increase());
    console.log(fristCount.increase());

    const secondCount = new Counter();
    console.log(secondCount.increase());
    
    


    //
}