$git = "C:\Program Files\Git\bin\git.exe"
Set-Location "C:\Users\Cliente\coisaetal-site"
& $git add src/data/brand.ts src/data/products.ts src/data/tips.ts
& $git commit -m "fix: troca Unsplash por Pexels (imagens sem API key)"
& $git push
Write-Host "DONE"
