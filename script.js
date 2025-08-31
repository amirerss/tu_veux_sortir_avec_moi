// Müziğin sesini %25'e düşürür
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    music.volume = 0.25; 
});

// Sayfalar arasında geçiş yapar
function nextPage() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    
    const music = document.getElementById('background-music');
    music.play().catch(e => console.log("Müzik otomatik oynatma engellendi:", e));
}

// "Evet" butonuna basınca "Yaşasın!" mesajını gösterir
function showYayMessage() {
    document.getElementById('yayMessage').classList.remove('hidden');
    document.getElementById('page2').classList.add('hidden');
}

// "Hayır" butonuna basınca "Emin misin?" mesajını gösterir
function showConfirmMessage() {
    document.getElementById('confirmMessage').classList.remove('hidden');
}

// "Emin misin?" mesajında evet denince "Utanırım" mesajını gösterir
function showSecretMessage() {
    document.getElementById('confirmMessage').classList.add('hidden');
    document.getElementById('secretMessage').classList.remove('hidden');
}

// "Utanırım" mesajı gösterildikten sonra "Üzüldüm" mesajını gösterir
function showSadMessage() {
    document.getElementById('secretMessage').classList.add('hidden');
    document.getElementById('sadMessage').classList.remove('hidden');
}

// Herhangi bir mesaj kutusunu gizlemek için genel bir fonksiyon
function hideMessageBox(boxId) {
    document.getElementById(boxId).classList.add('hidden');
    // Eğer "Evet" mesajı gizleniyorsa, sayfayı eski haline getir
    if (boxId === 'yayMessage' || boxId === 'sadMessage') {
        document.getElementById('page2').classList.remove('hidden');
    }
}