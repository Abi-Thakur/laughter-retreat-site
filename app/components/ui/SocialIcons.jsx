import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const icons = [
  { icon: FaInstagram, link: "#" },
  { icon: FaFacebookF, link: "#" },
  { icon: FaYoutube, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      {icons.map((item, i) => {
        const Icon = item.icon;

        return (
          <a
            key={i}
            href={item.link}
            className="
              w-8 h-8 
              flex items-center justify-center 
              rounded-md 
              border border-white/10 
              bg-white/5 backdrop-blur-md
              text-white/80 
              hover:text-white 
              hover:bg-white/10 
              transition-all duration-300
            "
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
}