# Define the folder path containing Yugen Fine Art images
$folderPath = "C:\Users\stvas\OneDrive\Websites\YugenPhotog\images\FineArt"

# Get all JPG files in the folder, sorted by name
$files = Get-ChildItem -Path $folderPath -Filter "*.jpg" | Sort-Object Name
$counter = 1

# Loop through each file and rename it
foreach ($file in $files) {
    $extension = $file.Extension
    $newName = "yugen-fine-art-photography-st-louis-$counter$extension"
    $newPath = Join-Path -Path $folderPath -ChildPath $newName

    Rename-Item -Path $file.FullName -NewName $newName
    $counter++
}

Write-Output "Renaming complete: All files are now named sequentially as Yugen Fine Art St. Louis images."
