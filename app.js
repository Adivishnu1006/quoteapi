fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let Rquote= Math.floor(Math.random()*1000);
    document.getElementById("quote").innerHTML=data[Rquote].text
    document.getElementById("author").innerHTML=data[Rquote].author

   

  });

  function reloadPage(){
    location.reload();
  }
