
// ========================== SOAL BAB 1 ========================
document.querySelector('.soal-image-image-button-click').addEventListener('click', () => {
    const select1 = document.querySelectorAll('.soal')
    const select2 = document.querySelectorAll('.soal-bab1-isi')
    const select3 = document.querySelectorAll('.navigation')

    select1.forEach( element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40)
    })

    select2.forEach( element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40)
    })

    select3.forEach( element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40)
    })

})









