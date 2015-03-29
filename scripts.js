$(document).ready(function(){
  var statement;
  var list = $('ul');
  for(x=1; x<=100; x++){
    if((x%3 == 0) && (x%5 == 0)){
      statement = "fizzbuzz";   
    }else if (x%3 == 0){
      statement = "fizz";
    }else if (x%5 == 0){
      statement = "buzz"
    }else{
      statement = x;
    }
    list.append("<li>"+statement+ "</li>");
  }

})

