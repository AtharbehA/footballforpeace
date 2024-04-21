let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');

}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';

}

document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

function sendWhatsAppMessage(e) {
    e.preventDefault(); // منع النموذج من الإرسال التقليدي

    // جمع بيانات النموذج
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var number = document.querySelector('input[name="number"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // إنشاء رسالة
    var fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`;

    // إنشاء رابط واتساب
    var whatsappUrl = `https://wa.me/+96551621522?text=${encodeURIComponent(fullMessage)}`;

    // فتح الرابط
    window.open(whatsappUrl, '_blank');
}


let slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(nextSlide, 5000); // تغيير الشريحة كل 5000 ميلي ثانية (5 ثواني)


// تحديد زر المشاركة باستخدام الهوية
const shareButton = document.getElementById('share-button');

// إضافة مستمع لحدث النقرة
shareButton.addEventListener('click', function() {
    // تغيير مصدر الصورة إلى مصدر الفيديو
    const image = document.querySelector('.box img');
    image.src = 'videos/video.mov'; // استبدل بمسار الفيديو الخاص بك
});
