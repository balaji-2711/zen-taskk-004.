
 
var request = new XMLHttpRequest
var method = 'GET'
var api = 'https://restcountries.com/v3.1/all'
request.open(method,api)
request.send()


request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data)
    // console.log(JSON.stringify(data[0]));


//     // question 2
for(let i of data){
console.log(i["flags"]["png"])
  
}

//  question 3(1)
//  for(let i of data){
//     console.log(i["name"]["common"])
      
//     }

 // question 3(2)
//  for(let i of data){
//     console.log(i["region"])
      
//     }

// question 3(3)
    // for(let i of data){
    //     console.log(i["subregion"])
          
    //     }

        // question 3(4)
        // for(let i of data){
        //     console.log(i["population"])
              
        //     }
        
}

// var valu = Object.keys(i.name.nativeName)[0]
// console.log(i["name"]["nativeName"][valu]["common"]);