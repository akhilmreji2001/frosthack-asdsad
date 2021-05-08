
document.getElementById("cardbody1").addEventListener("mouseenter",newwind);
document.getElementById("header").onclick = newwind2;

function newwind()
{
    window.open("https://www.home.sandvik/en/stories/articles/2020/11/digital-technology-on-the-cutting-edge/","_blank");
}
function newwind2()
{
    window.open("https://www.home.sandvik/en/stories/articles/2019/11/5g-is-finally-here-this-is-what-you-need-to-know/","_blank");
}
function newwind3()
{
    window.open("https://www.home.sandvik/en/stories/articles/2019/11/5g-is-finally-here-this-is-what-you-need-to-know/","_blank");
}
function newwind6()
{
    window.open("https://www.home.sandvik/en/stories/articles/2018/02/data-the-next-great-resource/","_blank");
}
function newwind4()
{
    window.open("https://financialwolves.com/get-paid-to-code-online/","_blank");
}

document.getElementById("header").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}