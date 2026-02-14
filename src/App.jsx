import React, { useState } from 'react';

// Reusable Project Component
const ProjectCard = ({ title, status, description, tech }) => (
  <div className="border border-gray-800 bg-gray-900/50 p-6 rounded-xl hover:border-blue-500/50 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <span className="text-xs font-mono bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-800">
        {status}
      </span>
    </div>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [clock, setClock] = useState(0);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-24">
          <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-mono mb-6">
            System.ready()
          </div>
          <h1 className="text-6xl font-extrabold text-white tracking-tighter mb-4">
            Matúš Krivánik
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
            Digital Designer specializing in <span className="text-white font-medium">Computer Architecture</span> and <span className="text-white font-medium">Low-level Engineering</span>. Currently building a custom 8-bit RISC processor in Verilog.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column: Projects */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-8 flex items-center">
                <span className="w-8 h-[1px] bg-gray-800 mr-4"></span> Featured Projects
              </h2>
              <div className="grid gap-6">
                <ProjectCard 
                  title="8-bit RISC Processor"
                  status="In Development"
                  description="Architecting and implementing a CPU from scratch. Features custom Instruction Set Architecture (ISA), Register File, and ALU. Verified via Icarus Verilog."
                  tech={['Verilog', 'GTKWave', 'Digital Logic']}
                />
                <ProjectCard 
                  title="Personal Portfolio"
                  status="Stable"
                  description="Modern portfolio built with React and Vite. Deployed on GitHub Pages using an automated CI/CD pipeline."
                  tech={['React 19', 'Tailwind CSS', 'Vite']}
                />
              </div>
            </section>
          </div>

          {/* Right Column: Tech Stack & Interactive Widget */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-8 flex items-center">
                <span className="w-8 h-[1px] bg-gray-800 mr-4"></span> Tech Stack
              </h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-white mb-1">Hardware</p>
                  <p className="text-gray-500">Verilog, SystemVerilog, FPGA</p>
                </div>
                <div>
                  <p className="text-white mb-1">Software</p>
                  <p className="text-gray-500">C (K&R), JavaScript, Python</p>
                </div>
                <div>
                  <p className="text-white mb-1">OS / Tools</p>
                  <p className="text-gray-500">Arch Linux, Vim, Git</p>
                </div>
              </div>
            </section>

            {/* Interactive Widget */}
            <section className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20">
              <h3 className="text-white text-sm font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 animate-pulse rounded-full" />
                Live CPU Clock
              </h3>
              <div className="text-4xl font-mono text-white mb-6 tracking-widest">
                {clock.toString().padStart(6, '0')}
              </div>
              <button 
                onClick={() => setClock(c => c + 1)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                PULSE
              </button>
              <p className="text-[10px] text-gray-500 mt-4 text-center uppercase tracking-tighter">
                Manual clock signal injection
              </p>
            </section>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-gray-900 flex justify-between items-center text-[10px] font-mono text-gray-600">
          <p>© 2026 MATUS KRIVANIK. SYSTEM_OK</p>
          <div className="flex gap-6">
            <a href="https://github.com/cimbobimboontop" className="hover:text-white transition-colors uppercase">GitHub</a>
            <a href="#" className="hover:text-white transition-colors uppercase">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
}