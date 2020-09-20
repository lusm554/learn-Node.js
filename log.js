const obj = {
    name: 'Nikita',
    age: 17,
    person1: {
        name: 'John',
        age: 21,
        person2: {
            name: 'Peter',
            age: 23
        }
    }
}


console.log(
    JSON.stringify(obj, null, 2)
)