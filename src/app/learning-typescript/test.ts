export function giveMeTuple(): [number, string] {
    let random = Math.floor(Math.random() *10) //0-9
    let students = ['praveen', 'emily', 'samarpita', 'luke'];
    return [random, students[random]]
}

console.log(giveMeTuple());