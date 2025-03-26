import { motion } from "framer-motion";
import { SiGithub, SiFacebook, SiTiktok, SiYoutube } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ShapeDivider } from "@/components/ui/shape-divider";
import { ParallaxLayer } from "@/components/ui/parallax-layer";

const socialLinks = [
  { href: "https://github.com/minproducer", icon: SiGithub, label: "GitHub" },
  { href: "https://facebook.com/minproducer.fb", icon: SiFacebook, label: "Facebook" },
  { href: "https://tiktok.com/@minproducer_tiktok", icon: SiTiktok, label: "TikTok" },
  { href: "https://youtube.com/@minproducer_yt", icon: SiYoutube, label: "YouTube" },
];

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('assets/bg-pattern.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />

      <ParallaxLayer speed={0.2} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background"
          style={{ mixBlendMode: "overlay" }}
        />
      </ParallaxLayer>

      <div className="container mx-auto px-4 py-16 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Chào mừng đến với thế giới của MinProducer!
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Min đây, từ Đà Nẵng. Trang web này là "hộp đen" ghi lại cuộc đời "đa zi năng" của tôi: code, design, ảnh, và cả những chuyến đi bất đắc dĩ. Nói chung, đây là nơi tôi cố gắng biến mớ hỗn độn thành một câu chuyện có chút ý nghĩa. Hy vọng bạn tìm thấy điều gì đó thú vị (hoặc ít nhất là buồn cười 😂😂😂)!
            </motion.p>

            <motion.div 
              className="flex flex-col space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                <a 
                  href="mailto:minhhai113he@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  minhhai113he@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
                <a 
                  href="tel:+84773448750" 
                  className="hover:text-primary transition-colors"
                >
                  (+84) 773448750
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <ParallaxLayer speed={0.1} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-square rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-pulse" />
            </motion.div>
          </ParallaxLayer>
        </div>
      </div>

      <ShapeDivider 
        variant="wave" 
        className="transform-gpu"
        color="hsl(var(--background))"
      />
    </section>
  );
}