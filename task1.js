// 1.
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log(myAlphabet.length);

let lessthanf = () => {
    if (myAlphabet.length < 4) {
        return "length is less than 4"
        
    }else{
        return "length is more than 4"
    }
    }

// 2.
checkFunc = (string, boolean) => {
    return string + " " + boolean
  }
  console.log(checkFunc("John", true))
  


// 3.
const Planets = ['Mars', 'Venera', 'Earth', 'Uran', 'Neptun'];
console.log(Planets);
for (let i = 0; i < Planets.length; i++){
    let indexItems = Planets[i];
    console.log(indexItems);
}


// // 4.


let wowDatatypes = ['java', 13, true];
for (let a = 0; 0 < wowDatatypes.length; ++a){
    console.log(wowDatatypes[a] + " " + wowDatatypes.indexOf(wowDatatypes[a]) + " " + typeof(wowDatatypes[a]));
break;
}

 // 5.
const myArr = [ 1, 2, 'One', true];
myArr.forEach(function(arr){
    console.log(arr);
})

// // 6.
let student1Courses = ['Math', 'English', 'Programming'];

let student2Courses = ['Geography', 'Spanish', 'Programming'];

 for(let b = 0; b < student1Courses.length; b++) {
for(let a = 0; a < student2Courses.length; a++) {
    if (student1Courses[b] === student2Courses[a]) {
       console.log(student1Courses[b]+ " = " +student2Courses[a]);
    
    }
}
 }

// 7.
let food = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

for (let a = 0; a < food.length; a++){
    if (food2.includes(food[a]))
    console.log(food[a]);
}

     


// 8.s
let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];

for(let a = 0; a < values1.length; a++){
    for (let b = 0; b < values2.length; b++){
        if (values1[a] == values2[b]){
            console.log(values3[b]);
        }
    }
}

// 9.
let furniture = ['Table', 'Chairs','Couch'];

for( let a= 0; a < furniture.length; a++){
console.log(furniture[a][0]);
}

