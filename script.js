// १. डार्क मोड फंक्शन
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    var btn = document.getElementById("dark-mode-btn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ लाईट मोड";
    } else {
        btn.innerHTML = "🌙 डार्क मोड";
    }
}

// २. कंटेंट बदलण्याचे फंक्शन (Multi-page सारखा अनुभव देण्यासाठी)
function showContent(topic) {
    var display = document.getElementById("content-display");
    
    if (topic === 'ai-meaning') {
        display.innerHTML = "<h3>AI म्हणजे काय?</h3><p>मानवी बुद्धिमत्तेची नक्कल करणाऱ्या संगणकीय प्रणालीला AI म्हणतात.</p>";
    } else if (topic === 'ai-tools') {
        display.innerHTML = "<h3>AI Tools 2026</h3><p>या वर्षात Gemini, ChatGPT-5 आणि नवीन व्हिडिओ जनरेशन टूल्स प्रसिद्ध आहेत.</p>";
    } else if (topic === 'ai-future') {
        display.innerHTML = "<h3>AI भविष्य</h3><p>भविष्यात AI आरोग्य, शिक्षण आणि अंतराळ संशोधनात मोठी क्रांती करेल.</p>";
    }
}
