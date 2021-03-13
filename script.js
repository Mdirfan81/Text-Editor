// console.log("The Script is Ready");
// function findMin(arr){
//     // console.log(arr);
//     counter = 0;
//     let firstEle = arr[1];
//     // console.log(firstEle);
//     var temp = "";

// console.log("The Array length: ",arr.length);
//     for(let i=0; i<=arr.length; i++){
//         // console.log("The Value of I :",i,"The array element is: ",arr[i])
//         for(let j=1; j<=arr.length; j++)
//         {
//             // console.log("The Element's i:",arr[i],"j: ", arr[j]);
//             // console.log("The Value of J :",j,"The array element is: ",arr[j])
//             if(arr[i] < arr[j]){
//                 // console.log(arr[j],">",arr[i]);
//                 // console.log("Current Temp Value: ",temp);
//                 // temp = arr[i];
//                 // console.log("Swap1",temp,arr[i]);
//                 // arr[i] = arr[j];
//                 // console.log("Swap2",arr[i],arr[j]);
//                 // arr[j] =temp;
//                 // console.log("Swap3",arr[j],temp);
//             console.log(arr[i]);
//             }
//         }

//     }
// // console.log(arr);

// }

// function min(arr) {
//   let minimum;
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//       for(let j= i+1; j<arr.length; j++){
//           if(arr[i]> arr[j])
//           {
//               let temp = arr[j];
//               arr[j] = arr[i];
//               arr[i] = temp;
//           }
//       }
    
//   }
//   console.log("The value: ",arr);
// //   console.log(arr.sort());
// }
// arr = [9,8,1,5,3];
// min(arr);

// console.log("the sorted :",arr);
let input = document.querySelector("#textinput");
let output = document.querySelector("#textoutput");

function outputText(){
let text = document.getElementById('textinput').value;
document.getElementById('textoutput').innerHTML = text;

}
function Bold(elem){
   elem.classList.toggle("active");
   
    //we are directly the element of the button from the html.
    let out = document.getElementById('textoutput')
 out.classList.toggle("font-weight-bold");

}
function Italic(elem){
    elem.classList.toggle("active");
    let out = document.getElementById('textoutput');
    out.classList.toggle("font-italic");
}
function Uline(elem){
    elem.classList.toggle("active");
    let out = document.getElementById('textoutput')
    // here we'r using the cotains,remove & add. not using the toggle button;
    if(out.classList.contains('underLine')){
        out.classList.remove('underLine');
    }
    else{
        out.classList.add('underLine');
    }
}

// function alignRight(elem){
//     console.log('Rigth');
//     elem.classList.toggle("active");
//     let out = document.getElementById('textoutput');
//     out.classList.toggle("text-right");

// }

// function alignCenter(elem){
//     console.log('Center');
//     elem.classList.toggle("active");
//     let out = document.getElementById('textoutput');
//     out.classList.toggle("text-center");
// }

// function alignLeft(elem){
//     console.log('Left');
//     elem.classList.toggle("active");
//     let out = document.getElementById('textoutput');
//     out.classList.toggle("text-left");
// }
//we can also write a single function to handle all THis in ONE!!
function alignItem(elem, item){
    console.log(item);
       elem.classList.toggle("active");
    let out = document.getElementById('textoutput');
    if(item == 'right'){
        out.classList.toggle("text-right");
   }
   else if(item == 'center'){
        out.classList.toggle("text-center");
   }
   else{
        out.classList.toggle("text-left");
   }
    }
    