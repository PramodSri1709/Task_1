var request = new XMLHttpRequest();

var restCountries = "https://restcountries.eu/rest/v2/all"

request.open("GET", restCountries , true);

request.send();

request.onload = function(){

var data = JSON.parse(this.response)



for(i in data ){
    var res = data.filter(function foo(element){
         
        return element.region === "Asia" 

});
    var pop = data.filter((ele) => {
        return ele.population < 200000
    })

}
console.log(pop)

console.log(res)




var data4 = data.reduce(function compute(accumulator,element){
    return element.population + accumulator;
},0);
console.log(data4);


var data3 = data.filter((ele)=>{
    for(var i in ele.currencies){
      if(ele.currencies[i].code==='USD'){
      return true;   
    }
}
}).map(ele=>console.log(ele.name));

}
