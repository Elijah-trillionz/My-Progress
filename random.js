// const paras = document.getElementsByTagName('p');
// const project = document.querySelector('h3');
// const right = document.querySelector('#right');
// const other = document.querySelector('#other')
// console.log(project)
// project.style.display = 'none';
// const m = project.innerHTML;

// const arr = [m]

// setInterval(() => {
//     const randomNumbers = Math.floor(Math.random() * 1);
//     other.innerHTML += (arr[randomNumbers] + '<br>');
// }, 1000);
//All project's htmlcollectionlist and nodelist needed
const projectStoreHouse = document.querySelector('.project-store-house');
const pro = projectStoreHouse.getElementsByTagName('span');
const leftPro = document.querySelector('.left');
const leftBtn = document.querySelector('.left-button');
const para1 = document.querySelector('.p1');
leftBtn.addEventListener('click', project);
projectStoreHouse.style.display = 'none';

//All exercises's htmlcollectionlist and nodelist needed
const exerciseStoreHouse = document.querySelector('.exercise-store-house');
const exe = exerciseStoreHouse.getElementsByTagName('span');
const rightExe = document.querySelector('.right');
const rightBtn = document.querySelector('.right-button');
const para2 = document.querySelector('.p2');
rightBtn.addEventListener('click', exercise)
exerciseStoreHouse.style.display = 'none';
rightExe.innerHTML = exe[0].innerText; //21
leftPro.innerHTML = pro[0].innerText; //40

//function for projects
function project() {
    para1.style.visibility = 'hidden';
    const projectCollection = [pro[0].innerText, pro[1].innerText, pro[2].innerText, pro[3].innerText, pro[4].innerText, pro[5].innerText, pro[6].innerText, pro[7].innerText, pro[8].innerText, pro[9].innerText, pro[10].innerText, pro[11].innerText, pro[12].innerText, pro[13].innerText, pro[14].innerText, pro[15].innerText, pro[16].innerText, pro[17].innerText, pro[18].innerText, pro[19].innerText, pro[20].innerText, pro[21].innerText, pro[22].innerText, pro[23].innerText, pro[24].innerText, pro[25].innerText, pro[26].innerText, pro[27].innerText, pro[28].innerText, pro[29].innerText, pro[30].innerText, pro[31].innerText, pro[32].innerText, pro[33].innerText, pro[34].innerText, pro[35].innerText, pro[36].innerText, pro[37].innerText, pro[38].innerText, pro[39].innerText]
    const randomSelection = Math.floor(Math.random() * 39);
    leftPro.innerHTML = projectCollection[randomSelection];
}

//function for exercises
function exercise() {
    para2.style.display = 'none';
    const exerciseCollection = [exe[0].innerText, exe[1].innerText, exe[2].innerText, exe[3].innerText, exe[4].innerText, exe[5].innerText, exe[6].innerText, exe[7].innerText, exe[8].innerText, exe[9].innerText, exe[10].innerText, exe[11].innerText, exe[12].innerText, exe[13].innerText, exe[14].innerText, exe[15].innerText, exe[16].innerText, exe[17].innerText, exe[18].innerText, exe[19].innerText, exe[20].innerText]
    const randomSelection = Math.floor(Math.random() * 20)
    rightExe.innerHTML = exerciseCollection[randomSelection];
}