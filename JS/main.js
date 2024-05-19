
document.querySelector('.back-materi').addEventListener('click', function(){
    const back = document.querySelectorAll('.home, .team-group');
    back.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.materi');
    back2.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })

})


document.querySelector('.back-soal').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.home, .team-group');
    back1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.soal');
    back2.forEach( element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})


document.querySelector('.back-game-2').addEventListener('click', function() {
    const song_game = document.querySelector('.song-game')
    song_game.pause()
    song_game.currentTime = 0;

    const back1 = document.querySelectorAll('.home, .team-group');
    back1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.game-section-1');
    back2.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})




document.querySelector('.back-game-3').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.game-section-2');
    const back2 = document.querySelectorAll('.game');

    back2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    back1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})

document.querySelector('.back-game-3-mobile').addEventListener('click', () => {
    const button1 = document.querySelectorAll('.game-section-2')
    const button2 = document.querySelectorAll('.game')
    const button3 = document.querySelectorAll('.navigation')

    button1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },1)
    })

    button2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })

    button3.forEach(element => {
        element.style.display = 'flex'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })
})






document.querySelector('.home-materi').addEventListener('click', function() {
    const sound_pencet = document.querySelector('.pencet-sound-new')
    sound_pencet.play();

    const materi1 = document.querySelectorAll('.materi');
    materi1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    });

    const materi2 = document.querySelectorAll('.home,.team-group');
    materi2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    });
});


document.querySelector('.home-soal').addEventListener('click', function(){
    const sound_pencet = document.querySelector('.pencet-sound-new')
    sound_pencet.play();

    const soal1 = document.querySelectorAll('.soal');
    soal1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const soal2 = document.querySelectorAll('.home,.team-group')
    soal2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})


document.querySelector('.home-game').addEventListener('click', function() {
    const sound_pencet = document.querySelector('.pencet-sound-new')
    sound_pencet.play();

    const game1 = document.querySelectorAll('.game-section-1');
    const game2 = document.querySelectorAll('.home, .team-group');

    game1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    game2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})








// ============= MOBILE
document.querySelector('#setting-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.setting-mobile-new,#key-mobile-password')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .game-section-1,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})


document.querySelector('#materi-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.materi')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.setting-mobile-new, .soal, .game-section-1,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})

document.querySelector('#soal-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.soal')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi,.setting-mobile-new, .game-section-1,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})

document.querySelector('#game-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.game-section-1')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .setting-mobile-new,.select-team,#team-new');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})


const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

















