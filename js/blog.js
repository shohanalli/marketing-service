    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.blog-swiper', {
                  loop: true,
        speed: 900,
                  autoplay: {
          delay: 2200,
          disableOnInteraction: false,
        },
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-next-btn',
                prevEl: '.swiper-prev-btn',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    });