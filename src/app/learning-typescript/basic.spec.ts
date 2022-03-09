import { isEven as someFunc } from "../utils/isEven"; // Importing just what we need from Utils and rename it
import * as OtherUtils from "../utils/otherUtils" //Importing everything from a file. Reference with dot notation
import { maxCat, Movie, BlairCat } from "../interfaces/index";
import { addTwoNumbers } from "../utils/add-two-numbers";

describe('Name of the group', () => {
    it('should be concat practice', () => {
        const name = 'max'
        let age = 23
        let nameAge = `My name is ${name} and my age is ${age}`;
        expect(nameAge).toBe('My name is max and my age is 23');
    });

    it('object and array practice', () => {
        const max = {
            firstName: 'Max',
            lastName: 'Pflaumer',
            age: 23,
            height: 'Not relevant',
            location: 'Denver',
            car: {
                make: 'Hyundai',
                model: 'tuscon',
                year: 2017
            },
            hobbies: ['Gaming', 'jujitsu', 'climbing'],
            Siblings: {
                count: 2,
                names: ['Ali', 'Paige']
            },
            knowsAngular: false
        }
    });
});

describe('Typing in typscript', () => {
    it('should talk about basic typing', () => {
        //when you declare a variable or object, you should declare the type
        //It is not strictly typed, but it wants to be

        const someThing: string = 'jibber jabber' //Basic syntax for typing in TS
        //Type is defined in this way. In S2 don't need to do this for simple data types
        //Don't always have to define data types

        let someNum:number; //Data types should be lowercase

        //someNum = true;
        someNum=41_569 //Can use underscores in numbers. Act as commas. It is for readability. Good for data values and miliseconds


        const anime: {name: string, year: number, isGreatestAnimeEver: boolean} = {
            name: 'yu yu hakusho',
            year: 1992,
            isGreatestAnimeEver: true
        }
        const releaseYear = anime.year //hover over anime to see the implicit typing
        //anime.isGreatestAnimeEver = 'no'; It is not explicitly typed, but the machine knows what it should be and won't let  you change it without an interface

        let faveFoods: string[] = ['taco', 'chicken', 'spinach'];

       // faveFoods.push(75); not allowed since 75 is not a string

        //let someCreature: cat = 'yup a cat' // This cat datatype will be fixed with interface

    });
    it('should talk interfaces and union types and aliases', () => {
        //Interface is saying they are going to have a specific property adn specific data types
        //Interfaces are basically an explicitly typed object
        interface AnimeInfo {
            name: string;
            year: number;
            dubs: boolean;
        }

        const dbz: AnimeInfo = {
            name: 'dragonball z',
            year:1989,
            dubs: true
        }

        //
        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
            awards?: string[] //This is an optional property. ? is the signifier. If there it'll be a string array
        }

        const starWars: Movie = {
            title: 'Star Wars',
            director: 'Lucas',
            yearReleased: 1977
        }
        //Union types allow for multiple types of values to come out of an interface or combine interfaces

        const userFaves: (Movie | AnimeInfo)[]=[];

        userFaves.push(dbz)

        //Will commonly see this union in S2 as the linter treats undefined as its own type
        let doesMaxWantLunch: string | undefined= 'yes'

        //doesMaxWantLunch = true;
        // Type alias can cover multiple types
        // Does not seem to be used in S2 much but is likely there
        type Media = AnimeInfo | Movie; //Other interfaces

        let faveMedia: Media
    });

    it('is about enums', () => {
        enum Direction {
            Up=0,
            Down=1,
            left=2,
            right=3
        }

        let startingDirection = Direction.left

        let sum = Direction.Down +1; //2
    });

    it('interface practice', () => {
        //Define cat
        //Can create a smaller interface and reference it inside the larger interface
        //Can put object inside interface to make it drill down, but not always done
        interface cat {
            name: string;
            age: number;
            mainColor: string;
            subColors?: string[];
            weight: number;
            eyeColor: string[]
            type: string;
            isCat: boolean;
        }
        //Ex of interface with object drill down.
        interface max {
            firstName: string;
            lastName: string;
            age: number;
            height: string;
            location: string;
            car: {
                make: string;
                model: string;
                year: number;
            };
            hobbies: string[];
            Siblings: {
                count: number;
                names: string[];
            };
            knowsAngular: boolean;
        }

        let someCreature: cat = {
            name: 'Max',
            age: 12,
            mainColor: 'orange',
            weight:45,
            eyeColor: ['blue'],
            type: 'persian',
            isCat: false
        };
    });

});

