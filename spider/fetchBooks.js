const axios = require('axios');
const cheerio = require('cheerio');
const Book = require('../models/Book')
// 抓取豆瓣读书中的数据信息
async function getBooksHtml(){
   const res = await axios.get("https://book.douban.com/latest");
   return res.data;
}

//得到所有书箱的详情页链接数组
async function getBooksLink(){
    const html = await getBooksHtml();
    const $ = cheerio.load(html);
    const linksEle = $("#content .grid-12-12 li a.cover")
    const links = linksEle.map((i,ele)=>{
        const href = ele.attribs["href"];
        return href;
    }).get();
    return links;
}

//得到书籍信息
async function getBookDetail(href){
    const res = await axios.get(href);
    const html = res.data;
    const $ = cheerio.load(html);
    const name = $("h1").text().trim();
    const img = $("#mainpic a.nbg img").attr("src");
    const spans = $("#info span.pl");
    const authorSpan = spans.filter((i,ele)=>{
        return $(ele).text().includes('作者')
    });
    const author = authorSpan.next("a").text();
    const timeSpan = spans.filter((i,ele)=>{
        return $(ele).text().includes('出版年')
    });
    const time = timeSpan[0].nextSibling.nodeValue;
    return {
        name,
        img,
        time,
        author
    }
}

//得到所有书籍的信息并保存到数据库
async function getAllInfo(){
    const links = await getBooksLink();
    const proms = links.map((href)=>{
        return getBookDetail(href)
    });
    Promise.all(proms).then(data=>{
        console.log(data)
        Book.bulkCreate(data);
        console.log("抓取数据并保存到了数据库")
    })
}

getAllInfo()