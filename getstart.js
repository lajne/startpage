
// För att testa koden, lägg in dessa script-taggar i html(vue?)-koden :)

// <script src="data.js"></script>
// <script src="getstart.js"></script>

let getStartDef = function(callback) {
  setTimeout( () => {
    let mydata = window["myData"];
    console.log("hiiiit", mydata);
    callback(mydata);
  }, 2000);
};

 getStartDef((data) => {
  console.log("Fick data", data);
 });