describe('useful to talk about basic js/ts structures', () => {
    
    it('should talk about operators', () => {
        //==
        //Implicit type conversion which messes people up. DONT USE

        //=== the correct comparison
        //10 % 7 wil return 3
        // Any mod off 2 w/ 0 as result is an even number
        //JS modules keep he sign of the dividend with negatives
        //Stay away from ++ or --
        //++
    });

    it('conditionals', () => {
        let condition = true;
        if (condition) { // conditional always results in a true, false, truthy, fals

        }

        // ternary
        // short-hand conditional
        const isAwesome = condition ? 'yup':'nope' // The same as an if else statment

        const isTurkey = true;

        let isBacon = condition ? 'yup' : isTurkey ? 'No turkey' : 'cardboard' // Nested ternary
    });

    it('loop exist', () => {
        // use and array method in most for loops
        const zooAnimals = ['zebra', 'turkeys', 'heffalumps']
        for(let index=0; index < zooAnimals.length;index++){
            zooAnimals[index]
        }

        for (const animal of zooAnimals) {
            console.log(animal); 
            // this is where something is done with the value
            //Typically done with arrays
        }

        let student = {
            name: 'max',
            age: 32,
            isCoffeed: true
        }
        //For in loop loops through keys of an object. For each loop loops through values of an array
            //For in loop returns the key(First iteration will equal key, 2nd iteration will be 32 as a string)
        for (const key in student) {
            if (Object.prototype.hasOwnProperty.call(student, key)) {
                const element = student[key];
                
            }
        }

        //Short circuit evaluation

    });
    it('Syntactic sugar 1', () => {
        let grandParent = {
            parent: {
                child: {
                    grandChild = 'dave'
                }
            }
        }

        let grandParent2 = {
            parent: {
                taco: 'what'
            }
        }
        // short circuit evaluation
        //if(grandParent2.parent.child.grandChild === 'jeff') // Won't be able to find child element
        //Have to check these because one property may not have a value
        if(grandParent && grandParent.parent && grandParent.parent.child && grandParent.parent.child.grandChild === 'dave'){
            //Make sure an item exists before we search for it or else we will get a runtime error
        } //Have to do all of this to make sure childs name is dave

        //elvis operator (aka optional chaining operator) 
        //Questions mark before period basically says does this exist?
        if(grandParent?.parent?.child?.grandChild === 'dave'){ // this is the same as above but cleaner

        }

        // nullish coalescing
        let childName = grandParent2?.parent?.child?.grandChild ?? 'bob' //?? says if the item doesn't exist use this
    });
});

describe('Functions', () => {
    it('basics', () => {
        let sum = addTwoNumbers(2, 4) //Hoisted to teh top of the scope. Means it can be called before it is initialized
        //Hoists occur for functions and vars
        //Don't have to have parameters or have a return value, Functions implicitly return a void 
        
        //Anonymous function. Function without a name 
        const addToSeven = (firstNum: number) => {
            //If you have more than one executable line you need curlies. Less than one executable line no curlies
            return firstNum + 7
        }

        const lognumber = (someNum: number): void => {
            console.log(someNum)
        }
        //Equal sign in parameters is a default, ? is an optional. optional has to be the last parameter
        const addNumbers = (num1: number, num2: number = 5, num3?: number) => num1+num2 + (num3 ? num3: 0); //In one liners the return is implicit
        addNumbers(7)//12
        addNumbers(7,2)//9
        addNumbers(7,2,1)//10
        const pizzaFunction = function(toppings: string[]) {} //Anonymous function because it is assigned to a variable without a name

        let fifteen = addToSeven(8);
    });
    it('function practice', () => {
        // write a function that takes a number returns true or false if that number is even
        const isEven = (num: number): boolean => (num % 2) === 0 ? true : false; 
    });

    type functionThatTakesNothingAndGivesNothing = () => void;

    it('higher order functions', () => { //A function that gets passed to another function to do something
        function doSomethingThenSomethingElse(someThingElseToDo: functionThatTakesNothingAndGivesNothing) {
            //do something
            //Code
            someThingElseToDo()
        }
        //Anonymous function
        doSomethingThenSomethingElse(() => console.log('Hi we did it'))
        //Higher order functions with callbacks that can take other functions as parameters
        function doSomethingWithResult(callbackFromUser: (taco: string) => void){
            //pretend we made an api call taht returned a pokemon name
            let pokemonName = 'pikachu'
            callbackFromUser(pokemonName);
        }

        doSomethingWithResult((data) => console.log(data))
    });

    it('uses array functions', () => {
        const array1 = [1,4,9,16]
        //map takes an array and creates a copy. Manipulate each element in the copied array
        //Passed on function I provided
        //return the mutated copy
        const map1 = array1.map(x => x * 2)
    });

    it('uses array functions', () => {

        const arr = [1,2,3,4];

      let fakeMap = (arr: any[], mutater: any) => {
          let copy = [...arr]
          for (let index of copy) {
              index = mutater(index);
          }
          return copy;
      }

        const map1 = arr.map(x => x*2);

        //Use of array filter method
        const evenNumbers = arr.filter(number => (number % 2) === 0)
    });

    it('Map practice', () => {
        let numeros = [1,6,3,8,6,9,9];
        let arrOfBools: boolean[];
        //This will return a value of 0 which is falsy so you need the bang to get the correct value
        //const isEven = (num: number):boolean => !(num%2); //Bang is necessary here
        arrOfBools = numeros.map(someFunc);
        arrOfBools = numeros.map(numero => ((numero % 2) === 0 ? true:false))
        arrOfBools = numeros.map((i: number) => !(i%2))

        let pie = OtherUtils.PI;

        // use map to take numeros initialze and array of booleans determining if the numbers are even or not
    });
});