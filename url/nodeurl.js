// let url = require("url")

// console.log(url)
// const urlStr = "https://www.bilibili.com/video/BV1i7411G7kW?p=9"
// // 解析路径的详细信息
// console.log(url.parse(urlStr))
// let axios = require("axios")
// let httpUrl ="https://www.bilibili.com/video/BV1i7411G7kW?p=9"
// axios.get(httpUrl).then(res => {
//   console.log(res)
// })
const { resolve } = require("path")
const request = require("request")

let url = "https://www.1905.com/vod/list/n_1_t_1/o3p1.html"




function req(url){
  return new Promise(function(resolve,reject){
    request.get(url,function(err,res,body){
      if(err){
        reject(err)
      }else{
        resolve(res,body)
      }
    })
  })
}


async function getClassUrl(){
  const{res,body} = await req(url)
  // console.log(body)
  let reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs
  let result = reg.exec(body)[1]
  // console.log(result)

  let reg1 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" .*?>(.*?)<\/a>/igs

  let arrClass =[]
  var reslist;
  while(reslist = reg1.exec(result)){
    let obj={
      className:reslist[2],
      url:reslist[1]
    }
    // console.log(obj)
    arrClass.push(obj)
    // console.log(reslist[1])
    getMovies(reslist[1])
  }

  
  // console.log(arrClass)
}

async function getMovies(url){
  let{res,body} = await req(url)
  // console.log(body)
  let reg =/<a class="pic-pack-outer" target="_blank" href="(.*?)" title="(.*?)".*?><img/igs
  var listres;
  let attlist=[]
  while(listres = reg.exec(body)){
    obj={
      name:listres[2],
      url:listres[1]
    }
    attlist.push(obj)
  }
  console.log(attlist)
}

getClassUrl()