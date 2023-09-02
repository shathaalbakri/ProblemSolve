<?php
function isPowerOfTwo($N) {
  if ($N == 0) {
      return "No";
  }

  while ($N != 1) {
      if ($N % 2 != 0) {
          return "No";
      }
      $N = $N / 2;
  }

  return "Yes";
}

$N = 8;
$result = isPowerOfTwo($N);
echo $result;
?>