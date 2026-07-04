// ============================================================
//  BU DOSYAYA DOKUNMANIZA GEREK YOK.
//  icerik.js dosyasındaki yazıları sayfaya yerleştirir.
// ============================================================

function metinYaz(id, metin) {
  const el = document.getElementById(id);
  if (!el) return;
  if (metin && metin.trim()) {
    el.textContent = metin;
  } else {
    el.style.display = "none";
  }
}

function fotoYerlestir(id, yol, placeholderYazi) {
  const el = document.getElementById(id);
  if (!el) return;
  if (yol && yol.trim()) {
    el.style.backgroundImage = `url("${yol}")`;
  } else {
    el.classList.add("photo-placeholder");
    el.textContent = placeholderYazi;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const C = ICERIK;

  // Sayfa başlığı ve logo
  document.title = `${C.isim} | ${C.unvan}`;
  const isimParcalari = C.isim.split(" ");
  const sonKelime = isimParcalari.pop();
  document.getElementById("logo").innerHTML =
    `${isimParcalari.join(" ")} <span>${sonKelime}</span>`;

  // WhatsApp linkleri
  const waUrl = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(C.whatsappMesaj)}`;
  document.querySelectorAll(".wa-link").forEach(a => {
    a.href = waUrl;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Hero
  metinYaz("heroBaslik", C.heroBaslik);
  document.getElementById("heroAltYazi").textContent = C.heroAltYazi;
  const rozetler = [C.rozet1, C.rozet2].filter(r => r && r.trim());
  document.getElementById("heroBadges").innerHTML =
    rozetler.map(r => `<span class="badge">${r}</span>`).join("");
  fotoYerlestir("heroFoto", C.heroFoto, "Fotoğrafınız buraya gelecek (icerik.js → heroFoto)");

  // Hakkımda
  document.getElementById("hakkimdaBaslik").textContent = C.hakkimdaBaslik;
  document.getElementById("hakkimdaYazi").textContent = C.hakkimdaYazi;
  fotoYerlestir("hakkimdaFoto", C.hakkimdaFoto, "Fotoğrafınız buraya gelecek (icerik.js → hakkimdaFoto)");

  document.getElementById("ozellikler").innerHTML = C.ozellikler.map((o, i) => `
    <div class="ozellik-kart">
      <div class="num">0${i + 1}</div>
      <h3>${o.baslik}</h3>
      <p>${o.yazi}</p>
    </div>`).join("");

  // Paketler
  document.getElementById("paketlerBaslik").textContent = C.paketlerBaslik;
  document.getElementById("paketlerAltYazi").textContent = C.paketlerAltYazi;
  document.getElementById("paketListesi").innerHTML = C.paketler.map(p => `
    <div class="paket-kart ${p.oneCikan ? "one-cikan" : ""}">
      ${p.oneCikan ? '<span class="paket-etiket">En Popüler</span>' : ""}
      <h3>${p.ad}</h3>
      <p class="paket-aciklama">${p.aciklama}</p>
      <div class="paket-fiyat">${p.fiyat}</div>
      <ul>${p.icerik.map(m => `<li>${m}</li>`).join("")}</ul>
      <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary">Bilgi Al</a>
    </div>`).join("");

  // Yorumlar (boşsa bölümü gizle)
  if (C.yorumlar && C.yorumlar.length) {
    document.getElementById("yorumlarBaslik").textContent = C.yorumlarBaslik;
    document.getElementById("yorumListesi").innerHTML = C.yorumlar.map(y => `
      <div class="yorum-kart">
        <div class="tirnak">“</div>
        <p>${y.yazi}</p>
        <div class="yorum-isim">${y.isim}</div>
      </div>`).join("");
  } else {
    document.getElementById("yorumlar").style.display = "none";
  }

  // SSS (boşsa bölümü gizle)
  if (C.sss && C.sss.length) {
    document.getElementById("sssBaslik").textContent = C.sssBaslik;
    document.getElementById("sssListesi").innerHTML = C.sss.map(s => `
      <details class="sss-item">
        <summary>${s.soru}</summary>
        <div class="cevap">${s.cevap}</div>
      </details>`).join("");
  } else {
    document.getElementById("sss").style.display = "none";
  }

  // İletişim
  document.getElementById("iletisimBaslik").textContent = C.iletisimBaslik;
  document.getElementById("iletisimYazi").textContent = C.iletisimYazi;

  const linkler = [
    `<a href="${waUrl}" target="_blank" rel="noopener">📱 WhatsApp</a>`
  ];
  if (C.instagram && C.instagram.trim()) {
    linkler.push(`<a href="https://instagram.com/${C.instagram}" target="_blank" rel="noopener">📷 Instagram</a>`);
  }
  if (C.youtube && C.youtube.trim()) {
    linkler.push(`<a href="${C.youtube}" target="_blank" rel="noopener">▶️ YouTube</a>`);
  }
  if (C.email && C.email.trim()) {
    linkler.push(`<a href="mailto:${C.email}">✉️ E-posta</a>`);
  }
  document.getElementById("iletisimLinkleri").innerHTML = linkler.join("");

  metinYaz("adres", C.adres);
  document.getElementById("copyright").textContent =
    `© ${new Date().getFullYear()} ${C.isim} — Tüm hakları saklıdır.`;

  // Mobil menü
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => navLinks.classList.toggle("acik"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("acik")));
});
