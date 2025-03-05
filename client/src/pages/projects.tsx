import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ShapeDivider } from "@/components/ui/shape-divider";

const projects = [
  {
    title: "Messenger Expander",
    description: "Tiện ích mở rộng Chrome giúp tự động hóa tin nhắn Facebook, thể hiện kỹ năng lập trình và giải quyết vấn đề.",
    github: "https://github.com/minproducer/messenger-expander",
    link: "#"
  },
  {
    title: "StudentZone",
    description: "Mạng xã hội thử nghiệm, thể hiện khả năng xây dựng ứng dụng web phức tạp và quản lý cơ sở dữ liệu.",
    github: "https://github.com/minproducer/studentzone",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Dự Án
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:border-2 before:border-primary/0 before:rounded-lg hover:before:border-primary/50 before:transition-all overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="transition-colors group-hover:text-primary">{project.title}</span>
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub Repository</span>
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Live Demo</span>
                      </motion.a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ShapeDivider 
        variant="tilt" 
        className="transform-gpu"
        color="hsl(var(--background))"
      />
    </section>
  );
}