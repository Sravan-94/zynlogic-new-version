import React from "react";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const ServiceCard = ({ title, imageSrc, className }: ServiceCardProps) => (
  <div className={cn("flex flex-col", className)}>
    <div className="mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
      <AspectRatio ratio={3/2} className="overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </AspectRatio>
    </div>
    <div className="flex items-center gap-2 pl-1">
      <span className="text-foreground text-lg font-medium">{title}</span>
      <ArrowRight size={16} className="text-foreground ml-1" />
    </div>
  </div>
);

const services = [
  {
    title: "Moblie Applications",
    imageSrc: "https://media-hosting.imagekit.io/efe18780e47d42b7/WhatsApp%20Image%202025-05-06%20at%2015.43.42_e9be0cca.jpg?Expires=1841134543&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MoNOXzhpF8NqbPMder8YJzOJQI8Z4BcKQJjDIGzcnBJDL1xP5djwEtU0bU8rZU5~bqxING8yLZHFDShrOHH0~~OQ8S0NsOaHMQ2OFIekhY4NTlKG7RDiDcy4x5Cq9UWYp7UUa8NhWRZDrW8Ail4Hf4ubQSjqymFSjkkNcLONWQx20uFrpM4GXp0mca~vYzSydq-xNBJkxZFPKmuXsA3XBqJUqlEJ-a9qTakZMCONRWdhF1EzMwn4rLKWvcLwUFpQ3VARSEsHNxkcvyF0n0rpbjyTQuHQRxeHdBI4UuP2-NEBoF4bI7PlPcPd6tzDwOHno4uqbh-pcvo87ofmTahf9Q__",
  },
  {
    title: "Web Design & Development",
    imageSrc: "https://media-hosting.imagekit.io/36a93399fd8c4f26/WhatsApp%20Image%202025-05-06%20at%2017.49.34_52be5dd4.jpg?Expires=1841142119&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z0Gxqt44B6czNyPIOIps5s3BY~I3C9DQHPK0ApMMxmn9WGxWRGYxe1JxjeODSMKSBLdI1aiive3JEXv493do4MWINiRcFQ8imqJ8X5-E7AZvSBn-ukFSS6GnabCk-u4X02qvlmZADbF7nkp5-cgYbA6l8ZA2GQIBWmIT7rtI9I5lzvukT3qCnGzF3QPA~EpnEyUOQpGkLcz2CjrlxBMXAo9I~ySDyVOgbJR8IhBnUFZHi7j5sSORTCADECgzjiWl-b3Nj8kwcmiJ8FsGjww6ywxO-P3rZ1DHXXdr~undRJT3CEvEkKBUZPaHrJVNGDx1SnrlizcGBb2YjGlhlveYMQ__",
  },
  {
    title: "Brand Identity ",
    imageSrc: "https://media-hosting.imagekit.io/be6c723e771244d7/WhatsApp%20Image%202025-05-06%20at%2015.46.27_17b1bd89.jpg?Expires=1841134760&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Wm8iNrf0qJy~RASAmRRwqWZLl6gjh-Ef0qvjPz-V3j9NzkmAz0DCseapw47ktm5Iwpp8jgWl1K9uST0F~r7YsNN1W-yYjMn7lm93HD4IiYQ3so~pKMQZiY6r5TWg9dd7TkIpGv0dh-vU9mL4gJv9kM1Qw06E440ALZrIWVUpQvNS2m84bZ~XIEOBc0zzThcX7DBDvF7c~Ht6Ek48wX3nMfO~8YXaSlkueYSgu-jTy~xpOk6xg9zqqfEt26enlelzOOSxe00ZWdUerln7tDQlbvnT5WVjEF49j6Uea~KD-fMwrjJ6YcHHNW6Xxhhlc8jd3-~SFSiTmYEisPlpkBRUjA__",
  },
  {
    title: "AI Integrations",
    imageSrc: "https://media-hosting.imagekit.io/a71ac695bb9d4f59/WhatsApp%20Image%202025-05-07%20at%2018.31.57_7ab3969a.jpg?Expires=1841230993&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uMoYTlB27rPeL8yH7yGaMDMs5uLO2w~x0fAU4U1NLxd36uCRp5sl2tJ53XMec7rqBMwz0xS336hIgnwecTovIWeZ0ygxBsB9l6UiQfWEQOKIWisKFfn9gc9oPqIEK2wF~EUAnPJyDZvMzC0A8YvItTqrV9ZRNbCztzXPEgZ13rfTHKW4F1vgaUlgPkzSQPOYUfyEZNiX9p98unhlzWBfhtY5kUMhekccxq0uTVlffS9zEih3HHbU~~VKes-aCLO-IhWuXTvHcTjUYa7cyZheLgciGcIRNW5du0jaRKt4QKq-hvlTywDAul~X18ospDoCyY-DFCKjbwLJ1uM5A9TaaA__",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link to="/services" key={index}>
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
