<?php
function maximumMeetings($start, $end) {
  $n = count($start);
  $meetings = [];

  for ($i = 0; $i < $n; $i++) {
      $meetings[] = ['start' => $start[$i], 'end' => $end[$i]];
  }

  // Sort the meetings based on their end times
  usort($meetings, function($a, $b) {
      return $a['end'] - $b['end'];
  });

  $selectedMeetings = [];
  $selectedMeetings[] = $meetings[0];
  $lastEndTime = $meetings[0]['end'];

  for ($i = 1; $i < $n; $i++) {
      if ($meetings[$i]['start'] > $lastEndTime) {
          $selectedMeetings[] = $meetings[$i];
          $lastEndTime = $meetings[$i]['end'];
      }
  }

  return count($selectedMeetings);
}

$start = [1, 3, 0, 5, 8, 5];
$end = [2, 4, 6, 7, 9, 9];

$output = maximumMeetings($start, $end);
echo $output;
?>