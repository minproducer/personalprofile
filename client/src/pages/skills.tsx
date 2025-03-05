import { motion } from "framer-motion";
import { Code, Camera, Car, Pencil, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShapeDivider } from "@/components/ui/shape-divider";

const skills = [
  {
    title: "Phát triển Web",
    icon: Code,
    description: "Tôi xây dựng các ứng dụng web hiện đại và tối ưu hóa SEO bằng JavaScript, TypeScript, ReactJS, Vue.js, Node.js."
  },
  {
    title: "Thiết kế",
    icon: Pencil,
    description: "Tôi tạo ra giao diện người dùng và trải nghiệm người dùng tối ưu, cùng với kỹ năng thiết kế đồ họa, chỉnh sửa ảnh và video chuyên nghiệp."
  },
  {
    title: "Nhiếp Ảnh",
    icon: Camera,
    description: "Tôi ghi lại những khoảnh khắc đẹp qua các dự án chụp ảnh đa dạng: chân dung, phong cảnh, sự kiện."
  },
  {
    title: "Lái Xe",
    icon: Car,
    description: "Với bằng lái B2 và A1, tôi có kinh nghiệm lái xe đưa đón tận nơi qua hàng ngàn cuốc xe, thông thạo nhiều cung đường."
  },
  {
    title: "Quản Lý Dữ Liệu",
    icon: Database,
    description: "Quản lý cơ sở dữ liệu (MySQL, MongoDB, Firebase), sử dụng thành thạo Git, npm, Heroku CLI."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Lĩnh Vực Chuyên Môn
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:border-2 before:border-primary/0 before:rounded-lg hover:before:border-primary/50 before:transition-all overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <skill.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <span className="transition-colors group-hover:text-primary">{skill.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ShapeDivider 
        variant="curve" 
        className="transform-gpu"
        color="hsl(var(--background))"
      />
    </section>
  );
}