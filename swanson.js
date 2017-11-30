const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteTxt = document.getElementById('quote');
const xhrBtn = document.getElementById('xhr');
const fetchBtn = document.getElementById('fetch');
const jQueryBtn = document.getElementById('jquery');
const axiosBtn = document.getElementById('axios');

//XHR
xhrBtn.addEventListener("click", () => {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      quoteTxt.innerText = data;
    }
  }
  XHR.open("GET", url);
  XHR.send();
})

//Fetch
fetchBtn.addEventListener("click", () => {
  fetch(url)
  .then(function(response) {
    if(!response.ok) {
      throw Error(response.status)
    }
    let data = response.json();
    return data
  })
  .then(function(data) {
    quoteTxt.innerText = data[0];
  })
  .catch(function(err) {
    console.log(err);
  })
})

//jQuery
$(jQueryBtn).click( () => {
  $.ajax({
    method: "GET",
    url: url,
    // dataType: "json"
  })
  .done(function(response) {
    $(quoteTxt).text(response[0])
  })
  .fail(function() {
    console.log("There was an error");
  })
})

//Axios
axiosBtn.addEventListener("click", () => {
  axios.get(url)
  .then(response => quoteTxt.innerText = response.data)
  .catch(() => console.log("there was an error"));
});