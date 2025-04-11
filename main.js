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

// פונקציונליות גלריית התמונות
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.querySelector('.modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const images = [];
    
    // איתחול מערך התמונות
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        images.push({
            src: img.src,
            alt: img.alt
        });
        
        // פתיחת המודאל בלחיצה על תמונה
        item.addEventListener('click', function() {
            currentIndex = index;
            openModal(currentIndex);
        });
    });
    
    // פתיחת המודאל עם התמונה הנוכחית
    function openModal(index) {
        modalImg.src = images[index].src;
        captionText.innerHTML = images[index].alt;
        modal.style.display = 'block';
        
        // מניעת גלילה כשהמודאל פתוח
        document.body.style.overflow = 'hidden';
    }
    
    // סגירת המודאל
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // סגירת המודאל בלחיצה מחוץ לתמונה
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // מעבר לתמונה הבאה
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        openModal(currentIndex);
    });
    
    // מעבר לתמונה הקודמת
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(currentIndex);
    });
    
    // מעבר בין תמונות באמצעות מקשים
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowRight') {
                // בגלל RTL, הכיוונים הפוכים
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                openModal(currentIndex);
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex + 1) % images.length;
                openModal(currentIndex);
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// פונקציונליות התצוגה התלת-ממדית
document.addEventListener('DOMContentLoaded', function() {
    const device3D = document.querySelector('.device-3d');
    const hotspots = document.querySelectorAll('.hotspot');
    const techModal = document.getElementById('tech-info-modal');
    const techModalTitle = document.getElementById('tech-modal-title');
    const techModalContent = document.getElementById('tech-modal-content');
    const techModalLink = document.getElementById('tech-modal-link');
    const closeTechModal = document.querySelector('.close-tech-modal');
    
    // מידע על הטכנולוגיות
    const techInfo = {
        'diode-laser': {
            title: 'Diode Laser - לייזר דיודה',
            content: 'לייזר דיודה משתמש באורכי גל 755nm + 808nm + 940nm + 1064nm לטיפולי הסרת שיער מתקדמים לגברים ולנשים, לכל גווני העור.',
            link: 'hair-removal.html'
        },
        'ipl': {
            title: 'IPL - אור פולסים אינטנסיבי',
            content: 'טכנולוגיית IPL כוללת מסננים מתחלפים לפי סוג הטיפול ומיועדת לטיפולים מגוונים לבעיות עור, פיגמנטציה, אקנה ונימים.',
            link: 'acne-treatment.html'
        },
        'ndyag': {
            title: 'Nd:YAG - לייזר 1064nm',
            content: 'לייזר Nd:YAG מיועד לטיפולים עמוקים לבעיות עור מורכבות, כלי דם וצלקות. הוא מצטיין בחדירה עמוקה לשכבות העור הפנימיות.',
            link: 'skin-renewal.html'
        },
        'rf': {
            title: 'RF - גלי רדיו',
            content: 'טכנולוגיית RF מיועדת למיצוק העור, אנטי אייג\'ינג, שיפור מרקם ומראה העור. הטיפול נעים וללא כאב, ואין זמן החלמה.',
            link: 'anti-aging.html'
        }
    };
    
    // משתנים לסיבוב המכשיר
    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;
    let isDragging = false;
    let startX, startY, startRotateX, startRotateY;
    
    // פונקציה לעדכון הסיבוב
    function updateRotation() {
        device3D.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    }
    
    // אירועי גרירה לסיבוב המכשיר
    device3D.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startRotateX = rotateX;
        startRotateY = rotateY;
        device3D.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            // הפוך בגלל RTL
            rotateY = startRotateY - deltaX * 0.5;
            rotateX = startRotateX + deltaY * 0.5;
            
            updateRotation();
        }
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        device3D.style.cursor = 'grab';
    });
    
    // תמיכה במגע למכשירים ניידים
    device3D.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startRotateX = rotateX;
            startRotateY = rotateY;
            e.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('touchmove', function(e) {
        if (isDragging && e.touches.length === 1) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            
            // הפוך בגלל RTL
            rotateY = startRotateY - deltaX * 0.5;
            rotateX = startRotateX + deltaY * 0.5;
            
            updateRotation();
            e.preventDefault();
        }
    }, { passive: false });
    
    document.addEventListener('touchend', function() {
        isDragging = false;
    });
    
    // אירועי לחיצה על נקודות חמות
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function(e) {
            e.stopPropagation(); // מניעת התפשטות האירוע לאלמנט ההורה
            
            const techType = this.getAttribute('data-tech');
            const tech = techInfo[techType];
            
            if (tech) {
                techModalTitle.textContent = tech.title;
                techModalContent.textContent = tech.content;
                techModalLink.href = tech.link;
                techModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // סגירת המודאל
    closeTechModal.addEventListener('click', function() {
        techModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // סגירת המודאל בלחיצה מחוץ לתוכן
    techModal.addEventListener('click', function(e) {
        if (e.target === techModal) {
            techModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // סיבוב אוטומטי בעת טעינת הדף
    let autoRotate = true;
    let autoRotateInterval;
    
    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            if (autoRotate) {
                // סיבוב בכל הכיוונים
                rotateX += 0.2;
                rotateY += 0.5;
                rotateZ += 0.1;
                
                // הגבלת הסיבוב בציר X למניעת סיבוב מוגזם
                if (rotateX > 25) rotateX = -25;
                
                updateRotation();
            }
        }, 50);
    }
    
    // הפסקת הסיבוב האוטומטי באינטראקציה עם המשתמש
    device3D.addEventListener('mousedown', function() {
        autoRotate = false;
    });
    
    device3D.addEventListener('touchstart', function() {
        autoRotate = false;
    });
    
    document.querySelectorAll('.model-controls button').forEach(button => {
        button.addEventListener('click', function() {
            autoRotate = false;
        });
    });
    
    // התחלת הסיבוב האוטומטי
    startAutoRotate();
});

// פונקציונליות גלריית הקרוסלה
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    const slidesContainer = document.querySelector('.carousel-slides');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    
    // פונקציה למעבר לשקופית הבאה
    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        
        // הפוך בגלל RTL
        slidesContainer.style.transform = `translateX(${index * 100}%)`;
        
        // עדכון האינדיקטורים
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        currentIndex = index;
    }
    
    // אירועי לחצנים
    prevButton.addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        goToSlide(currentIndex + 1); // הפוך בגלל RTL
        startAutoSlide();
    });
    
    nextButton.addEventListener('click', function() {
        clearInterval(autoSlideInterval);
        goToSlide(currentIndex - 1); // הפוך בגלל RTL
        startAutoSlide();
    });
    
    // אירועי אינדיקטורים
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            clearInterval(autoSlideInterval);
            goToSlide(index);
            startAutoSlide();
        });
    });
    
    // אירועי מגע למכשירים ניידים
    slidesContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoSlideInterval);
    }, { passive: true });
    
    slidesContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        // הפוך בגלל RTL
        if (touchEndX < touchStartX - 50) {
            // החלקה שמאלה - התמונה הקודמת
            goToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + 50) {
            // החלקה ימינה - התמונה הבאה
            goToSlide(currentIndex - 1);
        }
    }
    
    // החלקה אוטומטית
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1); // הפוך בגלל RTL
        }, 5000);
    }
    
    // הפסקת ההחלקה האוטומטית כאשר העכבר מעל הקרוסלה
    const carouselContainer = document.querySelector('.carousel-container');
    
    carouselContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlideInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', function() {
        startAutoSlide();
    });
    
    // התחלת הקרוסלה
    goToSlide(0);
    startAutoSlide();
    
    // אירועי מקלדת
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            clearInterval(autoSlideInterval);
            goToSlide(currentIndex + 1); // הפוך בגלל RTL
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            clearInterval(autoSlideInterval);
            goToSlide(currentIndex - 1); // הפוך בגלל RTL
            startAutoSlide();
        }
    });
    
    // התאמת המודאל לתצוגת תמונות מוגדלות
    const carouselImages = document.querySelectorAll('.carousel-image');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    const prevModalBtn = document.querySelector('.modal .prev');
    const nextModalBtn = document.querySelector('.modal .next');
    let modalCurrentIndex = 0;
    
    carouselImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            modalCurrentIndex = index;
            modal.style.display = 'block';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    prevModalBtn.addEventListener('click', function() {
        modalCurrentIndex = (modalCurrentIndex - 1 + carouselImages.length) % carouselImages.length;
        modalImg.src = carouselImages[modalCurrentIndex].src;
    });
    
    nextModalBtn.addEventListener('click', function() {
        modalCurrentIndex = (modalCurrentIndex + 1) % carouselImages.length;
        modalImg.src = carouselImages[modalCurrentIndex].src;
    });
    
    // סגירת המודאל בלחיצה מחוץ לתמונה
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
