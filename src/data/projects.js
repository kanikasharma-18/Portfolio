import { FaReact, FaNetworkWired, FaBrain, FaExchangeAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const PROJECTS_DATA = [
  {
    id: 'peermesh',
    title: 'PeerMesh',
    subtitle: 'Peer-to-Peer File Sharing',
    description: 'P2P file-sharing application that allows two browsers to connect and transfer files directly using WebRTC/PeerJS.',
    techStack: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'PeerJS', icon: FaExchangeAlt, color: 'text-blue-400' },
      { name: 'WebRTC', icon: FaNetworkWired, color: 'text-cyan-300' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://peermesh.demo',
    accentColor: '#38bdf8', // Electric Cyan
    visualType: 'peermesh'
  },
  {
    id: 'algoscope',
    title: 'AlgoScope',
    subtitle: 'Algorithm Visualizer',
    description: 'Interactive platform for visualizing algorithms and data structures.',
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-100' },
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://algoscope.demo',
    accentColor: '#60a5fa', // Electric Blue
    visualType: 'algoscope'
  },
  {
    id: 'ai-dashboard',
    title: 'AI Dashboard',
    subtitle: 'Intelligent Analytics Interface',
    description: 'AI-powered dashboard with an interactive interface and Hugging Face API integration.',
    techStack: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
      { name: 'Hugging Face API', icon: FaBrain, color: 'text-cyan-300' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://ai-dashboard.demo',
    accentColor: '#38bdf8', // Cyan / Electric Accent
    visualType: 'aidashboard'
  }
];
