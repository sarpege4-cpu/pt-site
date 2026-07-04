# Sitenizi Nasıl Düzenlersiniz? (Kod bilgisi gerekmez)

Sitenizdeki **tüm yazılar tek bir dosyada**: `icerik.js`
Adınız, paketler, fiyatlar, yorumlar, iletişim bilgileri... hepsi orada.

## Yazıları değiştirmek (telefon veya bilgisayardan)

1. GitHub'da siteye gidin: **github.com/sarpege4-cpu/pt-site**
2. `icerik.js` dosyasına tıklayın.
3. Sağ üstteki **kalem (✏️) simgesine** tıklayın.
4. Değiştirmek istediğiniz yazıyı bulun — sadece **tırnak içindeki (`"..."`) yazıyı** değiştirin.
   - Tırnak işaretlerini, virgülleri ve parantezleri **silmeyin**.
5. Sağ üstteki yeşil **"Commit changes"** butonuna basın, açılan pencerede tekrar **"Commit changes"** deyin.
6. 1-2 dakika içinde siteniz otomatik güncellenir. (Tarayıcıda sayfayı yenileyin.)

## Paket eklemek / silmek

`icerik.js` içinde `paketler:` bölümünü bulun. Her paket şöyle bir bloktur:

```
{
  ad: "8 Seans Bire Bir PT",
  fiyat: "₺X.XXX",
  aciklama: "Başlangıç için ideal",
  icerik: [
    "Haftada 2 gün bire bir antrenman",
    "WhatsApp desteği"
  ],
  oneCikan: false
},
```

- **Yeni paket:** bir bloğu `{` ile `},` arasında kopyalayıp altına yapıştırın, yazıları değiştirin.
- **Paket silmek:** bloğu `{` ile `},` dahil silin.
- **"En Popüler" etiketi:** öne çıkarmak istediğiniz pakette `oneCikan: true` yapın.

Aynı yöntem `yorumlar:` (danışan yorumları) ve `sss:` (sık sorulan sorular) için de geçerli.

## Fotoğraf eklemek

1. GitHub'da `img` klasörüne girin.
2. **Add file → Upload files** deyip fotoğrafınızı yükleyin (örn. `ben.jpg`), **Commit changes** deyin.
3. `icerik.js` içinde ilgili satıra dosya adını yazın:
   - `heroFoto: "img/ben.jpg"` (ana sayfadaki büyük fotoğraf)
   - `hakkimdaFoto: "img/salon.jpg"` (hakkımda bölümü fotoğrafı)

## Renkleri değiştirmek

`style.css` dosyasının **en üstündeki** `--vurgu` satırındaki renk kodunu değiştirin
(örn. turuncu yerine kırmızı için `#e63946`). Renk kodu bulmak için Google'da
"color picker" yazmanız yeterli.

## Sık yapılan hata

Değişiklikten sonra site bomboş görünüyorsa, büyük ihtimalle `icerik.js` içinde
bir tırnak veya virgül silinmiştir. GitHub'da dosyanın **History** kısmından
önceki hâline bakıp eksik işareti geri koyun — ya da bana (Claude'a) sorun. :)
