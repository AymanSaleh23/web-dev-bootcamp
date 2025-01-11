let wallpaperDiv = document.createElement('div');
wallpaperDiv.setAttribute('class', 'container col text-center');

let wallpaper_src = 'file:///M:/Train/web-dev-bootcamp/JS-app/IOTA_refactor-dynamic/logo/logo.PNG';
let wallpaper = document.createElement('img');
wallpaper.setAttribute('src', wallpaper_src)
wallpaper.setAttribute('alt', 'No Wallpaper Available!')
wallpaper.style.width = '100%'

wallpaperDiv.appendChild(wallpaper)

document.querySelector('#welcomContainer').prepend(wallpaperDiv)
