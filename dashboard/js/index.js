function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function checkAdminAuth() {
    const token = getCookie("adminToken");

    if (!token) {
        window.location.href = "login.html";
        return; // এখানে এটি নিচের কোডকে ব্লক করে দেবে
    }
}

// পেজ লোড হওয়ার সময় কল করুন
checkAdminAuth();
