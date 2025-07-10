import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import YouTube from "react-youtube";

export default function VideoGalleryShow({ Blogs }) {
  const swiperRef = useRef(null);

  const onYouTubePlay = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const onYouTubePause = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {Blogs.map((blog, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-xl shadow-md p-4 h-full">
            {blog.isEmbed ? (
              <YouTube
                videoId={blog.embedUrl.split("/embed/")[1]}
                className="w-full mb-4"
                iframeClassName="rounded-xl w-full h-48 lg:h-56"
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
                onPlay={onYouTubePlay}
                onPause={onYouTubePause}
              />
            ) : (
              <video
                className="rounded-xl w-full h-48 lg:h-56 object-cover mb-4"
                controls
                muted
                src={blog.img}
                onPlay={onYouTubePlay}
                onPause={onYouTubePause}
              />
            )}
            <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-700">{blog.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
