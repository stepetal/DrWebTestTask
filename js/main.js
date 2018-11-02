$(document).ready(function(){
  var arr = [{id: 1, name: 'John'}, {id: 2, name: 'Peter'}, {id: 3, name: 'Kate'}];
  for (var i = 0; i < arr.length; i++) {
    var div = document.createElement('div');

    div.setAttribute('id', i);
    div.onclick = function(){
      for (var j = 0; j < arr.length; j++){
          if (j == this.getAttribute('id')){
          var name = arr[j].name;
          alert('Div number is: ' + j + '. Name is: ' + name);
        }
      }
    }
    div.setAttribute('style','width: 30px; height: 30px; border: 1px solid red');
    document.body.appendChild(div);
  }

});
