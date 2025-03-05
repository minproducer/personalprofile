import { motion } from "framer-motion";
import { SiGithub, SiFacebook, SiTiktok, SiYoutube } from "react-icons/si";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/minproducer", icon: SiGithub, label: "GitHub" },
  { href: "https://facebook.com/minproducer.fb", icon: SiFacebook, label: "Facebook" },
  { href: "https://tiktok.com/@minproducer_tiktok", icon: SiTiktok, label: "TikTok" },
  { href: "https://youtube.com/@minproducer_yt", icon: SiYoutube, label: "YouTube" },
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Chào mừng đến với thế giới của MinProducer!
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Tôi là Ngô Tấn Minh Giang, hay Min, một nhà phát triển, thiết kế, nhiếp ảnh gia và tài xế đa năng. 
              Sinh ra và lớn lên tại Đà Nẵng, tôi luôn tìm kiếm những cách thức sáng tạo để kết hợp các đam mê của mình.
            </p>
            
            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:minhhai113he@gmail.com" className="hover:text-primary">
                  minhhai113he@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+84773448750" className="hover:text-primary">
                  (+84) 773448750
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square rounded-full bg-muted/30 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Profile image would go here - using a placeholder gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
