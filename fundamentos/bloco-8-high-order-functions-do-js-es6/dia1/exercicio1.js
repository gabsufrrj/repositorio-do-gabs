const newEmployees = () => {
  const employees = {
    id1: 'Pedro Guerra', 
    id2: 'Luiza Drummond', 
    id3: 'Carla Paiva', 
  }
  return employees;
};

function trybers(callback) {
  const array = []
  for (value in callback) {
    array.push(`${callback[value]}@trybe.com`)
  }
  return array
}

console.log(trybers(newEmployees()))
