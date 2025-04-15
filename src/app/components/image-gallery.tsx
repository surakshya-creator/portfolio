import Image from "next/image"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  return (
    <div className={`image-gallery ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  )
}
