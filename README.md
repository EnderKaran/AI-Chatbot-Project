# React AI Chatbot Projesi

Bu proje, React, Vite ve Material UI kullanılarak geliştirilmiş, Google Gemini API'sine bağlanan, modern ve tamamen duyarlı bir AI chatbot arayüzüdür. Proje, hem modern frontend teknolojilerini etkili bir şekilde kullanmayı göstermek hem de React'in fonksiyonel bileşenleri, state yönetimi ve hook'ları gibi temel konseptlerini pratik bir uygulama üzerinde sergilemek amacıyla oluşturulmuştur.

## Ekran Görüntüsü
<img width="1900" height="860" alt="Ekran Görüntüsü" src="https://github.com/user-attachments/assets/a0c3ce8d-93a1-41be-aacb-c6b06d24503e" />

---
## Özellikler
- Modern ve Sezgisel Arayüz: ** Google'ın Material Design prensiplerine uygun, temiz ve kullanıcı dostu bir sohbet arayüzü.
- Tamamen Duyarlı (Fully Responsive): ** Mobil, tablet ve masaüstü cihazlarda kusursuz bir kullanıcı deneyimi sunar.
- Gerçek Zamanlı API Entegrasyonu: Google Gemini API'si ile anlık ve akıcı bir sohbet deneyimi.
- "Thinking..." Göstergesi: Botun cevap hazırladığı sırada kullanıcıya görsel geri bildirim sunarak bekleme süresini anlamlandırır.
- Öneri Çipleri (Suggestion Chips): Kullanıcılara sohbete başlamaları için "Yemek tarifi ver" gibi tıklanabilir öneriler sunar.
- Sohbet Yönetimi: Tek tıkla sohbet geçmişini temizleme özelliği.
- Tam Ekran Modu: Daha odaklanmış bir sohbet deneyimi için pencereyi tam ekran yapma seçeneği.
- Yumuşak Geçişler ve Animasyonlar: Sohbet penceresinin açılıp kapanması ve ikon değişimleri için akıcı animasyonlar.
- Otomatik Kaydırma: Yeni bir mesaj geldiğinde sohbet alanını otomatik olarak en alta kaydırır.

---

## 🚀 Kullanılan Teknolojiler

| Kategori      | Teknoloji                                                                                                                              | Açıklama                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Frontend**  | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                                    | Güçlü ve esnek kullanıcı arayüzleri oluşturmak için.                  |
|               | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                        | Işık hızında bir geliştirme ve derleme deneyimi için.                   |
| **Stil**      | ![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)                           | Kapsamlı ve özelleştirilebilir bileşenler ile profesyonel bir tasarım.  |
| **API**       | Google Gemini           | Akıllı ve doğal dil işleme yetenekleri için.                          |
| **İkonlar**   | ![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)                          | Popüler ikon setlerini tek bir pakette birleştirmek için.               |
| **Ortam**     | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)                              | Paket yönetimi ve proje script'leri için.                                |
---

## Kurulum ve Başlatma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/EnderKaran/AI-Chatbot-Project.git](https://github.com/EnderKaran/AI-Chatbot-Project.git)
    ```
2.  **Proje Dizinine Girin:**
    ```bash
    cd AI-Chatbot-Project
    ```

3.  **Gerekli Paketleri Yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Bu komuttan sonra, projeniz varsayılan olarak `http://localhost:5173/` adresinde çalışmaya başlayacaktır.

---

## 📂 Proje Yapısı

Proje, yeniden kullanılabilir ve yönetilebilir bileşenler oluşturma prensibiyle yapılandırılmıştır.

```
/
├── public/                     # Favicon gibi statik dosyalar
├── src/
│   ├── components/             # Tüm React bileşenleri
│   │   ├── ChatbotIcon.jsx
│   │   ├── ChatForm.jsx
│   │   ├── ChatMessage.jsx
│   │   └── SuggestionChips.jsx
│   ├── App.jsx                 # Ana uygulama bileşeni, tüm mantığı ve bileşenleri birleştirir
│   ├── index.css               # Global CSS ve mesaj baloncukları için özel stiller
│   └── main.jsx                # React uygulamasının başlangıç noktası
├── .env                        # API anahtarı gibi gizli bilgileri saklar (Git'e gönderilmez)
├── index.html                  # Ana HTML dosyası
├── package.json                # Proje bağımlılıkları ve script'ler
├── vite.config.js              # Vite yapılandırma dosyası
└── README.md                   # Bu dosya
```

---

## 👤 İletişim

**[Ender Karan]**

- **GitHub:** `(https://github.com/EnderKaran)`
- **LinkedIn:** `(https://www.linkedin.com/in/ender-karan-52303b187)`

Proje ile ilgili herhangi bir soru veya geri bildirim için bana ulaşmaktan çekinmeyin!

