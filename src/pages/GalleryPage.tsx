import { OtherImages } from "../data/Data";

const imageFiles = import.meta.glob('/src/assets/images/gallery/*.jpg', { eager: true });
const localImages = Object.keys(imageFiles).map((path, i) => {
  return {
    src: path,
    alt: `Gallery Image ${i + 1}`,
    caption: `Gallery Photo ${i + 1}`
  };
});

const GalleryPage = () => {
  const images = [...localImages, ...OtherImages];

  return (
    <div className="container mx-auto px-4 py-8 mb-[6rem]">
      <h1 className="text-5xl font-bold text-center mb-8 mt-[8rem]">Our Gallery</h1>
      
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-700 mb-4">
          Explore our collection of memorable moments and beautiful captures. Each photo tells a unique story of our journey and experiences.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image?.src}
              alt={image?.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              <p className="text-sm font-medium">{image?.caption}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
