(async function () {
    'use strict';

    const videoList = document.querySelector('#video-list');
    const video = document.querySelector('#video');
     async function loadVideos() {
        try {
            const list = await fetch('video.json');
            if (!list.ok) {
                console.log(`${list.status} - ${list.statusText}`)
            }

            const lists = await list.json()

            lists.forEach(v => {
                const name = document.createElement('li');
                name.innerHTML= `<span>${v.name}</span><img src="${v.thumbnail ||'Media/video.png' }"alt="${v.name}"/>`;
                
                videoList.appendChild(name);

                name.addEventListener('click', ()=>{
                    video.src = v.link;
                })
            }
            )

        } catch (e) {
            console.error(e)
        }
     }

  loadVideos();

}());
