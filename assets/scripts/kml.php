<?php
$upload = 'err';

if (!empty($_FILES['formUploadFileKML'])) {

    // File upload configuration 
    $targetDir = "../kml/";
    $allowTypes = array('kml', 'kmz');

    $fileName = basename($_FILES['formUploadFileKML']['name']);
    $targetFilePath = $targetDir . $fileName;

    // Check whether file type is valid 
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);
    if (in_array($fileType, $allowTypes)) {
        // Upload file to the server 
        if (move_uploaded_file($_FILES['formUploadFileKML']['tmp_name'], $targetFilePath)) {
            $upload = $fileName;
        }
    }
}

echo $upload;
