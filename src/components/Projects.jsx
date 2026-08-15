import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';
import { PeerMeshVisual, AlgoScopeVisual, AIDashboardVisual } from './ProjectVisuals';

export function Projects() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const renderVisual = (type) => {
    switch (type) {
      case 'peermesh':
        return <PeerMeshVisual />;
      case 'algoscope':
        return <AlgoScopeVisual />;
      case 'aidashboard':
        return <AIDashboardVisual />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="relative z-10 w-full pt-16 md:pt-24 pb-20 md:pb-28 bg-transparent text-white font-sans pointer-events-none select-none"
    >
      {/* Top Decorative Line Separator matching TechStack */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center mb-14 md:mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-3 select-none"
          >
            FEATURED WORK
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 select-none"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg mt-4 max-w-2xl leading-relaxed select-none"
          >
            A selected collection of full-stack applications and interactive engineering projects.
          </motion.p>
        </motion.div>

        {/* Projects Grid: Responsive 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="group relative flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-zinc-950/40 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.12)] transition-all duration-500 overflow-hidden pointer-events-auto"
            >
              {/* Subtle ambient card background glow */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/[0.03] group-hover:to-blue-500/[0.03] transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Visual Preview Area */}
                  <div className="mb-5">
                    {renderVisual(project.visualType)}
                  </div>

                  {/* Card Content Header */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300 text-xs font-medium shadow-sm transition-all duration-300 hover:border-cyan-500/20 hover:text-white"
                        >
                          <TechIcon className={`w-3.5 h-3.5 ${tech.color}`} />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Interactive Action Buttons with TargetCursor class */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-slate-600 text-slate-200 hover:text-white text-xs md:text-sm font-medium transition-all duration-300 group/btn"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <FaGithub className="w-4 h-4 text-slate-300 group-hover/btn:text-white transition-colors" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-target flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-200 hover:text-white text-xs md:text-sm font-medium shadow-[0_4px_16px_rgba(56,189,248,0.12)] transition-all duration-300 group/btn"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5 text-cyan-300 group-hover/btn:text-white transition-colors" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
