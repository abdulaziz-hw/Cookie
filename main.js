document.addEventListener('DOMContentLoaded', () => {
  // نافذة الترحيب تظهر مرة واحدة فقط
  const popup = document.querySelector('.welcome-popup');
  const closeBtn = document.querySelector('#closePopup');
  
  if (!localStorage.getItem('popupClosed')) {
    popup.style.display = 'flex';
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      localStorage.setItem('popupClosed', 'true');
    });
  }
  
  // تقييم النجوم
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        s.style.color = i <= index ? '#FFD700' : '#ccc';
      });
    });
  });
  
  // منع إعادة تحميل الصفحة عند إرسال النماذج
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('تم إرسال الطلب بنجاح!');
      form.reset();
    });
  });
  
  // تمرير ناعم للروابط داخل الصفحة
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});