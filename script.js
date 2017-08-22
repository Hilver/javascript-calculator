$(document).ready(function(){

  var score = $(".outcome").val();
  score = [];
  var result = [];
  var finalResult = [];

  $(".numbers").click(function(){
    var num = $(this).val();
    score.push(num);
    $("input").val(score.join(""));
    console.log(score);
  });

  $(".reset").click(function(){
    score = [];
    result = [];
    finalResult = [];
    $("input").val(0);
    console.log(score);
  });

  $(".undo").click(function(){
    score.splice(-1,1);
    $("input").val(score.join(""));
    console.log(score.length);
    if(score.length === 0){
      $("input").val(0);
    }
  });

  $(".dot").click(function(){
   var last_element = score[score.length -1];
    if(last_element !== "." && score.includes(".") === false){
      score.push(".");
      console.log(score);
    }

  });




$(".division").click(function(){
  if(score.length !== 0){
    var saveScore = score.join("");
    result.push(saveScore + '/');
    score = [];
    console.log(result);
    }
});

  $(".multi").click(function(){
  if(score.length !== 0){
    var saveScore = score.join("");
    result.push(saveScore + '*');
    score = [];
    console.log(result);
    }
});

   $(".plus").click(function(){
  if(score.length !== 0){
    var saveScore = score.join("");
    result.push(saveScore + '+');
    score = [];
    console.log(result);
    }
});

   $(".minus").click(function(){
  if(score.length !== 0){
    var saveScore = score.join("");
    result.push(saveScore + '-');
    score = [];
    console.log(result);
    }
});

   $(".counting").click(function(){
     result.push(score.join(""));
   finalResult.push(result.join(""));
   //  return result;
  //   finalResult = finalResult.toString();
     function count(item){
      item = item.toString();
      return eval(item);
     }
     $("input").val(count(finalResult));
     score = [count(finalResult)];
     result = [];
     console.log(score);
});


});
