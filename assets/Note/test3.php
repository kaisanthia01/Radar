<?PHP
require_once "imagesampler.php";
  function web_safe($val)
  {
    $retval = dechex(3 * round($val/51));
    return "{$retval}{$retval}";
  }

  $sampler = new \Chirp\ImageSampler("svp120_latest-2.jpg");
  $sampler->set_steps(20);
  $matrix = $sampler->sample();
  $tally = [];
  foreach($matrix as $row => $arr) {
    foreach($arr as $color) {
      list($r, $g, $b) = $color;
      $rgb = "#" . web_safe($r) . web_safe($g) . web_safe($b);
      if(!isset($tally[$rgb])) $tally[$rgb] = 0;
      $tally[$rgb]++;
    }
  }
  echo "<ol style=\"list-style-type: none; font-size: 0.9em; color: #666;\">\n";
  asort($tally);
  foreach($tally as $rgb => $count) {
    echo "  <li value=\"{$count}\"><div style=\"display: inline-block; width: {$count}em; height: 1em; background: {$rgb};\"></div> {$rgb}</li>\n";
  }
  echo "</ol>\n\n";
