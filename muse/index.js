const axios = require("axios");


async function getPage(num) {
  let url = "http://www.app-echo.com/api/recommend/sound-day?page="+num
  let res = await axios.get(url)
  res.data.list.forEach((item,index) => {
    let title = item.sound.name
    let dowlondUrl = item.sound.source
    console.log(title,dowlondUrl)
  });
 
}

function dowlond (url){

}
getPage(1)