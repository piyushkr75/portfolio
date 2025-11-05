# Extract tgz files to node_modules
$packages = @(
    @{tgz="vitejs-plugin-react-4.7.0.tgz"; dest="node_modules\@vitejs\plugin-react"},
    @{tgz="rolldown-pluginutils-1.0.0-beta.27.tgz"; dest="node_modules\@rolldown\pluginutils"},
    @{tgz="babel-core-7.28.0.tgz"; dest="node_modules\@babel\core"},
    @{tgz="react-refresh-0.17.0.tgz"; dest="node_modules\react-refresh"},
    @{tgz="babel-plugin-transform-react-jsx-self-7.27.1.tgz"; dest="node_modules\@babel\plugin-transform-react-jsx-self"},
    @{tgz="babel-plugin-transform-react-jsx-source-7.27.1.tgz"; dest="node_modules\@babel\plugin-transform-react-jsx-source"},
    @{tgz="types-babel__core-7.20.5.tgz"; dest="node_modules\@types\babel__core"}
)

foreach ($pkg in $packages) {
    if (Test-Path $pkg.tgz) {
        Write-Host "Extracting $($pkg.tgz) to $($pkg.dest)..."
        New-Item -ItemType Directory -Force -Path $pkg.dest | Out-Null
        $tempDir = "temp-extract-$([Guid]::NewGuid())"
        New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
        
        # Use 7-zip if available, otherwise try PowerShell Expand-Archive
        try {
            # Try using tar.exe (Windows 10+)
            tar -xzf $pkg.tgz -C $tempDir 2>&1 | Out-Null
            if (Test-Path "$tempDir\package") {
                Copy-Item -Path "$tempDir\package\*" -Destination $pkg.dest -Recurse -Force
            } else {
                # Try direct extract
                Get-ChildItem $tempDir | Move-Item -Destination $pkg.dest -Force
            }
            Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
            Write-Host "  ✓ Extracted $($pkg.tgz)"
        } catch {
            Write-Host "  ✗ Failed to extract $($pkg.tgz): $_"
        }
    }
}

Write-Host "Done!"


