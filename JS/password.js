


const FormBab1Mobile = document.getElementById('password-form');

FormBab1Mobile.addEventListener('submit', (event) => {
    const SandiTeam = "TEAM";
    const SandiBab1MultipleMobile = "OPEN BAB 1 PILGAN";
    const SandiBab2MultipleMobile = "OPEN BAB 2 PILGAN";
    const mobile_team = document.querySelector('#team-new');
    const mobile_kunci_bab_1 = document.querySelectorAll('#key-mobile-bab-1');
    const mobile_kunci_bab_2 = document.querySelectorAll('#key-mobile-bab-2');
    const AllFormBab1 = document.querySelector('#key-mobile-password');

    event.preventDefault();
    const jawab = document.querySelector('.password').value; 

    if (jawab === SandiBab1MultipleMobile) {
        mobile_kunci_bab_1.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none'; 
        }, 200);
    } else if (jawab === SandiBab2MultipleMobile) {  
        mobile_kunci_bab_2.forEach(element => {
            element.style.transform = 'translateY(10%)';
        });
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    } else if (jawab === SandiTeam) {  
        mobile_team.style.display = 'block';
        mobile_team.style.opacity = '1'
        setTimeout(() => {
            mobile_team.style.transform = 'translateY(10%)';  
        },40)
        AllFormBab1.style.opacity = '0';  
        setTimeout(() => {
            AllFormBab1.style.display = 'none';  
        }, 200);
    } else {
        const salah_boss = document.querySelector('.wrong-sound-new')
        salah_boss.play();
    }

    document.getElementById('password').value = '';
});



document.querySelectorAll('#key-close-kunci-jawab').forEach(button => {
    button.addEventListener('click', () => {
        const close_1 = document.querySelectorAll('#key-mobile-bab-1, #key-mobile-bab-2')
        const close_2 = document.querySelectorAll('#key-mobile-password')
        const close_team = document.querySelectorAll('#team-new')


        close_team.forEach(element => {
            element.style.transform = 'translateY(200%)'; 
            setTimeout(() => {
                element.style.display = 'none'
            }, 1000)
        })

        close_1.forEach(element => {
            element.style.transform = 'translateY(150%)'
        })

        close_2.forEach(element => {
            element.style.display = 'block'
            setTimeout(() => {
                element.style.opacity = '1'
            }, 200)
        })
    })
})