<?php
function trappedWater($arr, $n) {
  $left = 0;
  $right = $n - 1;
  $leftMax = 0;
  $rightMax = 0;
  $water = 0;

  while ($left < $right) {
      if ($arr[$left] < $arr[$right]) {
          if ($arr[$left] > $leftMax) {
              $leftMax = $arr[$left];
          } else {
              $water += $leftMax - $arr[$left];
          }
          $left++;
      } else {
          if ($arr[$right] > $rightMax) {
              $rightMax = $arr[$right];
          } else {
              $water += $rightMax - $arr[$right];
          }
          $right--;
      }
  }

  return $water;
}

$arr = array(3, 0, 0, 2, 0, 4);
$n = count($arr);
$result = trappedWater($arr, $n);
echo $result;
?>