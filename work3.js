users = [
    {
      name: "Иван",
      age: 12
    },
    {
      name: "Денис",
      age: 18
    },
    {
      name: "Ольга",
      age: 23
    }
  ]
  const filterAge = users.filter((user) => user.age >= 18)
  console.log(filterAge)