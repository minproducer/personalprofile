import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ShapeDivider } from "@/components/ui/shape-divider";

// Tách dữ liệu dự án ra thành file riêng để dễ quản lý
const projects = [
  {
    title: "Messenger Expander",
    description: "Tiện ích mở rộng Chrome giúp tự động hóa tin nhắn Facebook, thể hiện kỹ năng lập trình và giải quyết vấn đề.",
    github: "https://github.com/minproducer/messenger-expander",
    link: "#",
    technologies: ["JavaScript", "Chrome API"]
  },
  {
    title: "StudentZone",
    description: "Mạng xã hội thử nghiệm, thể hiện khả năng xây dựng ứng dụng web phức tạp và quản lý cơ sở dữ liệu.",
    github: "https://github.com/minproducer/studentzone",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Game Tic Tac Toe",
    description: "Trò chơi Tic Tac Toe cổ điển, thể hiện kỹ năng lập trình JavaScript và thiết kế giao diện người dùng.",
    github: "https://github.com/minproducer/minproducer.github.io",
    link: "https://minproducer.github.io/laptrinhweb/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "3D Image",
    description: "Dự án hiển thị hình ảnh 3D với 12 phong cách khác nhau, thể hiện khả năng sáng tạo và sử dụng CSS 3D.",
    github: "https://github.com/minproducer/minproducer.github.io",
    link: "https://minproducer.github.io/12%20style%203D/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Personal Profile",
    description: "Trang hồ sơ cá nhân chuyên nghiệp, thể hiện kỹ năng phát triển web với ReactJS và tối ưu hóa SEO.",
    github: "https://github.com/minproducer/personalprofile",
    link: "https://minproducer.com/",
    technologies: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Cloud Space Landing Page",
    description: "Trang bán hàng cho dịch vụ cloud service, thể hiện kỹ năng thiết kế giao diện và phát triển landing page.",
    github: "https://github.com/minproducer/cloudspacelandingpage",
    link: "https://cloud.minproducer.com/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "CV Cá nhân",
    description: "Trang CV cá nhân, thể hiện kỹ năng và kinh nghiệm làm việc.",
    github: "https://github.com/minproducer/cv",
    link: "https://cv.minproducer.com/",
    technologies: ["React", "TailwindCSS", "Vite", "TypeScript"]
  }
];

// Tạo component con để hiển thị từng dự án
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Giảm delay để trang load nhanh hơn
    >
      <Card className="h-full group hover:scale-102 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden border-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="transition-colors group-hover:text-primary">{project.title}</span>
            <div className="flex space-x-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`GitHub Repository của ${project.title}`}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {project.link && project.link !== "#" && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Demo của ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-3">{project.description}</p>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl font-bold mb-12 text-center"
          >
            Dự Án <span className="text-primary">Nổi Bật</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
      <ShapeDivider
        variant="tilt"
        className="transform-gpu"
        color="hsl(var(--background))"
      />
    </section>
  );
}