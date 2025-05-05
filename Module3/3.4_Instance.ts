{

    // Instanceof

    class Animal {
        name: string;
        species: string;
        constructor(name:string,species:string) {
            this.name = name;
            this.species = species;
        }
        getSound() {
            console.log('This is Gew Gew Moan');
        }
    }


    class Dog extends Animal {
        constructor(name:string,species:string) {
            super(name,species)
        }
        makeDogCall() {
            console.log('This is make call Gew Gew Mama');
        }
    }

    class Cat extends Animal {
        constructor(name:string,species:string) {
            super(name,species)
        }
        makeCatCall() {
            console.log('This is make call Mew Mew Mama');
        }
    }



    // Smart way te code likha

    const isDog = (animal:Animal): animal is Dog  => {
        return animal instanceof Dog;
    }
    const isCat = (animal:Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeDogCall()
        } else if (isCat(animal)) {
            animal.makeCatCall()
        } else {
            animal.getSound()
        }
    }

    const dog = new Dog("Dog Mama", "Dog");
    const cat = new Cat("Cat Mama", "Cat");

    
     getAnimal(dog)


    //
}