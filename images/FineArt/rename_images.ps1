$folderPath = "C:\Users\stvas\OneDrive\Websites\YugenPhotog\images\FineArt"
$files = Get-ChildItem -Path $folderPath -Filter "*.jpg" | Sort-Object Name
$counter = 1

foreach ($file in $files) {
    $extension = $file.Extension
    $newName = "yugenfineart_no$counter$extension"
    $newPath = Join-Path -Path $folderPath -ChildPath $newName

    Rename-Item -Path $file.FullName -NewName $newName
    $counter++
}
