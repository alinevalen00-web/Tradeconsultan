document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                console.log('Nama:', name);
                console.log('Email:', email);
                console.log('Pesan:', message);
                
                alert('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
                
                contactForm.reset();
            } else {
                alert('Mohon lengkapi semua bidang formulir.');
            }
        });
    }

    // Fungsi untuk memicu animasi saat elemen terlihat di viewport
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Opsional: hapus kelas 'visible' jika ingin animasi terjadi setiap kali di-scroll
                // entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // Elemen dianggap terlihat jika 10% dari elemen masuk viewport
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Handle scroll untuk parallax jika ada JS tambahan yang dibutuhkan
    // (saat ini parallax sudah ditangani oleh CSS background-attachment: fixed)
});