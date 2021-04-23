// function saveData() {
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");
//     var student = {
//         name :name.value,
//         roll:roll.value,
//     }
// console.log(student)

// firebase.database().ref('student').set(student)
// firebase.database().ref('student').set("dhara")
// }
//for creating child 2 options
// firebase.database().ref('student').child("stu1").set(student)
// firebase.database().ref("student/stu1").set(student)

//multiple data adding 
// firebase.database().ref("student").push(student)

//for creating child 2 options
// firebase.database().ref("student").child("stu1").push(student)
// firebase.database().ref("student").child("stu1/num1").push(student)

// make ur key using javascript (by using math.random)
//  var key = Math.random()*9;
//     firebase.database().ref("student/" + key.toFixed()).set(student)

// make ur key using firebase (by using math.random)
// var key =firebase.database().ref("student").push().key
// }

// function saveData() {
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");
//     var key = firebase.database().ref("student").push().key
//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key,
//     }
//     firebase.database().ref("student/" + key).set(student)

// }

// function getFBData() {
//     // //once one time data get when refresh (all)
//     // firebase.database().ref("student").once('value', function (data) {
//     //     console.log(data.val())
//     //   //once one time data get when refresh (with specific key)
//     //   firebase.database().ref("student/-MYhWj30UXqARfDxvhFj").once('value', function (data) {
//     //     console.log(data.val())
//         // //on real time data get (with specific key)
//         // firebase.database().ref("student").on('child_added', function (data) {
//         //     console.log(data.val())
//     })
// }
// getFBData()
// function removeFBData() {
//     //for delete whole student
//     // firebase.database().ref("student").remove()
//         //for delete student key 
//         // firebase.database().ref("student/-MYi__YVFLrd9VsPoSLR").remove()
// }
// removeFBData()

// function editFBData() {
//     firebase.database().ref("student/-MYiaAJVhXHp2f5thuI2").set({
//         key: "-MYiaAJVhXHp2f5thuI2",
//         name: "radha",
//         roll: 12346,
//     })
// }
// editFBData()




// // todo with firebase database
// var list = document.getElementById('list')
// firebase.database().ref('todos').on('child_added', function (data) {

//     var li = document.createElement('li')
//     var liText = document.createTextNode(data.val().value)
//     li.appendChild(liText)


//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode('DELETE')
//     delBtn.appendChild(delText)
//     delBtn.setAttribute('id', data.val().key)
//     delBtn.setAttribute('onclick', 'delItem(this)')



//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode('EDIT')
//     editBtn.appendChild(editText)
//     editBtn.setAttribute('id', data.val().key)
//     editBtn.setAttribute('onclick', 'editItem(this)')


//     li.appendChild(delBtn)
//     li.appendChild(editBtn)
//     list.appendChild(li)




// })

// function addItem() {
//     var item = document.getElementById("todo-item")
//     var db = firebase.database().ref('todos')
//     var key = db.push().key;
//     var todo = {
//         value: item.value,
//         key: key
//     }
//     db.child(key).set(todo)
//     item.value = ""
// }

// function delItem(e) {
//     e.parentNode.remove()

//     firebase.database().ref('todos').child(e.id).remove()

// }
// function editItem(e) {

//     var editVal = prompt("enter value", e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = editVal

//     var editTodo = {
//         value: editVal,
//         key: e.id,
//     }
//     firebase.database().ref('todos').child(e.id).set(editTodo)
// }
// function delAllItem() {
//     list.innerHTML = "";
//     firebase.database().ref('todos').remove()
// }