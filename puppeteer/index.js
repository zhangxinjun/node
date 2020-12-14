const puppeteer = require("puppeteer")

async function getNum() {
  // {headless:false}表示有浏览器界面打开
  // defaultViewport设置浏览器窗口大小
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1800, height: 1000
    }
  });
  const page = await browser.newPage();
  await page.goto("https://sobooks.cc/")
  let pageNum = await page.$eval(".pagination li:last-child span", element => {
    let text = element.innerHTML
    text = text.substring(1, text.length - 1).trim()
    return text
  })
  console.log("总页数"+pageNum)
  return pageNum
 
}
 let pageNum =  getNum()
 console.log("====="+pageNum)
async function pageList(num) {
  let pageListUrl = "https://sobooks.cc/page/" + num
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1800, height: 1000
    }
  });
  const page = await browser.newPage();
  await page.goto(pageListUrl)
  let arrPage = await page.$$eval(".card .card-item .thumb-img>a", elements => {
    let arr = []
    elements.forEach((element, index) => {
      var obj = {
        href: element.getAttribute("href"),
        title: element.getAttribute("title")
      }
      arr.push(obj)
    })

    return arr
  })
  console.log("当前页"+arrPage)
}
let page = pageList(1)
console.log("page"+page)