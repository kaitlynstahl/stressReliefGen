var videos = [
    "Ez2OSSgCMlM",
    "dgHRwscpPIA",
    "0JboM-STb4E",
    "L3MtFGWRXAA",
    "nGeKSiCQkPw",
    "t0KwtuYyy3A",
    "niLxhiywXqw",
    "p336IIjZCl8",
    "re76yiu4FsY",
    "L49VXZwfup8",
    "eaIvk1cSyG8",
    "l-gQLqv9f4o"
];
        
window.onload = function () {
    var playerDiv = document.getElementById("randomPlayer");
    var player = document.createElement("IFRAME");
    var index = Math.floor(Math.random() * videos.length);
    var videoUrl = 'http://www.youtube.com/embed/' + videos[index] + '?autoplay=1&iv_load_policy=3';
    player.setAttribute('width', '640');
    player.setAttribute('height', '390');
    player.setAttribute('src', videoUrl);
    player.setAttribute('id', 'video');
    playerDiv.appendChild(player);
    
};