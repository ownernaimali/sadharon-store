
     const analyticsData = {
            weekly: [
                { day: 'Sat', val: 40 },
                { day: 'Sun', val: 65 },
                { day: 'Mon', val: 85 },
                { day: 'Tue', val: 50 },
                { day: 'Wed', val: 75 },
                { day: 'Thu', val: 45 },
                { day: 'Fri', val: 30 }
            ],
            target: 78
        };

        function startDashboard() {
            // ১. বার চার্ট সেটআপ
            const chart = document.getElementById('bar-chart');
            const todayName = new Date().toLocaleDateString('en-US', { weekday: 'short' });

            analyticsData.weekly.forEach((item, i) => {
                const group = document.createElement('div');
                group.className = 'bar-group';
                const isActive = item.day === todayName ? 'active' : '';

                group.innerHTML = `
                    <div class="bar ${isActive}" id="bar-${i}"></div>
                    <span>${item.day}</span>
                `;
                chart.appendChild(group);

                // অ্যানিমেশন (নিচ থেকে উপরে উঠবে)
                setTimeout(() => {
                    const b = document.getElementById(`bar-${i}`);
                    if(b) b.style.height = item.val + '%';
                }, 150 * i);
            });

            // ২. সার্কুলার প্রগ্রেস সেটআপ
            let p = 0;
            const circle = document.getElementById('circle-box');
            const text = document.getElementById('percent-text');
            
            const timer = setInterval(() => {
                if(p >= analyticsData.target) {
                    clearInterval(timer);
                } else {
                    p++;
                    text.innerText = p + '%';
                    const deg = (p / 100) * 360;
                    circle.style.background = `conic-gradient(var(--accent) ${deg}deg, rgba(255,255,255,0.1) 0deg)`;
                }
            }, 25);

            document.getElementById('target-note').innerText = `${analyticsData.target}% of monthly goal completed.`;
        }

        document.addEventListener('DOMContentLoaded', () => {
            startDashboard();
            lucide.createIcons();
        });
    
