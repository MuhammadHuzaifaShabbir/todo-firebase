
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// import { getFirestore, collection, addDoc, doc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAs1Doh3H0AVh0xHUe3llAw8MlJgTcFr_o",
//     authDomain: "second-cf038.firebaseapp.com",
//     projectId: "second-cf038",
//     storageBucket: "second-cf038.appspot.com",
//     messagingSenderId: "418355371537",
//     appId: "1:418355371537:web:f77f0905f7bb26998a5bb0",
//     measurementId: "G-HZTC5SPRJ4"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



// let arr = []
// let getlocal = localStorage.getItem('option')

// if (getlocal !== null) {
//     arr = JSON.parse(getlocal)
// }

// let getol = document.getElementById('ol')
// let opt = document.getElementById('selected')
// let nametodo = document.getElementById('todo')
// let btna = document.getElementById('btna')
// let change = document.getElementById('changename')

// btna.addEventListener('click', myfunc);
//  async function myfunc() {

//     // if (nametodo.value == '') {
//     //     Swal.fire({
//     //         title: "The Value ?",
//     //         icon: "question"
//     //     });
//     //     return
//     // }
//     getol.innerHTML = ''
//    await get();

//     let obj = {
//         option: nametodo.value
//     }
//     arr.push(obj)

//     localStorage.setItem('option', JSON.stringify(arr))

//     for (var i = 0; i < arr.length; i++) {

//         opt.innerHTML += `
//         <option>${arr[i].option}</option>
//         `
//     }
//     // nametodo.value = ''
    
// }


// // let allsel = 

// // var X = 'fgh'
// let sel = document.getElementById('select')
// sel.addEventListener('click', () => {
//     // var allsel =  opt.selectedOptions[0].value
//     let con = opt.selectedOptions[0].value
//     // X = con

//     change.innerHTML = `<h1 style="color:blue;font-size:50px">${con}</h1>`
//     nametodo.value = con

//     getol = ''
//     get();
//     console.log(con)
//     // console.log(X)

// })



// let btn = document.getElementById('btn')
// btn.addEventListener('click', async () => {
//     let inp = document.getElementById('input')
//     if (inp.value == '') {
//         Swal.fire({
//             title: "The Value ?",
//             icon: "question"
//         });
//         return
//     }
//     // getol.innerHTML = ''

//     const docRef = await addDoc(collection(db,nametodo.value), {
//         name: inp.value

//     })
//     console.log("Document written with ID: ", docRef.id);
//     get();
//     inp.value = ''
// })

// async function get() {
//     const q = collection(db,nametodo.value)

//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         //   console.log(doc.id, " => ", doc.data());
// getol.innerHTML += `<li style="display: flex;justify-content: space-between;margin-top:20px;margin-bottom:20px ;background-color:rgb(216, 233, 240) ;padding:10px;border-radius:7px;width:280px"><span>${doc.data().name}</span><span>
// <button style="background-color: red; "onclick="delet('${doc.id}')">Delete</button>
// <button style="background-color: blue; "onclick="edit('${doc.data().name}','${doc.id}')">Edit</button> 
// </span></li>`
//     });
// }


// window.delet = delet;
// window.edit = edit;
// async function edit(e, a) {

//     const ipAPI = e
//     const inputValue = ipAPI;
//     const { value: ipAddress } = await Swal.fire({
//         title: "Enter your Updated Value",
//         input: "text",
//         inputLabel: false,
//         inputValue,
//         showCancelButton: true,
//         inputValidator: (value) => {
//             if (!value) {
//                 return "You need to write something!";
//             }
//         }
//     });
//     if (ipAddress) {
//         Swal.fire(`Your Updated Value  is ${ipAddress}`);

//         getol.innerHTML = ''
//         const washingtonRef = doc(db,nametodo.value, a);

//         await updateDoc(washingtonRef, {
//             name: ipAddress
//         })
//         get()
//     }

// }

// function delet(e) {

//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//     }).then(async (result) => {
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your work has been deleted.",
//                 icon: "success"
//             });
//             getol.innerHTML = ''
//             await deleteDoc(doc(db, X, e));
//             get()

//         }
//     })

// }


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, doc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAs1Doh3H0AVh0xHUe3llAw8MlJgTcFr_o",
//     authDomain: "second-cf038.firebaseapp.com",
//     projectId: "second-cf038",
//     storageBucket: "second-cf038.appspot.com",
//     messagingSenderId: "418355371537",
//     appId: "1:418355371537:web:f77f0905f7bb26998a5bb0",
//     measurementId: "G-HZTC5SPRJ4"
// };
const firebaseConfig = {
    apiKey: "AIzaSyB7Y2ie0ICLrDhR7GlTUw8feJt2qNgHpCk",
    authDomain: "practice-5cece.firebaseapp.com",
    projectId: "practice-5cece",
    storageBucket: "practice-5cece.appspot.com",
    messagingSenderId: "516631768531",
    appId: "1:516631768531:web:fce63ccd72bc45277dd326",
    measurementId: "G-4ZY291PETZ"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let nametodo = document.getElementById('todo')
let btna = document.getElementById('btna')
let change = document.getElementById('changename')
btna.addEventListener('click', () => {

    change.innerHTML = `<h1 style="color:blue;font-size:50px">${nametodo.value}</h1>`
    getol.innerHTML = ''
    get()
})


let btn = document.getElementById('btn')
btn.addEventListener('click', async () => {
    let inp = document.getElementById('input')
if(inp.value == ''){
    Swal.fire({
        title: "The Value ?",
        icon: "question"
      });
    return
}
    getol.innerHTML = ''

    const docRef = await addDoc(collection(db, nametodo.value), {
        name: inp.value

    });
    // console.log("Document written with ID: ", docRef.id);
    get()
    inp.value = ''
})
let getol = document.getElementById('ol')
async function get() {

    const q = collection(db, nametodo.value)

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());

        getol.innerHTML += `<li style="display: flex;justify-content: space-between;margin-top:20px;margin-bottom:20px ;background-color:rgb(216, 233, 240) ;padding:10px;border-radius:7px;width:280px"><span>${doc.data().name}</span><span>
<button class ="deleteclass" style="background-color: red; "onclick="delet('${doc.id}')">Delete</button>
<button class ="deleteclass" style="background-color: blue; "onclick="edit('${doc.data().name}','${doc.id}')">Edit</button> 
</span></li>`

    });
}


window.delet = delet;
window.edit = edit;
get();
async function edit(e,a) {

    const ipAPI = e
    const inputValue = ipAPI;
    const { value: ipAddress } = await Swal.fire({
        title: "Enter your Updated Value",
        input: "text",
        inputLabel:false,
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });
    if (ipAddress) {
        Swal.fire(`Your Updated Value  is ${ipAddress}`);
        
        getol.innerHTML = ''
        const washingtonRef = doc(db, nametodo.value,a);
        
            await updateDoc(washingtonRef, {
                name: ipAddress
            });
            get()
    }

}

function delet(e) {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your work has been deleted.",
                icon: "success"
            });
            getol.innerHTML = ''
            await deleteDoc(doc(db, nametodo.value, e));
            get()

        }
    })

}
