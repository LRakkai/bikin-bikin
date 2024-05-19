
// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Organ yang memiliki katup epiglotis adalah",
        answer: "Laring",
        options: [
          "Laring",
          "Faring",
          "Bronkus",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 2,
        question: "Hewan yang bernafas dengan paru-paru adalah",
        answer: "Aves",
        options: [
          "Cacing",
          "Serangga",
          "Aves",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 3,
        question: "Fungsi utama Rambut akar adalah",
        answer: "Menyerap air ataupun nutrien dari tanah",
        options: [
          "Menyerap air ataupun nutrien dari tanah",
          "Tempat pertukaran CO2",
          "Alat transportasi mengangkut air dan mineral dari akar menuju ke daun",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 4,
        question: "Ciri-ciri Nutrisi Makronutrien adalah",
        answer: "Karbohidrat, protein, lemak",
        options: [
          "Karbohidrat, protein, lemak",
          "Protein, Mineral, Vitamin",
          "Mineral, Karbohidrat, Protein",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 5,
        question: "Semua makluk hidup bergerak meskipun tidak harus berpindah tempat. Berdasarkan terjadinya, gerak dibedakan menjadi dua, yaitu adalah",
        answer: "Gerak tropisme, gerak endonom",
        options: [
          "Gerak tropisme, gerak endonom",
          "Gerak nasti, gerak pasif",
          "Gerak aktif, gerak pasif",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 6,
        question: "Penyesuaian bentuk dan struktur tubuh luar terhadap lingkungan untuk bertahan hidup di habitatnya adalah contoh adaptasi?",
        answer: "Adaptasi Morfologi",
        options: [
          "Adaptasi fisiologi",
          "Adaptasi Morfologi",
          "Adaptasi tingkah laku",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 7,
        question: "Menurut Soegianto lingkungan hidup dibedakan menjadi tiga salah satunya yaitu..",
        answer: "Lingkungan fisik",
        options: [
          "Lingkungan fisik",
          "Lingkungan Buatan",
          "Lingkungan alami",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 8,
        question: "Yang bukan komponen biotik adalah",
        answer: "Biosfer",
        options: [
          "Biosfer",
          "Komunitas",
          "Decomposer",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 9,
        question: "Komsumen atau heterotrof adalah",
        answer: "Komponen yang makanannya bergantung pada organisme lain",
        options: [
          "Komponen yang dapat menghasilkan makanan",
          "Komponen yang makanannya bergantung pada organisme lain",
          "Organisme yang bertugas mengurai zat organic sisa makluk hidup menjadi zat anorganik",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 10,
        question: "Komponen fisik dan kimiawi yang dapat memengaruhi ketahanan makluk hidup di sebuah lingkungan ekosistem tertentu adalah pengertian dari?",
        answer: "Komponen abiotik",
        options: [
          "Komponen abiotik",
          "Komponen biotik",
          "Komponen ekosistem",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 11,
        question: "Apa peran sinar matahari bagi tumbuhan?",
        answer: "Sebagai proses fotosintesis untuk membuat makanan",
        options: [
          "Sebagai proses fotosintesis untuk membuat makanan",
          "Menjaga suhu tanaman",
          "Sebagai media pelarut unsur hara dan mineral",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 12,
        question: "Simbiosis mutualisme adalah bentuk interaksi antar dua organisme yang saling menguntungkan contohnya adalah?",
        answer: "Lebah dan bunga",
        options: [
          "Kucing dan tungau",
          "Ikan remora dan ikan hiu",
          "Lebah dan bunga",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 13,
        question: "Symbiosis adalah hubungan antara dua makhluk hidup yang berbeda jenis dan hidup Bersama di suatu daerah. Ada empat macam symbiosis yaitu?",
        answer: "Symbiosis mutualisme, symbiosis komensalisme, symbiosis parasitisme, symbiosis netralisme",
        options: [
          "Symbiosis komensalisme, symbiosis organisme, symbiosis parasitisme, symbiosis netralisme",
          "Symbiosis mutualisme, symbiosis komensalisme, symbiosis parasitisme, symbiosis netralisme",
          "Symbiosis interaksime, symbiosis mutualisme, symbiosis netralisme, symbiosis parasitisme",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 14,
        question: "Rantai makanan merupakan satu garis jalur makanan dalam interaksi komponen biotik yang melibatkan peran?",
        answer: "Produsen, konsumen, dan pengurai",
        options: [
          "Produsen, konsumen, dan pengurai",
          "Pemangsa, predator, dan konsumen",
          "Produsen, pengurai, dan amuba",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 15,
        question: "Jenis-jenis limbah yang dapat menyebabkan pencemaran air?",
        answer: "Limbah padat, limbah organik, limbah cair, limbah kimia",
        options: [
          "Limbah lunak, limbah oksidan, limbah organik, limbah industri",
          "Limbah rumah tangga, limbah padat, limbah udara, limbah kimia",
          "Limbah padat, limbah organik, limbah cair, limbah kimia",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 16,
        question: "Pencemaran lingkungan merupakan dampak dari tindakan manusia. Zat yang menyebabkan pencemaran lingkungan disebut?",
        answer: "Polutan",
        options: [
          "Limbah",
          "Polutan",
          "Sampah",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 17,
        question: "Limbah yang mudah mengalami pembusukan akibat aktivitas mikroorganisme adalah?",
        answer: "Limbah organik",
        options: [
          "Limbah padat",
          "Limbah organik",
          "Limbah kimia",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 18,
        question: "Apa yang dapat menjadi konsekuensi dari pencemaran tanah oleh bahan kimia bahaya?",
        answer: "Penurunan pertumbuhan tanaman",
        options: [
          "Peningkatan jumlah hewan tanah",
          "Peningkatan kesuburan tanah",
          "Penurunan pertumbuhan tanaman",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 19,
        question: "Dampak pencemaran lingkungan?",
        answer: "Munculnya berbagai penyakit, punahnya spesies, ledakan hama, ketidakseimbanganya lingkungan",
        options: [
          "Munculnya berbagai penyakit, punahnya spesies, ledakan hama, ketidakseimbanganya lingkungan",
          "Munculnya berbagai penyakit, suburnya ekosistem, ledakan hama, seimbanganya lingkungan",
          "Gangguan fisik, lingkungan seimbang, munculnya penyakit, berkurangnya hama",
          "Semua jawaban benar"
        ]
      },
      {
        numb: 20,
        question: "Upaya dalam mengatasi pencemaran lingkungan dapat dilakukan dengan cara?",
        answer: "Memilah sampah dan melakukan daur ulang sampah dengan baik",
        options: [
          "Membuang sampah di Sungai",
          "Melakukan penebangan hutan",
          "Memilah sampah dan melakukan daur ulang sampah dengan baik",
          "Semua jawaban benar"
        ]
      }
];














//selecting all required elements
const start_btn_bab_1_soal_multiplai  = document.querySelector(".mulai-bab-1-soal-multiplai");
const box_bab_1_soal_multiplai = document.querySelector(".box-bab-1-soal-multiplai");
const result_box_bab_1_soal_multiplai = document.querySelector(".result-box-bab-1-soal-multiplai");
const option_box_bab_1_soal_multiplai = document.querySelector(".option-box-bab-1-soal-multiplai");
const button_bab_1_soal_multiplai = document.querySelectorAll(".soal-bab-1-isi-click");
const close_bab_1_soal_multiplai = document.querySelector(".close-soal-1-logo-close-multiple");


// if startQuiz button clicked
start_btn_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        },40) 
    })
})

close_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.remove("activeQuiz");
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid';
        setTimeout(() => {
            element.style.opacity = '1';
        },215) 
    })
})




let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_bab_1_soal_multiplai = result_box_bab_1_soal_multiplai.querySelector(".buttons .restart-bab-1-soal-multiplai");


// if restartQuiz button clicked
restart_bab_1_soal_multiplai.onclick = ()=>{
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    result_box_bab_1_soal_multiplai.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
}



const next_btn_bab_1_soal_multiplai = document.querySelector("footer .next-btn-bab-1-soal-multiplai");
const bottom_ques_counter_bab_1_soal_multiplai = document.querySelector("footer .total-que-bab-1-soal-multiplai ");

// if Next Que button clicked
next_btn_bab_1_soal_multiplai.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
    }else{
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_box_bab_1_soal_multiplai.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_box_bab_1_soal_multiplai.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_box_bab_1_soal_multiplai.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_box_bab_1_soal_multiplai.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_box_bab_1_soal_multiplai.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_box_bab_1_soal_multiplai.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_box_bab_1_soal_multiplai.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_bab_1_soal_multiplai.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    box_bab_1_soal_multiplai.classList.remove("activeQuiz"); //hide quiz box
    result_box_bab_1_soal_multiplai.classList.add("activeResult"); //show result box
    const scoreText = result_box_bab_1_soal_multiplai.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> dari <p>'+ questions.length +'</p> Soal</span>';
    bottom_ques_counter_bab_1_soal_multiplai.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter_bab_1_soal_multiplai
}















const kunci_jawaban_open = document.querySelector('.soal-bab-1-isi-click-kunci-jawaban') 
const kunci_jawaban = document.querySelectorAll('.soal-bab-1-kunci-jawaban')
const close_kunci_jawaban = document.querySelector('.header-soal-1-logo-close-kunci-jawaban')
const password_bab_1 = document.querySelectorAll('.scrollbox-inner-password')

kunci_jawaban_open.addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },50)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },50)
    })
})


