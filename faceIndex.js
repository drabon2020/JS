var imported = document.createElement('script');
imported.src = 'https://arscripts.azurewebsites.net/js/face-api.js';
//imported.defer = true;
document.head.appendChild(imported);

imported = document.createElement('script');
imported.src = 'https://raw.githubusercontent.com/drabon2020/JS/master/faceLogic.js';
imported.defer = true;
document.head.appendChild(imported);
