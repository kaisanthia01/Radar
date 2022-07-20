<?php
$delete = array("result" => "err", "filename" => "-");
$fileName = $_POST['filename']; // file name from front end
$location_with_file_name = "../kml/upload/" . $fileName;
if (file_exists($location_with_file_name)) {
    $result  = unlink($location_with_file_name);
    if ($result) {
        unset($delete);
        $delete = array("result" => "ok", "filename" => $fileName);
    }
}
echo json_encode($delete);
