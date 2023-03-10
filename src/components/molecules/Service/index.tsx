import Image, { StaticImageData } from 'next/image';

export const Service: React.FC<{
  image: string | StaticImageData;
  title?: string;
  description?: string;
}> = ({ image, title = '', description = '' }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-0 gap-y-8 md:gap-8">
      <div className="col-span-1">
        <Image src={image} alt={title} className="w-16 h-16 mx-auto" />
      </div>
      <div className="col-span-2">
        <div className="text-center sm:text-left">
          <div className="mb-4">
            <h3 className="font-bold text-md sm:text-lg">{title}</h3>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
