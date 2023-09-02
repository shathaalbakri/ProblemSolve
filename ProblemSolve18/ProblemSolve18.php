<?php
function calculateBlueUnits($heights) {
  $n = count($heights);
  $leftMax = array_fill(0, $n, 0);
  $rightMax = array_fill(0, $n, 0);

  $leftMax[0] = $heights[0];
  for ($i = 1; $i < $n; $i++) {
      $leftMax[$i] = max($leftMax[$i-1], $heights[$i]);
  }

  $rightMax[$n-1] = $heights[$n-1];
  for ($i = $n - 2; $i >= 0; $i--) {
      $rightMax[$i] = max($rightMax[$i+1], $heights[$i]);
  }

  $blueUnits = 0;
  for ($i = 0; $i < $n; $i++) {
      $blueUnits += min($leftMax[$i], $rightMax[$i]) - $heights[$i];
  }

  return $blueUnits;
}

$heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
$output1 = calculateBlueUnits($heights);

$heights = [4, 2, 0, 3, 2, 5];
$output2 = calculateBlueUnits($heights);

echo $output1 . "\n";
echo $output2;
?>