import { useState } from "react";
interface ImageWithFallbackProps {
    src: string;
    alt: string;
    [key: string]: string;
}

const ImageWithFallback = ({ src, alt, ...props }: ImageWithFallbackProps) => {
    const [error, setError] = useState(false);
  
    return (
      <img
        src={error ? "https://images.unsplash.com/photo-1511795409834-ef04bbd61622" : src}
        alt={alt}
        onError={() => setError(true)}
        {...props}
      />
    );
  };

  export default ImageWithFallback;