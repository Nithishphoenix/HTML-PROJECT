//Loops
//console.log('hello')

//for , while , do-while

for(let i=1;i<=5;i++){
    console.log('hello')
}

let i
for(i=1;i<=5;i++){
    console.log(i)
}

console.log('outside loop', i )

//print 10 to 1
for(i=10;i>=1;i--)
    console.log(i)

    
i=10;
while(i>=1){
    console.log(i)
    i--;
}

console.log('outside loop', i )
i=10;
console.log('do while loop')
do{
    console.log(i)
    i--;

}while(i>=1)

// break - stops the loop

/*while(true){
    let num =Number(prompt('enter a number'))
    if(!isNaN(num))
    break;
}*/

console.log('continue demo')
// continue - skips the current iteration
for(i=1;i<=10;i++){
    if(i%3==0)
    continue
    console.log(i)
}

//for..of
let arr = ['apple','orange','grapes','mango']

for(i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase())
}

//or

for( let fruit of arr)
console.log(fruit)

//for..in
item = {
    name:"phone",
    quantity:1,
    price:25000
}

for(let key in item){
    console.log(item[key])
    
}