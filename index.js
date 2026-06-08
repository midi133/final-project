/*漢堡選單*/ 
const menuBtn = document.querySelector('.menu-btn') /*行動版漢堡按鈕*/ 
const navlist = document.querySelector('.nav-list') /*主導覽選單元素*/ 

menuBtn.addEventListener('click', function () {
    navlist.classList.toggle('active')              /*有 active 就移除，沒有就加上*/
    document.body.classList.toggle('menu-open')     /*有 menu-open 就移除，沒有就加上*/
    })