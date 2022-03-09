import { isEven } from "./isEven";



export function isEvenTruncateDecimal(n: number): boolean {

    const val = Math.floor(n);

    return isEven(val);

}

export const max = {
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


export const PI = 3.1415927;