import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-full">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        alt={name}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-400" />
    </div>
  );
}

export default Contact;
