
var choice = prompt("Welcome to area Calculator . /n Please enter your Choice. /n1 area of Rectangle.  /n2 area of triangle.  /n3 area of circle.  /4 area of parellolograme.  ")
if (choice == '1') {
  var l = prompt('Enter the lenght:   ')
  var b = prompt('Enter the breadth:   ')
  var a = Number(l) * Number(b) *
 alert('The area is ' +  a)
       }
 if (choice == '2') {
  var h = prompt('Enter the height:   ')
  var b = prompt('Enter the base:   ')
  var a = Number(h) * Number(b) *
 alert('The area is ' +  a)
       }
        if (choice == '3') {
  var r = prompt('Enter the lenght:   ')
  var a =  3.14 * Number(r)   *  Number(r) 
 alert('The area is ' +  a)
       }
        if (choice == '4') {
  var l = prompt('Enter the lenght:   ')
  var cb = prompt('Enter the corosponding base:   ')
  var a = Number(l) * Number(cb) *
 alert('The area is ' +  a)
       }