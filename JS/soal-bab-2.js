
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Zat tunggal yang tidak bisa lagi disederhanakan menggunakan reaksi kimia biasa disebut dengan",
    answer: "Unsur",
    options: [
      "Koloid",
      "Larutan",
      "Unsur",
      "Senyawa"
    ]
  },
  {
    numb: 2,
    question: "Kelompok zat-zat di bawah ini yang merupakan senyawa adalah",
    answer: "Air- Garam dapur- Gula Pasir",
    options: [
      "Udara- Air laut- Cuka dapur",
      "Emas- Perunggu- Perak",
      "Air- Garam dapur- Gula Pasir",
      "Susu murni – Bensin murni – Air murni"
    ]
  },
  {
    numb: 3,
    question: "Lambang unsur kalium, timah, perak dan timbal berturut-turut adalah...",
    answer: "K, Sn, Ag, Pb",
    options: [
      "K, Sn, Ag, Pb",
      "Ca, Sn, Ag, Ti",
      "K, Ti, Pe, Pb",
      "K, Ti, Ag, Pb"
    ]
  },
  {
    numb: 4,
    question: "Pernyataan di bawah ini yang tidak benar berkaitan dengan senyawa adalah...",
    answer: "Komposisi zat penyusunnya sembarang",
    options: [
      "Tersusun lebih dari satu zat tunggal",
      "Gula adalah salah satu contoh senyawa",
      "Perbandingan massa zat penyusunnya adalah tetap",
      "Komposisi zat penyusunnya sembarang"
    ]
  },
  {
    numb: 5,
    question: "Zat-zat berikut yang tergolong unsur adalah...",
    answer: "Hidrogen, belerang, seng",
    options: [
      "Hidrogen, belerang, seng",
      "Gula, terasi, besi",
      "Glukosa, belerang, seng",
      "Tembaga, kapur, urea"
    ]
  },
  {
    numb: 6,
    question: "Bensin dipisahkan dengan minyak bumi dengan cara...",
    answer: "Distilasi bertingkat",
    options: [
      "Filtrasi",
      "Distilasi bertingkat",
      "Kristalisasi",
      "Sentrifugasi"
    ]
  },
  {
    numb: 7,
    question: "Dari pernyataan berikut, yang termasuk kedalam sifat kimia adalah...",
    answer: "(2), (4), dan (5)",
    options: [
      "(1), (2), dan (4)",
      "(2), (4), dan (5)",
      "(1), (4), dan (5)",
      "(3), (1), dan (5)"
    ]
  },
  {
    numb: 8,
    question: "Pemisahan campuran zat cair berdasarkan perbedaan titik didihnya merupakan prinsip...",
    answer: "Penyulingan",
    options: [
      "Evaporasi",
      "Ekstraksi",
      "Penyulingan",
      "Kromatografi"
    ]
  },
  {
    numb: 9,
    question: "Sesuatu yang menempati ruang dan memiliki massa disebut...",
    answer: "Zat",
    options: [
      "Campuran",
      "Unsur",
      "Senyawa",
      "Zat"
    ]
  },
  {
    numb: 10,
    question: "Jangka adalah alat ukur yang dapat digunakan untuk mengetahui panjang,diameter luar, diameter dalam. Bagian yang digunakan untuk mengukur diameter dalam disebut dengan...",
    answer: "Internal jaws",
    options: [
      "Matric scale",
      "Nonius scale",
      "Internal jaws",
      "External jaws"
    ]
  },
  {
    numb: 11,
    question: "Pemisahan campuran yang mengandung padat dan cairan dilakukan dengan cara menggunakan sebuah alat yaitu filter, disebut dengan...",
    answer: "Filtrasi",
    options: [
      "Filtrasi",
      "Destilasi",
      "Kromatografi",
      "Ekstraksi"
    ]
  },
  {
    numb: 12,
    question: "Besi berkarat di sebabkan terjadinya reaksi kimia antar besi dengan.....",
    answer: "Air",
    options: [
      "Hujan asam",
      "Oksigen",
      "Hidrogen",
      "Air"
    ]
  },
  {
    numb: 13,
    question: "Segelas susu dibiarkan di atas meja oleh pemiliknya, keesokan harinya sang pemilik kemeja untuk mengambil susu. Ternyata susu tersebut telah menjadi masam, masamnya susu tersebut termasuk sifat......",
    answer: "Kimia karena terbentuk zat baru yang rasanya masam",
    options: [
      "Kimia karena terbentuk zat baru yang rasanya masam",
      "Kimia karena masam salah satu bentuk senyawa",
      "Fisika karena berubah warna dan bau",
      "Fisika karena berubah rasa dan bau"
    ]
  },
  {
    numb: 14,
    question: "Peristiwa berikut yang menunjukkan terjadinya perubahan fisika adalah.....",
    answer: "Gula larut dalam air",
    options: [
      "Buah membusuk",
      "Besi berkarat",
      "Gula larut dalam air",
      "Kertas dibakar"
    ]
  },
  {
    numb: 15,
    question: "Ketika sebuah benda padat dipanaskan, apa yang terjadi pada jarak antar partikel penyusunnya...",
    answer: "Jarak antar partikel meningkat",
    options: [
      "Jarak antar partikel meningkat",
      "Jarak antar partikel tetap",
      "Jarak antar partikel berkurang",
      "Jarak antar partikel berubah acak"
    ]
  },
  {
    numb: 16,
    question: "Apa yang menyebabkan daun pada pohon berubah warna menjadi kemerahan pada musim gugur....",
    answer: "Penurunan klorofil pada daun",
    options: [
      "Kurangnya air di musim gugur",
      "Penurunan suhu yang menyebabkan peningkatan klorofil",
      "Penurunan klorofil pada daun",
      "Penambahan nutrisi pada tanah"
    ]
  },
  {
    numb: 17,
    question: "Apa yang merupakan contoh perubahan fisika.....",
    answer: "Pencampuran gula dengan air",
    options: [
      "Pembakaran kayu",
      "Pencernaan makanan",
      "Pencampuran gula dengan air",
      "Pembusukan makanan"
    ]
  },
  {
    numb: 18,
    question: "Suatu benda padat diletakkan di dalam lemari pakaian dan lama kelamaan bentuk itu menghilang. Pernyataan tersebut merupakan bentuk peristiwa......",
    answer: "Menyublim",
    options: [
      "Menyublim",
      "Kristalisasi",
      "Destilasi",
      "Sublimasi"
    ]
  },
  {
    numb: 19,
    question: "Salah satu contoh limbah rumah tangga adalah....",
    answer: "Air kakus dan dapur",
    options: [
      "Penggunaan Pestisida",
      "Logam berat",
      "Kebocoran minyak di perairan",
      "Air kakus dan dapur"
    ]
  },
  {
    numb: 20,
    question: "Tahap awal dari pengolahan limbah dikenal dengan istilah.....",
    answer: "Unit pengolahan fisika",
    options: [
      "Eksploitasi limbah",
      "Unit pengolahan fisik",
      "Unit pengolahan fisika dan biologi",
      "Unit pengolahan fisika"
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
    const SandiBab1Multiple = "OPEN BAB 2 PILGAN";
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


