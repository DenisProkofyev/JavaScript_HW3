/* Task 3**
В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)*/

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]


/*Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/

const countEnding = function (number) {
  endingNumbers = number.toString().split('').slice(-2).join('')
  lastNumber = number.toString().split('').pop()
 // console.log(endingNumbers)
  // console.log(lastNumber)
  if (endingNumbers && number) {
    if (endingNumbers > 10 && endingNumbers < 15) return `${number} сотрудников`
    if (lastNumber == 1) return `${number} сотрудник`
      else if (lastNumber > 1 && lastNumber < 5) return `${number} сотрудника`
      else return `${number} сотрудников`
      } else return 'Нет сотрудников'
  
}
// !(endingNumbers > 10 && endingNumbers < 15) &&

const getEnterprises = function(enterprises) {
  enterprises.forEach(el => {
    let employees = 0
    let depts = []
    depts.push(el.name)
    if (el.departments) {
      el.departments.forEach(dept => {
      employees = employees + dept.employees_count 
      depts.push(` - ${dept.name}: ${countEnding(dept.employees_count)}`)
    })
    depts[0] += `: ${countEnding(employees)}`
  }
  console.log(depts.join('\n'))
  })
}
getEnterprises(enterprises)


/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела) и возвращать название предприятия, к которому относится.

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/
const getEnterpriseName = function (title) {
  let enterpriseName;
  enterprises.forEach(ent => {
    let department;
    if (ent.departments) {
      department = ent.departments.find(dept => {return dept.id === title || dept.name === title})
    }
    if (department) enterpriseName = ent
  })
  return enterpriseName ? enterpriseName: `Нет организации с id или именем == ${title}`
}
console.log(getEnterpriseName(2))

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")*/

const newId = function(enterprises) {
  let maxId = 0;
  enterprises.forEach(ent => {
    if (maxId < ent.id) maxId = ent.id
    if (ent.departments)
      ent.departments.forEach(dept => {
        if (maxId < dept.id) maxId = dept.id
      })
  })
  return maxId + 1
}

const addEnterprise = function (title) {
  enterprises.push({
    id: newId(enterprises),
    name: title,
    departments: []
  })
}
addEnterprise('NewOne')
console.log(enterprises)

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел, и название отдела.

Пример:
addDepartment(1, "Название нового отдела")*/
const getEnterprise = function(val) {
  let enterprise = enterprises.find(el => el.id === val || el.name === val)
  return enterprise ? enterprise : 'Нет организации с таким id или именем'
}
console.log(getEnterprise(9))
const addDepartment = function(compId, deptName, count = 0) {
  const enterprise = getEnterprise(compId)
  if (enterprise) enterprise.departments.push({
    id: newId(enterprises),
    name: deptName,
    employees_count: count
  })
}
  addDepartment(11, 'NewTesters', 15)
  console.log(enterprises[3])
 
 /* let compId = 0;
  enterprises.forEach(ent => {
    if (compId == ent.id) 
  enterprises[compId].departments.push({
    id: newId(enterprises),
    name: deptName
  })
}) */

//addDepartment(1, 'Testing')

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
const editEnterprise = function
Пример:
editEnterprise(1, "Новое название предприятия")*/

const editEnterprise = function(val, name) {
  const enterprise = getEnterprise(val)
  if (enterprise) enterprise.name = name
  else throw new Error('No such company')
  }
editEnterprise(11, 'Devs')
console.log(enterprises[3])

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
const editDepartment = function
Пример:
editDepartment(7, "Новое название отдела")*/
const getDepartment = function(val) {
  let department
  enterprises.forEach((company) => {
  const dept = company.departments.find((el) => {
    return el.id === val || el.name === val
  })
  if (dept) department = dept
  })
  return department ? department : 'Нет департамента с таким id или именем'
}
console.log(getDepartment(2))

const editDepartment = function (val, name) {
  const department = getDepartment(val)
  if (department) department.name = name
  else throw new Error("No such department")
}
editDepartment(12, 'Gaming testing')
console.log(enterprises[3])

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
const deleteEnterprise = function
Пример:
deleteEnterprise(1)*/

const deleteEnterprise = function(val) {
  const index = enterprise.findIndex(el => el.id === val)
  enterprises.splice(index, 1)
}
//deleteEnterprise(9)
//console.log(enterprises)

/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
const deleteDepartment = function
Пример:
deleteDepartment(3)*/

const deleteDepartment = function (val) {
  enterprises.forEach(el => {
    let index = el.departments.findIndex(dept => dept.id === val && dept.employees_count === 0)
    if (index !== -1) {
      el.departments.splice(index, 1)
    }
  })
}
//deleteDepartment(10)
console.log(enterprises[2])

//9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
//const moveEmployees = function
//Пример:
//moveEmployees(2, 3)
const moveEmployees = function (currentId, newId) {
  const current = getDepartment(currentId)
  const newDept = getDepartment(newId)
  if (current && newDept && getEnterpriseName(currentId) === getEnterpriseName(newId)) {
    newDept.employees_count += current.employees_count
    current.employees_count = 0
  } else throw new Error('Mistake')
}
//moveEmployees(2,3)
console.log(enterprises[0])
