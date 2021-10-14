let id = document.querySelector('.input_id')
let nameCol = document.querySelector('.input_name')

async function createUser (user) {
  console.log(user)
  const rawResponse = await fetch('https://kurs-db.herokuapp.com/db', {
    // mode: 'no-cors',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  },
  console.log('fetch'));
  const content = await rawResponse.json();
  console.log(content)
};

document.querySelector('.send_btn').addEventListener('click', () => {
  createUser({
    id: id.value,
    name: nameCol.value
  })
})