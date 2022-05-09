// Write your code here

class Dog{
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

const bigDog1 = new Dog ('mary', 'poodle')
const bigDog2 = new Dog ('gary', 'doodle')

class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    #desert;
    constructor(salad, soup, entry, desert) {
        this.salad = salad;
        this.soup = soup;
        this.entry = entry;
        this.#desert = desert;
    }
}