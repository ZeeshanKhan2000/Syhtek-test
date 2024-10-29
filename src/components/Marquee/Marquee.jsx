import Marquee from "react-fast-marquee";
import image1 from "../../assets/Marquee-1.png";
import image2 from "../../assets/Marquee-2.png";
import image3 from "../../assets/Marquee-3.png";

const ImageMarquee = () => {
  const images = [image1, image2, image3];

  const repeatedImages = Array.from(
    { length: 20 },
    (_, index) => images[index % images.length]
  );

  return (
    <div className="marquee-container pt-8 pb-12">
      <Marquee speed={50} gradient={false} className="marquee-content">
        {repeatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`marquee-img-${index}`}
            className="marquee-image w-10 mr-10" 
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
