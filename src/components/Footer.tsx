import Image from "next/image";


export default function Footer() {
  return (
    <div>
      <Image src="/map.png" alt="map" width={1920} height={1080} />
      <Image src="/logo.png" alt="logo" width={240} height={240}  />  
    </div>
  );
}