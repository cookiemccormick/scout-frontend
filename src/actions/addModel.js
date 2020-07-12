export const addModel = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/models', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'ADD_MODEL',
      payload: model
    }))
  };
}