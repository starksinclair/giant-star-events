const GalleryPage = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      alt: "Wedding celebration",
      caption: "Elegant Wedding Reception"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Nigerian_Jollof_rice_%40Tyap_Wiki_Zaria_Outreach.jpg",
      alt: "Nigerian Jollof Rice",
      caption: "Traditional Jollof Rice"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      alt: "Corporate Event",
      caption: "Business Conference"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Tope_Ayodeji_Asokere_Asokeretope8_%28The_Northern_SUYA_Spot_Collection%29.jpg",
      alt: "Nigerian Suya",
      caption: "Spicy Suya"
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      alt: "Party Event",
      caption: "Birthday Celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
      alt: "Nigerian Pounded Yam",
      caption: "Pounded Yam & Vegetable Soup"
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
      alt: "Makeup Session",
      caption: "Professional Makeup Services"
    },
    {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
      alt: "Photography",
      caption: "Professional Photography Services"
    },
    {
      src: "https://cdn-gnflf.nitrocdn.com/oLzuXrOSBZcEOcWEWWyWBqotmYtrWuwi/assets/images/optimized/rev-d95eb3f/www.deepsentinel.com/wp-content/uploads/2024/02/What-On-Site-Security-Guards-Can-and-Cant-Do.jpg",
      alt: "Event Security",
      caption: "Professional Security Services"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552",
      alt: "Wedding Decoration",
      caption: "Elegant Wedding Decorations"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      alt: "Event Setup",
      caption: "Creative Event Setups"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      alt: "Wedding Floral",
      caption: "Luxury Floral Arrangements"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mb-[6rem]">
      <h1 className="text-5xl font-bold text-center mb-8 mt-[8rem]">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              <p className="text-sm font-medium">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;