// סקריפט להנפשת התפריט בגלילה
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// תפריט המבורגר למובייל
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    
    // טוגל תפריט בלחיצה על ההמבורגר
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // מונע גלילה כשהתפריט פתוח
    });
    
    // סגירת התפריט בלחיצה על קישור
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // התאמה לשינוי גודל מסך
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// אנימציות בגלילה
document.addEventListener('DOMContentLoaded', function() {
    // הוספת קלאסים לאנימציה
    const animatedElements = document.querySelectorAll('.tech-card, .benefit-card, .treatment-card, .testimonial-card, .section-title');
    
    // הוספת קלאסים של אנימציה לאלמנטים
    let delay = 1;
    animatedElements.forEach(element => {
        element.classList.add('animated');
        element.classList.add(`delay-${delay}`);
        delay = delay < 4 ? delay + 1 : 1;
    });
    
    // פונקציה לבדיקה אם אלמנט נראה במסך
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // אירוע גלילה לבדיקת אלמנטים נראים
    function checkVisibleElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // בדיקה ראשונית של אלמנטים נראים
    checkVisibleElements();
    
    // הוספת אירוע גלילה
    window.addEventListener('scroll', checkVisibleElements);
});

// טיפול בלחיצה על כרטיסי טכנולוגיה
document.addEventListener('DOMContentLoaded', function() {
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            // כאן אפשר להוסיף לוגיקה לפתיחת מידע נוסף על הטכנולוגיה
            const techName = this.querySelector('h3').textContent;
            console.log(`נלחץ: ${techName}`);
            
            // לדוגמה - פתיחת מודל או ניווט לעמוד מידע
            // openTechModal(techName);
        });
    });
    
    // טיפול בלחיצה על כפתורי הטכנולוגיה
    const techButtons = document.querySelectorAll('.tech-button');
    const showcaseImage = document.getElementById('tech-showcase-image');
    
    techButtons.forEach(button => {
        button.addEventListener('click', function() {
            const techType = this.getAttribute('data-tech');
            console.log(`נלחץ: ${techType}`);
            
            // הסרת הקלאס active מכל הכפתורים
            techButtons.forEach(item => {
                item.classList.remove('active');
            });
            
            // הוספת קלאס active לכפתור שנלחץ
            this.classList.add('active');
            
            // שינוי התמונה בהתאם לטכנולוגיה שנבחרה
            if (showcaseImage) {
                // מיפוי נתיבי התמונות
                const imagePaths = {
                    'diode-laser': 'https://raw.githubusercontent.com/VIPOCONNECT/11/refs/heads/main/Images/4.Webp',
                    'ipl': 'https://raw.githubusercontent.com/VIPOCONNECT/11/refs/heads/main/Images/2.Webp',
                    'ndyag': 'https://raw.githubusercontent.com/VIPOCONNECT/11/refs/heads/main/Images/3.Webp',
                    'rf': 'https://raw.githubusercontent.com/VIPOCONNECT/11/refs/heads/main/Images/1.Webp'
                };
                
                // הוספת אפקט התפעמות לתמונה
                showcaseImage.style.opacity = '0';
                showcaseImage.style.transform = 'scale(0.95)';
                
                // שינוי התמונה לאחר השהייה קצרה
                setTimeout(() => {
                    showcaseImage.src = imagePaths[techType];
                    showcaseImage.alt = `טכנולוגיית ${techType}`;
                    
                    // החזרת התמונה לנראות
                    setTimeout(() => {
                        showcaseImage.style.opacity = '1';
                        showcaseImage.style.transform = 'scale(1)';
                    }, 50);
                }, 300);
            }
        });
    });
    
    // הגדרת הטכנולוגיה הראשונה כפעילה בטעינת הדף
    if (techButtons.length > 0 && showcaseImage) {
        techButtons[0].classList.add('active');
    }
});

// פונקציה להחלפת תמונה בלחיצה על טכנולוגיה
// הפונקציונליות כבר מוטמעת בתוך אירוע הלחיצה על כפתורי הטכנולוגיה

// טיפול בטופס יצירת קשר
document.addEventListener('DOMContentLoaded', function() {
    // טיפול בטופס יצירת קשר
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // כאן תהיה לוגיקה לשליחת הטופס
            console.log('הטופס נשלח');
            
            // איפוס הטופס
            contactForm.reset();
            
            // הצגת הודעת אישור
            alert('תודה! פנייתך התקבלה ונחזור אליך בהקדם.');
        });
    }
});
