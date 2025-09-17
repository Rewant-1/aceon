import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center items-center py-16">
      <Image src="/logo.png" alt="logo" width={240} height={240} className="object-contain" />
    </div>
  );
}