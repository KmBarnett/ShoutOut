export const APICall = async (url) => {
  const data = await fetch('https://shout-out-turing.herokuapp.com/api/v1/ideas')
    .then(res => res.json())
    .catch(err => console.error(err.message))
  return data
}

export const APIPost = async (idea) => {
  let options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...idea})
  }
  const newIdea = await fetch('https://shout-out-turing.herokuapp.com/api/v1/ideas', options)
  .then(res => res.json())
  .catch(err => console.error(err.message))
  return newIdea
}

export const APIDelete = async (id, adminPassword) => {
  let options = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password: adminPassword})
  }
  const newIdea = await fetch(`https://shout-out-turing.herokuapp.com/api/v1/ideas/${id}`, options)
  .then(res => res.json())
  .catch(err => console.error(err.message))
}
