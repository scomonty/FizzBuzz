$(document).ready(function(){
  
  fizzBuzz();
});

var fizzBuzz=function(){
  var add;

  for (var i = 1; i <= 100; i++) {
    if ( (i % 5) == 0 && (i % 3) == 0) {
      add = $('<div>FizzBuzz! ('+i+'/3 = '+i/3+' and '+i+'/5 = '+i/5+')</div>');
    } else if ( (i % 3) == 0 ) {
      add = $('<div>Fizz ('+i+'/3 = '+i/3+')</div>');
    } else if ( (i % 5) == 0 ) {
      add = $('<div>Buzz ('+i+'/5 = '+i/5+')</div>');
    } else {
      add = $('<div>'+i+'</div>');
    }

    $(document).find('body').append(add);
  }
}