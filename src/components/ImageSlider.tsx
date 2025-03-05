import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import imageData from "../assets/images/imageMain.json"; // JSON 데이터 불러오기

const ImageSlider: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px)").matches
  );
  const [imageList, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const folder = isMobile ? "height" : "width";
    const images = imageData[folder].map(
      (fileName) => `${process.env.PUBLIC_URL}/assets/images/${folder}/${fileName}`
    );
    setImageList(images);
  }, [isMobile]);

  // 🔹 Embla API 이벤트 핸들러 (슬라이드 변경 시)
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="slider-container" style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Embla Carousel 적용 */}
      <div className="embla" ref={emblaRef} style={{ width: "100%", height: "100%" }}>
        <div className="embla__container" style={{ display: "flex", height: "100%" }}>
          {imageList.map((src, index) => (
            <div className="embla__slide" key={index} style={{ flex: "0 0 100%", height: "100%" }}>
              <img
                src={src}
                alt={`Studio ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 (숫자 표시) */}
      <div className="pagination" style={{
        position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
        color: "white", fontSize: "1rem", fontWeight: "bold",
        background: "rgba(0,0,0,0.5)", padding: "5px 10px", borderRadius: "5px"
      }}>
        {imageList.length > 0 ? `${currentIndex + 1} / ${imageList.length}` : "0 / 0"}
      </div>
    </div>
  );
};

export default ImageSlider;
