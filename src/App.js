const apiUrl = process.env.REACT_APP_BACKEND_URL;

fetch(`${apiUrl}/api/some-endpoint`)
  .then(response => response.json())
  .then(data => console.log(data));