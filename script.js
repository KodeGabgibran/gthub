// Data Teks untuk Penggantian Bahasa
const translations = {
    id: {
        pageTitle: "Setiady Group | Jual Beli Properti",
        brandName: "🏠 Setiady Group",
        navHome: "Beranda",
        navModels: "Model Rumah",
        navContact: "Hubungi Kami",
        heroHeading: "Temukan Rumah Impian Anda",
        heroText: "Pilihan properti modern dan strategis hanya di Setiady Group.",
        exploreBtn: "Jelajahi Sekarang",
        featuredHeading: "Model Desain Rumah Unggulan",
        cardTitle1: "Rumah Minimalis Modern",
        cardPrice1: "Mulai dari Rp 750 Juta",
        cardBtn1: "Lihat Detail",
        cardTitle2: "Gaya Skandinavia",
        cardPrice2: "Mulai dari Rp 1,2 Miliar",
        cardBtn2: "Lihat Detail",
        cardTitle3: "Kontemporer Mewah",
        cardPrice3: "Mulai dari Rp 2,5 Miliar",
        cardBtn3: "Lihat Detail",
        ownerHeading: "Profil Perusahaan",
        profileName: "Setiady Group",
        profileDescription: "Setiady Group adalah pengembang properti terkemuka yang berfokus pada pembangunan rumah-rumah modern, berkualitas, dan berlokasi strategis. Kami berkomitmen untuk mewujudkan impian kepemilikan rumah Anda.",
        footerBrandTitle: "🏠 Setiady Group",
        footerBrandText: "Solusi Properti Terbaik Anda.",
        footerContactTitle: "Hubungi Kami",
        footerPhone: "+62 574-321-760",
        privacyLink: "Kebijakan Privasi",
        footerSocialTitle: "Ikuti Kami",
        signUpBtn: "Sign Up",
        loginBtn: "Login",
        modalSignUpTitle: "Daftar",
        modalLoginTitle: "Login",
        labelEmail: "Email:",
        submitSignUpBtn: "Daftar",
        submitLoginBtn: "Login",
        msgSuccessSignUp: "Pendaftaran berhasil! Silakan Login.",
        msgSuccessLogin: "Login berhasil! Selamat datang kembali.",
        msgErrorLogin: "Akun tidak terdaftar. Silakan Sign Up terlebih dahulu.",
        msgErrorEmpty: "Email tidak boleh kosong."
    },
    en: {
        pageTitle: "Setiady Group | Property Marketplace",
        brandName: "🏠 Setiady Group",
        navHome: "Home",
        navModels: "House Models",
        navContact: "Contact Us",
        heroHeading: "Find Your Dream Home",
        heroText: "Modern and strategically located properties only at Setiady Group.",
        exploreBtn: "Explore Now",
        featuredHeading: "Featured House Designs",
        cardTitle1: "Modern Minimalist House",
        cardPrice1: "Starting from IDR 750 Million",
        cardBtn1: "View Detail",
        cardTitle2: "Scandinavian Style",
        cardPrice2: "Starting from IDR 1.2 Billion",
        cardBtn2: "View Detail",
        cardTitle3: "Luxury Contemporary",
        cardPrice3: "Starting from IDR 2.5 Billion",
        cardBtn3: "View Detail",
        ownerHeading: "Company Profile",
        profileName: "Setiady Group",
        profileDescription: "Setiady Group is a leading property developer focused on building modern, quality, and strategically located homes. We are committed to realizing your homeownership dreams.",
        footerBrandTitle: "🏠 Setiady Group",
        footerBrandText: "Your Best Property Solution.",
        footerContactTitle: "Contact Us",
        footerPhone: "+62 574-321-760",
        privacyLink: "Privacy Policy",
        footerSocialTitle: "Follow Us",
        signUpBtn: "Sign Up",
        loginBtn: "Login",
        modalSignUpTitle: "Sign Up",
        modalLoginTitle: "Login",
        labelEmail: "Email:",
        submitSignUpBtn: "Sign Up",
        submitLoginBtn: "Login",
        msgSuccessSignUp: "Sign up successful! Please Login.",
        msgSuccessLogin: "Login successful! Welcome back.",
        msgErrorLogin: "Account not registered. Please Sign Up first.",
        msgErrorEmpty: "Email cannot be empty."
    }
};

let currentLang = 'id';
const registeredUsers = new Set(); // Menyimpan email pengguna yang terdaftar

