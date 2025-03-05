import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

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
    <section id="projects" className="min-h-screen flex items-center">
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}