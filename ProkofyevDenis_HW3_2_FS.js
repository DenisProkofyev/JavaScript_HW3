    /* Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании */
    
    const fs = require('fs')

    let task2 = JSON.parse(fs.readFileSync('task2.json'))

const uniqueNames = [... new Map(task2.map((person) => [person["name"], person])).values()]
console.log("Unique", uniqueNames)