const puppeteer = require("puppeteer")

async function test() {
  // {headless:false}表示有浏览器界面打开
  // defaultViewport设置浏览器窗口大小
  const browser = await puppeteer.launch({
    headless: false, defaultViewport: {
      width: 1800, height: 1000
    }
  });
  const page = await browser.newPage();
  // await page.goto("https://www.jianshu.com/p/eee456d7543f?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation")

  await page.goto("https://www.jianshu.com/p/eee456d7543f?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation")
  inputEle = await page.$("._1OhGeD")
  console.log(inputEle)

  // 屏幕截图
  // await page.screenshot({path:"screenshot.png"})
  // $$eval使得我们的回调函数内部的大麦可以在浏览器中运行
  // page.$$eval("#menu", (element) => {
  //   // console.log(element)
  //   element.forEach(item => {
  //     console.log(item.innerHTML)
  //   })
  // })

  // 监听上方的console事件
  // page.on("console", function (event) {
  //   console.log(event.text())
  // })
}



test()