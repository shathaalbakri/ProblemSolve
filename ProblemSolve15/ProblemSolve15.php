<?php
function findFirstNonRepeatingChar($s) {
    $charCount = array();
   
    for ($i = 0; $i < strlen($s); $i++) {
      $char = $s[$i];
      if (array_key_exists($char, $charCount)) {
        $charCount[$char]++;
      } else {
        $charCount[$char] = 1;
      }
    }
   
    for ($i = 0; $i < strlen($s); $i++) {
      $char = $s[$i];
      if ($charCount[$char] === 1) {
        return $char;
      }
    }
   
    return '$';
   }
   
   $s = "hello";
   $result = findFirstNonRepeatingChar($s);
   echo $result;
?>