close_kunci_jawaban.addEventListener('click', () => {

    kunci_jawaban.forEach(element => {
        element.style.transform = 'translateY(200%)'
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },220)
    })
})


document.querySelector('.back-soal-1-logo-close-password').addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.opacity = '0'
        setTimeout(() => {
            element.style.display = 'none'
        },120)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },80)
    })
})



document.querySelector('.quit-keluar-bab-1').addEventListener('click', () => {
    window.location.reload()
})





const FormBab1 = document.getElementById('password-form');


FormBab1.addEventListener('submit',(event) => {
    const SandiBab1Multiple = "OPEN BAB 1 PILGAN";
    const KunciBab1Multiple = document.querySelector('.scrollbox-inner-pertanyaan-kunci-jawaban-bab-1-multiple');
    const AllFormBab1 = document.querySelector('.scrollbox-inner-password')

    

    event.preventDefault(); 
    const jawab = document.querySelector('.password').value;


    console.log('Jawaban yang dimasukkan:', jawab);
    console.log('SandiBab1MultipleMobile:', SandiBab1Multiple);

    if (jawab === SandiBab1Multiple) {
        kunci_jawaban.forEach(element => {
            element.style.transform = 'translateY(20%)'
        })
        AllFormBab1.style.display = 'none'
    }else{
      const salah_boss = document.querySelector('.wrong-sound-new')
      salah_boss.play();
    }

    document.getElementById('password').value = '';

});






