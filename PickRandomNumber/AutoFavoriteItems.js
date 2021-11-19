function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

setInterval(function(){ 
  $.post("/api/catalog/favourite", {id: randomIntFromInterval(5000, 10000), csrf: "your csrf token"}, function (data) {
    if (data == "success") {
      //LoadFavourites();
    } else {
      console.error("Couldn't favourite item: " + data);
    }
  })
}, 100);
