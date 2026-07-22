import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaDocker, FaGitAlt, FaGithub, FaLaptopCode, FaServer, 
  FaCode, FaTools, FaNetworkWired, FaPalette 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiJavascript, SiTailwindcss, SiGo, 
  SiN8N
} from 'react-icons/si';
import LogoLoop from './LogoLoop';

// Custom Canva icon component as a direct replacement for SiCanva
const SiCanva = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={props.className} {...props}>
    <title>Canva</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"/>
  </svg>
);

// Map technologies to icons and theme styles
const TECH_DATA = {
  frontend: [
    { name: 'React', icon: FaReact, colorClass: 'text-cyan-400', hoverClass: 'hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-slate-100', hoverClass: 'hover:border-slate-300/30 hover:bg-slate-300/5 hover:text-slate-100' },
    { name: 'HTML5', icon: FaHtml5, colorClass: 'text-orange-500', hoverClass: 'hover:border-orange-500/30 hover:bg-orange-500/5 hover:text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, colorClass: 'text-blue-500', hoverClass: 'hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, colorClass: 'text-yellow-400', hoverClass: 'hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-cyan-400', hoverClass: 'hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400' }
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, colorClass: 'text-green-500', hoverClass: 'hover:border-green-500/30 hover:bg-green-500/5 hover:text-green-500' },
    { name: 'Golang', icon: SiGo, colorClass: 'text-sky-400', hoverClass: 'hover:border-sky-400/30 hover:bg-sky-400/5 hover:text-sky-400' }
  ],
  languages: [
    { name: 'Python', icon: FaPython, colorClass: 'text-yellow-500', hoverClass: 'hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:text-yellow-500' },
    { name: 'JavaScript', icon: SiJavascript, colorClass: 'text-yellow-400', hoverClass: 'hover:border-yellow-500/30 hover:bg-yellow-500/5 hover:text-yellow-400' },
    { name: 'Go', icon: SiGo, colorClass: 'text-sky-400', hoverClass: 'hover:border-sky-400/30 hover:bg-sky-400/5 hover:text-sky-400' }
  ],
  tools: [
    { name: 'Docker', icon: FaDocker, colorClass: 'text-blue-400', hoverClass: 'hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-400' },
    { name: 'Git', icon: FaGitAlt, colorClass: 'text-orange-600', hoverClass: 'hover:border-orange-600/30 hover:bg-orange-600/5 hover:text-orange-600' },
    { name: 'GitHub', icon: FaGithub, colorClass: 'text-slate-100', hoverClass: 'hover:border-slate-300/30 hover:bg-slate-300/5 hover:text-slate-100' }
  ],
  automation: [
    { name: 'n8n', icon: SiN8N, colorClass: 'text-red-500', hoverClass: 'hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-500' }
  ],
  design: [
    { name: 'Canva', icon: SiCanva, colorClass: 'text-purple-400', hoverClass: 'hover:border-purple-500/30 hover:bg-purple-500/5 hover:text-purple-400' }
  ]
};

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive, modern, and highly interactive user interfaces.',
    icon: FaLaptopCode,
    skills: TECH_DATA.frontend
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Creating secure, robust, and highly scalable server architecture and APIs.',
    icon: FaServer,
    skills: TECH_DATA.backend
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Writing clean, efficient, and multi-paradigm software solutions.',
    icon: FaCode,
    skills: TECH_DATA.languages
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Managing version control, containerization, and streamlined deployment.',
    icon: FaTools,
    skills: TECH_DATA.tools
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Designing automated workflows, integrations, and logic pipelines.',
    icon: FaNetworkWired,
    skills: TECH_DATA.automation
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Crafting beautiful digital assets, interfaces, and visual assets.',
    icon: FaPalette,
    skills: TECH_DATA.design
  }
];

export function TechStack() {
  // Generate list of logos for the horizontal LogoLoop component
  const tickerItems = [
    { name: 'React', icon: FaReact, colorClass: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, colorClass: 'text-green-500' },
    { name: 'Golang', icon: SiGo, colorClass: 'text-sky-400' },
    { name: 'Docker', icon: FaDocker, colorClass: 'text-blue-400' },
    { name: 'n8n', icon: SiN8N, colorClass: 'text-red-500' },
    { name: 'Canva', icon: SiCanva, colorClass: 'text-purple-400' },
    { name: 'Python', icon: FaPython, colorClass: 'text-yellow-400' },
    { name: 'Git', icon: FaGitAlt, colorClass: 'text-orange-600' },
    { name: 'GitHub', icon: FaGithub, colorClass: 'text-white' },
    { name: 'HTML5', icon: FaHtml5, colorClass: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, colorClass: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, colorClass: 'text-yellow-400' }
  ];

  const loopLogos = tickerItems.map((item, index) => ({
    node: (
      <div 
        key={index}
        className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-950/50 border border-white/5 rounded-full text-sm font-medium text-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-blue-500/20 hover:text-white select-none cursor-pointer"
      >
        <item.icon className={`w-4 h-4 ${item.colorClass}`} />
        <span>{item.name}</span>
      </div>
    )
  }));

  // Framer Motion variant mappings
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const cardContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="relative z-10 w-full pt-12 md:pt-16 pb-28 md:pb-36 bg-transparent text-white font-sans pointer-events-auto"
    >
      {/* Decorative top separator */}
      <div className="max-w-7xl mx-auto px-8 mb-10 md:mb-12">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.span 
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4 select-none"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 select-none"
          >
            SKILLS
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl mt-5 max-w-2xl leading-relaxed select-none"
          >
            Technologies I use to build fast, scalable, and delightful digital experiences.
          </motion.p>
        </motion.div>

        {/* Ticker / LogoLoop Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden py-4 mb-20 select-none"
        >
          <LogoLoop 
            logos={loopLogos}
            speed={40}
            direction="left"
            gap={24}
            fadeOut={true}
            fadeOutColor="#000000"
            pauseOnHover={true}
            scaleOnHover={true}
            className="w-full py-1.5"
          />
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {CATEGORIES.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-zinc-950/20 border border-white/5 hover:border-slate-800/80 transition-all duration-300 overflow-hidden"
              >
                {/* Micro-glow background gradient effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/[0.02] group-hover:to-cyan-500/[0.02] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center p-3 rounded-xl bg-blue-500/[0.08] text-blue-400 border border-blue-500/10 group-hover:border-blue-500/25 group-hover:bg-blue-500/[0.12] transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Tech Pills (Skill Badges) */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer ${skill.hoverClass}`}
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.colorClass}`} />
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative bottom separator */}
      <div className="max-w-7xl mx-auto px-8 mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>
    </section>
  );
}

export default TechStack;
