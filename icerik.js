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
  whatsapp: "905309739600",                 // Başında + olmadan, örn: 905375019202
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
  hakkimdaYazi: "Çünkü sadece program yazıp kenara çekilmiyorum. 8+ yıllık tecrübemle hedefini, düzenini ve mevcut durumunu anlayarak sana özel, uygulanabilir bir plan çıkarıyorum. Antrenman, beslenme, biohacking ve süreç takibini birlikte yöneterek daha kontrollü, bilinçli ve sonuç odaklı ilerlemeni sağlıyorum.",
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
    ad: "1 Aylık Full Coaching Tanışma Paketi",
    fiyat: "₺1.500",
    aciklama: "Kısa sürede daha kontrollü, bilinçli ve kişiye özel bir süreç başlatmak isteyenler için hazırlanmış kapsamlı coaching paketidir. Hedefin, mevcut durumun, antrenman geçmişin, beslenme düzenin ve yaşam tarzın değerlendirilerek sana özel bir sistem oluşturulur.",
    icerik: [
      "Kişiye özel antrenman planı",
      "Kişiye özel beslenme/diyet planı",
      "Kür süreci planlama ve takip",
      "Peptit, anabolik ve biohacking desteği",
      "Supplement ve destek ürünleri planlaması",
      "7/24 WhatsApp desteği",
      "Düzenli form kontrolü",
      "Gidişata göre program güncellemeleri",
      "Kan tahlili inceleme ve genel değerlendirme"
    ]
  },
  {
      oneCikan: false
    },
   {
    ad: "3 Aylık Full Coaching Paketi",
    fiyat: "₺...",
    aciklama: "Daha ciddi, sürdürülebilir ve uzun vadeli bir dönüşüm hedefleyenler için hazırlanmış en kapsamlı coaching paketidir. 3 aylık süreç boyunca antrenman, beslenme, biohacking, kür planlaması ve düzenli takip bir arada yönetilir.",
    icerik: [
      "Kişiye özel antrenman planı",
      "Kişiye özel beslenme/diyet planı",
      "Hedefe göre uzun vadeli strateji",
      "Kür süreci planlama ve takip",
      "Peptit, anabolik ve biohacking desteği",
      "Supplement ve destek ürünleri planlaması",
      "7/24 WhatsApp desteği",
      "Düzenli form kontrolü",
      "Gidişata göre antrenman ve diyet güncellemeleri",
      "Kan tahlili inceleme ve genel değerlendirme",
      "Haftalık/periodik süreç değerlendirmesi",
      "Gerektiğinde hedefe göre yeniden planlama"
    ],
      oneCikan: true
    },
    {
    ad: "3 Aylık Beslenme & İdman Paketi",
    fiyat: "₺...",
    aciklama: "Kür, peptit veya ileri biohacking sürecine girmeden; düzenli antrenman, doğru beslenme ve istikrarlı takip ile fiziksel gelişim hedefleyenler için hazırlanmış pakettir. Hedefin, mevcut formun, günlük düzenin ve antrenman seviyen dikkate alınarak sana özel bir sistem oluşturulur.",
    icerik: [
      "Kişiye özel antrenman planı",
      "Kişiye özel beslenme/diyet planı",
      "Haftada 1 form kontrolü",
      "Haftalık süreç değerlendirmesi",
      "Gidişata göre plan güncellemeleri",
      "Kilo, form ve performans takibi",
      "Hedefe göre kalori ve makro ayarlamaları",
      "Supplement önerileri",
      "Daha düzenli, sürdürülebilir ve sonuç odaklı ilerleme sistemi"
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
