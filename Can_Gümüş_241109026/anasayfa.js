<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İletişim</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>İletişim</h1>
        <nav>
            <ul>
                <li><a href="index.html">Ana Sayfa</a></li>
                <li><a href="about.html">Hakkında</a></li>
                <li><a href="services.html">Hizmetler</a></li>
                <li><a href="portfolio.html">Portföy</a></li>
                <li><a href="contact.html">İletişim</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Bizimle İletişime Geçin</h2>
        <form id="contactForm">
            <label for="name">Adınız:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Mesajınız:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Gönder</button>
        </form>
    </main>
    <footer>
        <p>&copy; 2025 Şehir Rehberi</p>
    </footer>
</body>
</html>
