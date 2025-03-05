import { motion } from "framer-motion";
import { Code, Camera, Car, Pencil, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Lĩnh Vực Chuyên Môn
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <skill.icon className="w-6 h-6 text-primary" />
                    <span>{skill.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
