// ============================================================
//  SİTENİZİN TÜM YAZILARI BU DOSYADA!
//  Sadece tırnak içindeki ("...") yazıları değiştirin.
//  Tırnakları, virgülleri ve parantezleri SİLMEYİN.
//  Kaydedin, site otomatik güncellenir.
// ============================================================

const ICERIK = {

  // ---------- GENEL BİLGİLER ----------
  isim: "Ege Sarp",                 // Sitenin her yerinde görünen adınız
  unvan: "Personal Trainer",                // Adınızın altında görünen ünvan
  whatsapp: "905XXXXXXXXX",                 // Başında + olmadan, örn: 905375019202
  whatsappMesaj: "Merhaba, PT paketleri hakkında bilgi almak istiyorum.", // WhatsApp'a tıklayınca hazır gelen mesaj
  instagram: "Aegeus.1",            // Sadece kullanıcı adı, @ işareti olmadan
  youtube: "https://www.youtube.com/@egesarp",                              // YouTube kanal adresi (yoksa boş bırakın: "")
  email: "sarpege4@gmail.com",                 // E-posta adresiniz (yoksa boş bırakın: "")

  // ---------- ÜST BÖLÜM (HERO) ----------
  heroBaslik: "Harika bir değişime hazır mısınız?",
  heroAltYazi: "Kişiye özel antrenman, kür, peptit, ve beslenme programlarıyla hedefinize birlikte ulaşalım.",
  rozet1: "8+ Yıl Deneyim",                 // Başlığın yanındaki 1. rozet
  rozet2: "Sertifikalı Antrenör",           // 2. rozet (yoksa boş bırakın: "")
  heroFoto: "",                             // img klasörüne foto atıp adını yazın, örn: "img/hero.jpg"

  // ---------- HAKKIMDA ----------
  hakkimdaBaslik: "Neden Benimle Çalışmalısınız?",
  hakkimdaYazi: "Buraya kendinizi tanıtan 2-3 cümle yazın. Deneyiminizden, eğitiminizden ve antrenman yaklaşımınızdan bahsedin.",
  hakkimdaFoto: "",                         // img klasörüne foto atıp adını yazın, örn: "img/ben.jpg"

  // Hakkımda bölümündeki 4 kutu (başlık + açıklama)
  ozellikler: [
    {
      baslik: "Bilimsel Yaklaşım",
      yazi: "Programlarım güncel spor bilimi araştırmalarına dayanır."
    },
    {
      baslik: "Kişiye Özel Planlama",
      yazi: "Hedefinize, seviyenize ve programınıza göre plan hazırlarım."
    },
    {
      baslik: "Sürekli Takip",
      yazi: "Düzenli form kontrolü ve ölçümlerle ilerlemenizi takip ederim."
    },
    {
      baslik: "7/24 İletişim",
      yazi: "WhatsApp üzerinden her zaman ulaşabilirsiniz."
    }
  ],

  // ---------- PT PAKETLERİ ----------
  paketlerBaslik: "PT Paketleri",
  paketlerAltYazi: "Dönüşümün için ilk adımı at",

  // Yeni paket eklemek için bir paketi { ... }, ile birlikte kopyalayıp altına yapıştırın.
  // Silmek için paketi { ... }, ile birlikte silin.
  // oneCikan: true yazarsanız o paket "EN POPÜLER" etiketiyle öne çıkar.
  paketler: [
    {
      ad: "8 Seans Bire Bir PT",
      fiyat: "₺X.XXX",
      aciklama: "Başlangıç için ideal",
      icerik: [
        "Haftada 2 gün bire bir antrenman",
        "Kişiye özel antrenman programı",
        "Beslenme önerileri",
        "WhatsApp desteği"
      ],
      oneCikan: false
    },
    {
      ad: "12 Seans Bire Bir PT",
      fiyat: "₺X.XXX",
      aciklama: "En çok tercih edilen",
      icerik: [
        "Haftada 3 gün bire bir antrenman",
        "Kişiye özel antrenman programı",
        "Kişiye özel beslenme planı",
        "Düzenli ölçüm ve takip",
        "WhatsApp desteği"
      ],
      oneCikan: true
    },
    {
      ad: "Online Koçluk (Aylık)",
      fiyat: "₺X.XXX",
      aciklama: "Uzaktan eğitim",
      icerik: [
        "Kişiye özel antrenman programı",
        "Kişiye özel beslenme planı",
        "Haftalık form kontrolü",
        "WhatsApp desteği"
      ],
      oneCikan: false
    }
  ],

  // ---------- DANIŞAN YORUMLARI ----------
  // Yorum yoksa köşeli parantezin içini boş bırakın: yorumlar: [ ]
  yorumlarBaslik: "Danışanlarım Ne Diyor?",
  yorumlar: [
    {
      isim: "Danışan Adı",
      yazi: "Buraya danışanınızın yorumunu yazın. Örn: 3 ayda 10 kilo verdim, programlar tam bana göreydi."
    },
    {
      isim: "Danışan Adı",
      yazi: "İkinci danışan yorumu buraya."
    }
  ],

  // ---------- SIK SORULAN SORULAR ----------
  // Soru eklemek/silmek için paketlerdeki gibi { ... }, bloklarını kopyalayın/silin.
  sssBaslik: "Sık Sorulan Sorular",
  sss: [
    {
      soru: "Daha önce hiç spor yapmadım, bana uygun mu?",
      cevap: "Kesinlikle. Programlar tamamen seviyenize göre hazırlanır, sıfırdan başlayanlarla da çalışıyorum."
    },
    {
      soru: "Seanslar nerede yapılıyor?",
      cevap: "Buraya çalıştığınız salonun adını ve semtini yazın."
    },
    {
      soru: "Ödeme nasıl yapılıyor?",
      cevap: "Buraya ödeme koşullarınızı yazın (havale, nakit, taksit vb.)."
    }
  ],

  // ---------- İLETİŞİM ----------
  iletisimBaslik: "İletişime Geçin",
  iletisimYazi: "Sorularınız için WhatsApp'tan yazabilir veya sosyal medyadan ulaşabilirsiniz.",
  adres: "Salon adı ve semt (istemiyorsanız boş bırakın: \"\")"
};
