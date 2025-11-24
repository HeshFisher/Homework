(async function () {
    'use strict';

    let dragging = false
    let offset;
    const topBar = document.querySelector('.top-bar')
    const buildArea = document.querySelector('.build-area');


    try {
        const part = await fetch('parts.json');
        if (!part.ok) {
            throw new Error(`${part.status} -${part.statusText}`)
        }
        const parts = await part.json();

        parts.forEach(p => {
            const image = document.createElement('img');
            image.classList.add('part');
            image.id = p.name;
            image.src = p.url;
            image.alt = p.name;

            const savedPositions = JSON.parse(localStorage.getItem('positions')) || {};
            if (savedPositions[p.name]) {
                const pos = savedPositions[p.name];
                image.style.position = 'absolute';
                image.style.left = pos.left;
                image.style.top = pos.top;
                image.style.zIndex = 10;
                image.style.maxHeight = 'none'
                buildArea.appendChild(image); 
                dragging = image;
            } else {
                topBar.appendChild(image);
            }

        });
    } catch (e) {
        console.error(e)
    }



    document.addEventListener('mousedown', e => {
        if (e.target.closest('.top-bar img')) {
            e.preventDefault()
            dragging = e.target;
            offset = { X: e.offsetX, Y: e.offsetY }
            dragging.style.position = 'absolute';
            dragging.style.zIndex = 10;
            dragging.style.maxHeight = 'none'
        }
    })
    document.addEventListener('mousemove', e => {
        if (dragging) {
            dragging.style.left = `${e.pageX - offset.X}px`
            dragging.style.top = `${e.pageY - offset.Y}px`
        };
    })
    document.addEventListener('mouseup', e => {
        const savedPositions = JSON.parse(localStorage.getItem('positions')) || {};
        savedPositions[dragging.id] = {
            left: dragging.style.left,
            top: dragging.style.top
        };
        localStorage.setItem('positions', JSON.stringify(savedPositions));
        dragging = null
    })

}());
