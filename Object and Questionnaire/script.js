//класс Работник
class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = Number(rate);
      this.days = Number(days);
    }
  
    getSalary() {
      return this.rate*this.days;
    }}
  
    let worker = new Worker('Иван', 'Иванов', 10, 31);

    console.log(worker.name); 
    console.log(worker.surname); 
    console.log(worker.rate); 
    console.log(worker.days); 
    console.log(worker.getSalary()); 

// Опросник
class Cat {
    constructor(nickname, breed, feed, sex) {
      this.nickname = nickname;
      this.breed = breed;
      this.sex = sex;
      this.feed = feed;
    }}

let params = [];

function addNickname() {
    document.getElementById("errorNickname").style.display = "none"; 
    let myNickname;
    let nickname = document.getElementById('nickname').value;
    if (nickname == "") {
        document.getElementById("errorNickname").style.display = "block"; 
    } else {
        document.getElementById("errorNickname").style.display = "none"; 
        myNickname = nickname;
        params.push(myNickname);
}
}

function selectBreed() {
    document.getElementById("errorBreed").style.display = "none"; 
    let myBreed;
    let breed = document.getElementById('breed');
    if (breed.options[breed.selectedIndex].value == "none") {
    document.getElementById("errorBreed").style.display = "block"; 
    } else {
    document.getElementById("errorBreed").style.display = "none"; 
    myBreed = breed.options[breed.selectedIndex].value;
    params.push(myBreed);
}
}

function selectFeed() {
    document.getElementById("errorFeed").style.display = "none"; 
    let myFeed = [];
    let foods = document.getElementsByName("food");
    for (let i = 0; i < foods.length; i++) {
    if ( foods[i].checked ) {
        myFeed.push(foods[i].value);
        }
    }
    for (let food of foods)  {   
            if (food.checked) {
                document.getElementById("errorFeed").style.display = "none"; 
                params.push(myFeed);
                break;
            } else {
                document.getElementById("errorFeed").style.display = "block"; 
            }
        }
}

function selectSex() {
    document.getElementById("errorSex").style.display = "none"; 
    let mySex;
    let sexes = document.getElementsByName("sex");
    for (let sex of sexes) {
        if (sex.checked) {
        document.getElementById("errorSex").style.display = "none"; 
        mySex = sex.value;
        params.push(mySex);
        break;
    } else {
        document.getElementById("errorSex").style.display = "block"; 
    }
}}


document.getElementById('submit').addEventListener ('click', function() {
    let myCat = new Cat(params[0], params[1], params[3], params[2]); 
    if (myCat.nickname == undefined || myCat.breed == undefined || myCat.sex == undefined ||myCat.feed == undefined) {
        delete myCat;
    } else {
    console.log(myCat);}
    params = [];
    
}
);



/*Функции из onclick из задания с анкетой питомца, лучше поместить в addEventListener срабатывающий на submit формы - document.getElementById('submit').addEventListener
Массив params из анкеты питомца было бы грамотнее заменить на объект, в котором будут заданы свойства name, feed, breed и sex позже в создании экземпляра класса можно будет не использовать индексы массива что бы вытаскивать значения, а обращаться к знамению в объекте через ключ - let myCat = new Cat(params.name, params.breed, params.feed, params.sex);*/