// Fungsi untuk mengganti bahasa
function updateContent(lang) {
    const texts = translations[lang];
    document.getElementById('pageTitle').textContent = texts.pageTitle;
    document.getElementById('brandName').textContent = texts.brandName;
    document.getElementById('navHome').textContent = texts.navHome;
    document.getElementById('navModels').textContent = texts.navModels;
    document.getElementById('navContact').textContent = texts.navContact;
    document.getElementById('signUpBtn').textContent = texts.signUpBtn;
    document.getElementById('loginBtn').textContent = texts.loginBtn;
    document.getElementById('heroHeading').textContent = texts.heroHeading;
    document.getElementById('heroText').textContent = texts.heroText;
    document.getElementById('exploreBtn').textContent = texts.exploreBtn;
    document.getElementById('featuredHeading').textContent = texts.featuredHeading;
    document.getElementById('cardTitle1').textContent = texts.cardTitle1;
    document.getElementById('cardPrice1').textContent = texts.cardPrice1;
    document.getElementById('cardBtn1').textContent = texts.cardBtn1;
    document.getElementById('cardTitle2').textContent = texts.cardTitle2;
    document.getElementById('cardPrice2').textContent = texts.cardPrice2;
    document.getElementById('cardBtn2').textContent = texts.cardBtn2;
    document.getElementById('cardTitle3').textContent = texts.cardTitle3;
    document.getElementById('cardPrice3').textContent = texts.cardPrice3;
    document.getElementById('cardBtn3').textContent = texts.cardBtn3;
    document.getElementById('ownerHeading').textContent = texts.ownerHeading;
    document.getElementById('profileName').textContent = texts.profileName;
    document.getElementById('profileDescription').textContent = texts.profileDescription;
    document.getElementById('footerBrandTitle').textContent = texts.footerBrandTitle;
    document.getElementById('footerBrandText').textContent = texts.footerBrandText;
    document.getElementById('footerContactTitle').textContent = texts.footerContactTitle;
    document.getElementById('footerPhone').textContent = texts.footerPhone;
    document.getElementById('privacyLink').textContent = texts.privacyLink;
    document.getElementById('footerSocialTitle').textContent = texts.footerSocialTitle;
    document.documentElement.lang = lang; // Update lang attribute
}

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    updateContent(currentLang);
}

// Inisialisasi konten saat load
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
});


// LOGIKA MODAL SIGN UP/LOGIN
const modal = document.getElementById('authModal');
const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const submitAuthBtn = document.getElementById('submitAuthBtn');
const authForm = document.getElementById('authForm');
const authEmailInput = document.getElementById('authEmail');
const authMessage = document.getElementById('authMessage');

let currentMode = ''; // 'signup' atau 'login'

// Buka Modal
function openModal(mode) {
    currentMode = mode;
    authEmailInput.value = ''; // Kosongkan input
    authMessage.textContent = ''; // Kosongkan pesan
    const texts = translations[currentLang];

    if (mode === 'signup') {
        modalTitle.textContent = texts.modalSignUpTitle;
        submitAuthBtn.textContent = texts.submitSignUpBtn;
    } else {
        modalTitle.textContent = texts.modalLoginTitle;
        submitAuthBtn.textContent = texts.submitLoginBtn;
    }

    modal.style.display = 'block';
}

// Tutup Modal
function closeModal() {
    modal.style.display = 'none';
}

// Event Listeners untuk tombol
signUpBtn.addEventListener('click', () => openModal('signup'));
loginBtn.addEventListener('click', () => openModal('login'));
closeBtn.addEventListener('click', closeModal);

// Tutup modal ketika klik di luar area modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Penanganan Form Submit
authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = authEmailInput.value.trim();
    const texts = translations[currentLang];

    if (email === "") {
        authMessage.textContent = texts.msgErrorEmpty;
        return;
    }
    
    authMessage.textContent = ''; // Reset pesan error

    if (currentMode === 'signup') {
        // Logika Sign Up
        registeredUsers.add(email);
        authMessage.textContent = texts.msgSuccessSignUp;
        authMessage.style.color = 'green';
        setTimeout(closeModal, 2000); // Tutup setelah 2 detik
    } else if (currentMode === 'login') {
        // Logika Login
        if (registeredUsers.has(email)) {
            authMessage.textContent = texts.msgSuccessLogin;
            authMessage.style.color = 'green';
            // Simulasikan navigasi atau penanda login (misal: tombol login jadi 'Logout')
            document.getElementById('loginBtn').textContent = 'Logout'; 
            document.getElementById('signUpBtn').style.display = 'none'; // Sembunyikan sign up setelah login
            setTimeout(closeModal, 2000);
        } else {
            authMessage.textContent = texts.msgErrorLogin;
            authMessage.style.color = 'red';
        }
    }
});

// Tambahkan logika untuk tombol Logout
document.getElementById('loginBtn').addEventListener('click', function() {
    const isLogout = this.textContent === 'Logout';
    if (isLogout) {
        // Logika Logout
        this.textContent = translations[currentLang].loginBtn; // Kembalikan ke teks Login
        document.getElementById('signUpBtn').style.display = 'inline-block'; // Tampilkan lagi sign up
        // Logika penghapusan sesi pengguna jika ada
        alert("Anda telah Logout.");
    } else {
        // Jika teks masih Login, buka modal login
        openModal('login');
    }
});