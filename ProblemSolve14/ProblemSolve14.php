<?php
function evaluatePostfix($expression) {
  $stack = [];
 
  for ($i = 0; $i < strlen($expression); $i++) {
    $char = $expression[$i];
 
    if (!is_numeric($char)) {
      $num2 = array_pop($stack);
      $num1 = array_pop($stack);
 
      switch ($char) {
        case '+':
          array_push($stack, $num1 + $num2);
          break;
        case '-':
          array_push($stack, $num1 - $num2);
          break;
        case '*':
          array_push($stack, $num1 * $num2);
          break;
        case '/':
          array_push($stack, $num1 / $num2);
          break;
      }
    } else {
      array_push($stack, (int)$char);
    }
  }
 
  return array_pop($stack);
 }
 
 $expression = "231*+9-";
 $result = evaluatePostfix($expression);
 echo $result;
?>