const fs = require("fs")
const request = require("request")
const https = require("https")

// function a () {
//   request("https://www.valentino.com/variants/images/7789028784813600/R/w400.jpg").pipe(fs.createWriteStream("a.jpg").on("close",err => {
//     console.log(err)
//   }))
// }
// a()

const options ={
  "hostname":"www.valentino.com",
  "path":"/variants/images/7789028784813600/R/w400.jpg",
  "method":"GET",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36"
}
https.get(options,res =>{
  console.log(res.headers)
  res.on("data",d => {
    console.log(d)
   
  })
  res.on("error",e => {
    console.log(e)
  })
})
