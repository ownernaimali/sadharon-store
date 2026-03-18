function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function checkAdminAuth() {
    const token = getCookie("adminToken");
    const localToken = localStorage.getItem("adminToken");

    // যদি কুকি বা লোকাল স্টোরেজ—যেকোনো একটিতে টোকেন মিসিং থাকে
    if (!token || !localToken) {
        // সব ডেটা রিমুভ করে দেওয়া হচ্ছে (Security Clean-up)
        localStorage.removeItem("adminToken");
        // কুকি ডিলিট করার জন্য এক্সপায়ারি ডেট পাস্টে সেট করতে হয়
        document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // লগইন পেজে পাঠিয়ে দেওয়া
        window.location.href = "login.html";
        return; 
    }
}

// পেজ লোড হওয়ার সময় কল করুন
checkAdminAuth();
