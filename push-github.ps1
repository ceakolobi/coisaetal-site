$git = "C:\Program Files\Git\bin\git.exe"
$repo = "C:\Users\Cliente\coisaetal-site"
$token = "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"
$remote = "https://$token@github.com/ceakolobi/coisaetal-site.git"

Set-Location $repo

# Init git if needed
if (-not (Test-Path ".git")) {
    & $git init
    Write-Host "Git inicializado."
}

# Configure identity
& $git config user.email "kolobi2013cf@gmail.com"
& $git config user.name "ceakolobi"

# Set remote
$remoteExists = & $git remote | Where-Object { $_ -eq "origin" }
if ($remoteExists) {
    & $git remote set-url origin $remote
} else {
    & $git remote add origin $remote
}

# Stage and commit
& $git add -A
& $git commit -m "feat: site Coisa e Tal completo com React + Vite + TailwindCSS"

# Push
& $git branch -M main
& $git push -u origin main --force

Write-Host "✅ Push concluido! Acesse: https://github.com/ceakolobi/coisaetal-site"
