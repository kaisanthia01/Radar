<?php
$upload = array("result" => "err", "filename" => "-");

if (!empty($_FILES['formUploadFileKML'])) {
    // File upload configuration 
    $targetDir = "../kml/upload/";
    //$allowTypes = array('kml', 'kmz');
    $allowTypes = array('kml');

    $fileName = basename($_FILES['formUploadFileKML']['name']);
    $targetFilePath = $targetDir . $fileName;

    // Check whether file type is valid 
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
    if (in_array($fileType, $allowTypes)) {
        // Upload file to the server 
        if (move_uploaded_file($_FILES['formUploadFileKML']['tmp_name'], $targetFilePath)) {
            //$upload = $fileName;
            unset($upload);
            $upload = array("result" => "ok", "filename" => $fileName);
        }
    }
}

// Display the output
echo json_encode($upload);
