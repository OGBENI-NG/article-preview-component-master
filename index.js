const userDetails = document.querySelector('#user-details')
const shareBtn = document.querySelector('#share')
const closeShareBtn = document.querySelector('#close-share-btn')
const openBtn = document.getElementById('open-share-btn')

//adding eventlisner to shareBtn 
document.addEventListener('click', (e) => {
    if(e.target.id === 'open-share-btn') {
        shareBtn.classList.remove('hidden')
        openBtn.classList.add('hidden')

    } else if(e.target.id === 'close-share-btn') {
        userDetails.classList.remove('hidden')
        shareBtn.classList.add('hidden')
        openBtn.classList.remove('hidden')
    }
})