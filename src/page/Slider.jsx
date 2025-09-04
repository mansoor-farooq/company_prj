import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Image Slider Section
const ImageSlider = () => {
    const images = [
        "https://picsum.photos/id/1015/1200/600",
        "https://picsum.photos/id/1016/1200/600",
        "https://picsum.photos/id/1018/1200/600",
    ];

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8">Our Highlights</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="max-w-5xl mx-auto rounded-2xl shadow-lg overflow-hidden"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img} alt={`slide-${i}`} className="w-full h-[400px] object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

// Card Slider Section
const CardSlider = () => {
    const cards = [
        { title: "Project Alpha", desc: "Modern web development", img: "https://picsum.photos/id/1011/400/250" },
        { title: "Project Beta", desc: "UI/UX Design Concepts", img: "https://picsum.photos/id/1012/400/250" },
        { title: "Project Gamma", desc: "Mobile App Solutions", img: "https://picsum.photos/id/1013/400/250" },
        { title: "Project Delta", desc: "Back-end Architecture", img: "https://picsum.photos/id/1014/400/250" },
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                className="max-w-6xl mx-auto"
            >
                {cards.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export { ImageSlider, CardSlider };
