/* Task 4****

В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено.

Задание: написать функцию:

Функция строит древовидный список компании.
При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдением вложенности подразделений.*/

const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]
  
 const showArray = function (company, counter = '') {
  company.forEach(comp => {
    console.log(`${counter}${counter === '' ? '' : ' '}${comp.name} (${comp.users_count})`)
    if (comp.children) {
      counter = counter + '--'
      showArray(comp.children, counter)
      counter = counter.slice(0, -2)
    }
  })
 }
showArray(company)
  /* 
   
  Пример:
  
  Компания (10)
  -- Отдел тестирования (7)
  ---- Тестирование Web (5)
  ---- Тестирование Mobile (0)
  -- Отдел маркетинга (30)
  -- Администрация (25)
  ---- Бухгалтерия (10)
  ---- Менеджмент (15)
  ------ Подраздел менеджмента 1 (5)
  ------ Подраздел менеджмента 2 (10)
  ---- HR (1)
  */