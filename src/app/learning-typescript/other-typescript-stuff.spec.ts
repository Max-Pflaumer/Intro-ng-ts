import { max } from "../utils/otherUtils";
import { addTwoNumbers } from "../utils/add-two-numbers";

describe('cool stuff in ts', () => {
    it('should spread like butter', () => {
        //spread operator
        //...
        //denotes spreading the indicies of an array or object across a new structure
        //Used to create a new array that is a deep copy of an old array

        const myNums: number[] = [1,5,3,9]

        //spread the indexes of mynums across this new array
        let spreadNums: number[] = [...myNums]
        //SpreadNums is a deep copy of myNums. Did not mutate myNums at all to create this

        let boringSpread = myNums.map((eachNum:number) => eachNum) //This does the same thing as spread
        //TO do something more transformative, would use map. Just copy and return should use spread

        //Many spreads are used to create a deep copy and make small mutations

        let moreNums: number[] | any[] = [...myNums, 7, 2, 44]; //Can add items when using the spread operator
        // W/o spread operator then the myNums array would be the first value in the array

        let myTwoNumbers: [number,number] = [2,3]; //Adding more values would require more number types as well

        addTwoNumbers(myTwoNumbers[0], myTwoNumbers[1]); //Possible way to represent this

        addTwoNumbers(...myTwoNumbers) //Must be represented as a tuple. 
        
    });

    it('spread with objects', () => {
        let superMax = {
            ...max
        };

        let faveFood = {
            food: 'taco'
        };

        console.log(superMax) //Max interface

        const largeMax = {
            ...superMax,
            ...faveFood, //Adding another object to the new object
            superPower: 'flight', // adding new property
            location: 'Denver?' //Rewrite an existing property in the object. Can be done because it is done after the spread operator
        }

    });

    it('should use the rest', () => {
        //the rest operator
        //...

        const myNums: number[] = [1,5,3,9]

        function addSomeNumbers(...theNumbers: number[]){ //Rest operator makes that parameter an array
            const initialValue = 0;
            //Reduce can be difficult to use at times. Kinda complicated
            //the numbers would be an array, so it can be treated as such
            return theNumbers.reduce((acc, current) => acc + current)//Previous value is going to be the first thing in the array the first time. Current value will be the current indexed value
            //Initial value doesn't haven't to be specified. Will default to 0
        }

        addSomeNumbers(...myNums)

        function simon(param1: number, param2: number, ...theRest: any[]){ //The rest will be an optional parameter. Will come in as an array

        }

        simon(7,4,'taco', 'lizard', 'leeroy'); //Param 1 would be 7, param 2 would be 4, an array of any of the last values
        //function()
    })

    it('desctructuring', () => {
        //Objects are not iterables. Can't regularly do
        //Can iterate through specific parts of objects with specific functions

        function giveMeTuple(): [number, string] {
            let random = Math.floor(Math.random() *10) //0-9
            let students = ['praveen', 'emily', 'samarpita', 'luke'];
            return [random, students[random]]
        }

        //If you see array brackets where you are expecting a variable name it is likely array descructuring
        //Need comma delimited space to represent items in destructured array
        //const [index0,,index2] = data.data

        //Object destructuring is similar to array
        //Instead of coming up with your own names you must use property names

        const {firstName, age} = max;
        //can reference both variables for value
        //Same as const name = max.firstname
        //const age =max.age
    });
});