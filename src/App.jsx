import React, { useState } from 'react';
// Import inžinierskych a sociálnych ikon
import { Github, Linkedin, Cpu, ExternalLink, Box } from 'lucide-react';

// 1. NAVBAR KOMPONENT
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md font-mono">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white group-hover:rotate-90 transition-transform">
          <Cpu size={14} strokeWidth={3} />
        </div>
        <span className="text-sm font-bold tracking-tighter text-white uppercase italic">
          Krivanik<span className="text-blue-500">.io</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em]">
        <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
        <a 
          href="https://github.com/cimbobimboontop" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
        >
          <Github size={12} /> Github_PR
        </a>
      </div>
    </div>
  </nav>
);

// 2. PROJECT CARD KOMPONENT
const ProjectCard = ({ title, status, description, tech }) => (
  <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-xl hover:border-blue-500/50 transition-all group relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <span className="text-[10px] font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-800 uppercase tracking-tighter">
        {status}
      </span>
    </div>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed italic">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-[9px] font-mono text-gray-500 border border-gray-800 px-2 py-0.5 rounded uppercase tracking-widest bg-[#050505]">
          {t}
        </span>
      ))}
    </div>
  </div>
);

// 3. HLAVNÁ APLIKÁCIA
export default function App() {
  const [clock, setClock] = useState(0);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-blue-500/30 scroll-smooth">
      <Navbar />

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <header className="mb-24 flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Avatar & Socials */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative w-40 h-40 md:w-44 md:h-44 bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://github.com/cimbobimboontop.png" 
                  alt="Matus Krivanik" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
            
            {/* Social Icons pod fotkou */}
            <div className="flex gap-3 mt-6">
              <a 
                href="https://github.com/cimbobimboontop" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl border border-gray-800 text-gray-500 hover:text-white hover:border-white/20 transition-all bg-white/5"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/tvoj-profil" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl border border-gray-800 text-gray-500 hover:text-blue-400 hover:border-blue-400/20 transition-all bg-white/5"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-[10px] font-mono mb-6 tracking-widest uppercase animate-pulse">
              System.status = "Active"
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 italic">
              Matúš Krivánik
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
              Digital Designer specializing in <span className="text-white font-medium underline underline-offset-8 decoration-blue-500/40">Computer Architecture</span> and <span className="text-white font-medium italic">Low-level Engineering</span>. Currently building an 8-bit RISC processor from scratch.
            </p>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          
          <div className="md:col-span-2 space-y-12" id="projects">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 flex items-center">
                <span className="w-12 h-[1px] bg-blue-900 mr-4"></span> Featured Projects
              </h2>
              <div className="grid gap-6">
                <a href="https://github.com/cimbobimboontop/mnpk01-soc"><ProjectCard 
                  title="8-bit Microcontroler"
                  status="Active_Dev"
                  description="Architecting and implementing a CPU from scratch. Features custom Instruction Set Architecture (ISA), Register File, and ALU. Verified via Icarus Verilog."
                  tech={['Verilog', 'GTKWave', 'Digital Logic']}
                /></a>
              </div>
            </section>
          </div>

          <div className="space-y-12" id="stack">
            <section className="bg-gray-900/20 p-6 rounded-2xl border border-white/5">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 flex items-center text-blue-500">
                Tech Stack
              </h2>
              <div className="space-y-6 font-mono text-[11px]">
                <div>
                  <p className="text-white mb-2 uppercase opacity-50 flex items-center gap-2">
                    <Box size={10} /> Hardware
                  </p>
                  <p className="text-gray-400 leading-relaxed">Thinkpad, ESP-32, Arduino, <br />Tang Nano 9k, JCD 8898 Iron</p>
                </div>
                <div>
                  <p className="text-white mb-2 uppercase opacity-50 flex items-center gap-2">
                    <Box size={10} /> Languages
                  </p>
                  <p className="text-gray-400 leading-relaxed text-blue-400">C, C++, Rust, Assembly, <br />SystemVerilog</p>
                </div>
                <div>
                  <p className="text-white mb-2 uppercase opacity-50 flex items-center gap-2">
                    <Box size={10} /> Software
                  </p>
                  <p className="text-gray-400 leading-relaxed">VSCode, Nvim, Logisim, KiCad</p>
                </div>
                <div>
                  <p className="text-white mb-2 uppercase opacity-50 flex items-center gap-2">
                    <Box size={10} /> OS
                  </p>
                  <p className="text-gray-400 leading-relaxed">Arch Linux, Proxmox, Ubuntu</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <p>© 2026 MATUS KRIVANIK // KERNEL_RELEASE_1.0</p>
          <div className="flex gap-8">
            <a href="https://github.com/cimbobimboontop" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Github size={12} /> GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Linkedin size={12} /> LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}