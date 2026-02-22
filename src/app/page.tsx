"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, GraduationCap, Globe, Zap, Microchip, Mail, Briefcase, User, Home as HomeIcon, ExternalLink, PlayCircle } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCert, setSelectedCert] = useState(null);
  // --- INI MESIN PEMANTAU SCROLL NYA ---
  useEffect(() => {
    const handleScroll = () => {
      // Kita buat daftar ID section yang ada di website kamu
      const sections = ["home", "about", "project", "certificates", "contact"];
      
      // Ambil posisi scroll kamu sekarang, ditambah 300 pixel agar deteksinya lebih cepat
      const scrollPosition = window.scrollY + 300; 

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          // Hitung posisi atas dan tinggi setiap section
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Jika posisi scroll kamu berada di dalam wilayah section tersebut
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(id); // Maka nyalakan ikon di Navbar sesuai ID nya
          }
        }
      });
    };

    // Suruh browser mendengarkan (listen) setiap kali kamu scroll
    window.addEventListener("scroll", handleScroll);
    
    // Bersihkan fungsi saat tidak dipakai agar tidak berat (memory leak)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
  // --- AKHIR MESIN ---
  

  return (
    <div className="min-h-screen bg-[#030305] text-white font-sans overflow-x-hidden selection:bg-pink-500/30">
      
  {/* 1. HYPER-DRIVE LIVE WALLPAPER (Fast & Vibrant) */}
      <div className="fixed inset-0 z-0 bg-[#050a15] overflow-hidden">
        
        {/* Layer A: Liquid Blobs yang Bergerak Cepat */}
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [-80, 80, -80],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-blue-500/40 blur-[100px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [150, -150, 150],
            y: [80, -80, 80],
            scale: [1.4, 1, 1.4],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-pink-500/30 blur-[100px] rounded-full mix-blend-screen"
        />

        {/* Layer B: Cyber Grid dengan Opacity Lebih Tinggi */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Layer C: Fast Speed Lines (Efek Bergerak Kencang) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", y: Math.random() * 100 + "%" }}
            animate={{ x: "200%" }}
            transition={{ 
              duration: Math.random() * 0.5 + 0.5, // Sangat cepat (0.5 - 1 detik)
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "linear"
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"
            style={{ width: Math.random() * 200 + 100 + "px" }}
          />
        ))}

        {/* Layer D: Pink Speed Lines (Berlawanan Arah atau Acak) */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`pink-${i}`}
            initial={{ x: "-100%", y: Math.random() * 100 + "%" }}
            animate={{ x: "200%" }}
            transition={{ 
              duration: Math.random() * 1 + 1, 
              repeat: Infinity, 
              delay: Math.random() * 3,
              ease: "linear"
            }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent z-0"
            style={{ width: Math.random() * 300 + 200 + "px" }}
          />
        ))}

        {/* Layer E: Glowing Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 2, 1],
            }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}

        {/* Lens Flare Overlay agar Terang */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,10,21,0.3)_100%)]"></div>
      </div>
   {/* 2. FLOATING NAVBAR - WITH SLIDING EFFECT */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-full flex gap-2 md:gap-6">
        {[
          { id: "home", icon: <HomeIcon size={18} />, label: "Home" },
          { id: "about", icon: <User size={18} />, label: "About" },
          { id: "project", icon: <Briefcase size={18} />, label: "Project" },
          { id: "certificates", icon: <GraduationCap size={18} />, label: "Certs" },
          { id: "contact", icon: <Mail size={18} />, label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            // Penjelasan: "relative" wajib ada agar background meluncur tidak keluar jalur
            className={`relative px-4 py-2 flex items-center gap-2 text-[10px] md:text-xs font-bold transition-colors duration-300 ${
              activeTab === item.id ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {/* 1. EFEK KAPSUL MELUNCUR (Pill Background) */}
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-pill" // ID unik agar Framer Motion tahu elemen ini yang berpindah
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-pink-600/20 rounded-full border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                style={{ zIndex: 0 }}
              />
            )}

            {/* 2. KONTEN (Ikon & Teks) - Diberi z-10 supaya di atas background */}
            <span className="relative z-10 flex items-center gap-2">
              {item.icon}
              <span className="hidden md:block uppercase tracking-widest">{item.label}</span>
            </span>

            {/* 3. EFEK TITIK AKTIF (Dot) */}
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-dot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            )}
          </button>
        ))}
      </nav>

      



     {/* 3. REVISED HOME SECTION (Layout Samping-Sampingan) */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
        {/* SISI KIRI: FOTO */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }} 
            // once: true DIHAPUS supaya setiap balik ke sini animasi jalan lagi
            viewport={{ amount: 0.3 }} // Animasi jalan pas 30% bagian ini kelihatan
            transition={{ duration: 0.8 }}
            className="relative flex justify-center scale-90 md:scale-100"
          >
            <div className="relative w-72 h-72 md:w-70 md:h-85">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border-[2px] border-transparent border-t-cyan-400 border-r-pink-500 rounded-[3.5rem] opacity-80"
              />
              <div className="absolute -inset-2 border-2 border-white/10 rounded-[2.5rem]">
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-2xl"></div>
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-pink-500 rounded-tr-2xl"></div>
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-500 rounded-bl-2xl"></div>
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cyan-400 rounded-br-2xl"></div>
              </div>
              <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-white/20 bg-gray-900 group shadow-2xl">
                <img 
                  src="/jenong.jpeg" 
                  alt="Satria" 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700" 
                />
                <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-[2px] bg-cyan-400/50 shadow-[0_0_15px_cyan] z-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

         {/* SISI KANAN: TEKS IDENTITAS */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="text-blue-400 font-mono tracking-[0.4em] mb-2 text-sm font-bold uppercase">
              Portfolio Introduction
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Dwi Muhammad<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Satria</span>
            </h1>

            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-pink-500" size={18} />
                <p className="font-bold text-base md:text-lg uppercase tracking-tight">DIII Teknik Komputer</p>
              </div>
              <p className="text-gray-500 font-medium text-sm md:text-base ml-8 tracking-tighter italic">
                Universitas Harkat Negeri
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-l-2 border-white/5 pl-6">
              <div className="group">
                <div className="flex items-center gap-3 text-white">
                  <Code2 size={20} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-black text-lg leading-none uppercase italic">Web Developer</h3>
                </div>
                <p className="text-gray-500 text-xs mt-2 max-w-xs leading-relaxed">
                  Fokus pada pembuatan antarmuka website yang modern dan fungsional.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 text-white">
                  <Cpu size={20} className="text-pink-500 group-hover:rotate-12 transition-transform" />
                  <h3 className="font-black text-lg leading-none uppercase italic">Microcontroller</h3>
                </div>
                <p className="text-gray-500 text-xs mt-2 max-w-xs leading-relaxed">
                  Mengembangkan sistem kontrol berbasis perangkat keras dan sensor.
                </p>
              </div>
            </div>

            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-4 group"
            >
              <div className="h-[1px] w-8 bg-pink-500 group-hover:w-16 transition-all"></div>
              <span className="font-black italic tracking-[0.3em] text-blue-400 text-[10px] uppercase">
                Scroll to Discover
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>



      {/* 4. ABOUT SECTION - HARDWARE & TECH REBIRTH */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* SISI KIRI: HARDWARE COMPONENT EXPLOSION (ANIMASI BARU) */}
          <div className="relative h-[400px] flex items-center justify-center order-2 md:order-1">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full animate-pulse"></div>

            {/* Komponen Tengah (CPU Core) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative z-20 p-8 bg-black/40 backdrop-blur-md border-2 border-cyan-400/50 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <Cpu size={60} className="text-cyan-400" />
              {/* Garis Orbit Kecil */}
              <div className="absolute -inset-2 border border-pink-500/30 rounded-3xl animate-ping"></div>
            </motion.div>

            {/* Komponen Melayang 1 (Web/Code) */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 z-30 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
            >
              <Code2 size={32} className="text-pink-500" />
            </motion.div>

            {/* Komponen Melayang 2 (Zap/Power) */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-10 z-30 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
            >
              <Zap size={32} className="text-yellow-400" />
            </motion.div>

            {/* Komponen Melayang 3 (Connectivity) */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -right-4 z-30 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full"
            >
              <Globe size={28} className="text-blue-400" />
            </motion.div>

            {/* Interactive Connecting Lines (Garis-garis sirkuit) */}
            <svg className="absolute inset-0 w-full h-full z-10 opacity-30">
              <motion.line 
                x1="20%" y1="20%" x2="50%" y2="50%" 
                stroke="#22d3ee" strokeWidth="1" strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, -50] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <motion.line 
                x1="80%" y1="80%" x2="50%" y2="50%" 
                stroke="#ec4899" strokeWidth="1" strokeDasharray="5,5"
                animate={{ strokeDashoffset: [0, 50] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* SISI KANAN: TEXT CONTENT */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black mb-8 italic tracking-tighter">
                <span className="text-white">ABOUT</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 underline decoration-pink-500/50 underline-offset-8">
                  ME
                </span>
              </h2>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                <p>
                  Halo! Saya <span className="text-white font-bold">Dwi</span>. Saat ini saya sedang menempuh pendidikan di semester 4 jurusan <span className="text-blue-400">Teknik Komputer</span>. 
                </p>
                <p className="border-l-4 border-pink-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                  Teknologi bagi saya adalah tentang menciptakan sesuatu yang hidup dari baris kode. Di luar itu, saya menikmati <span className="text-pink-400">Bermain Game</span> & <span className="text-cyan-400">Lari Santai.</span> — dua hal yang mengajarkan saya fokus, strategi, dan konsistensi dalam berkembang.
                </p>
                <p>
 Saya adalah tipe orang yang tidak pernah puas berhenti di satu titik. Saya selalu mencari tantangan baru untuk meng-upgrade skill saya, karena bagi saya, belajar hal baru adalah cara terbaik untuk tetap relevan di dunia teknologi yang terus berkembang.
                </p>
              </div>

              {/* Mini Stats/Skill Tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["Arduino", "ESP32", "React.js", "Tailwind", "Next.js", "Sensors"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300 hover:border-pink-500/50 hover:text-white transition-all cursor-default">
                    #{skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

   {/* 5. PROJECT SECTION - WITH VISUAL PREVIEW (3 Columns) */}
      <section id="project" className="relative z-10 min-h-screen py-20 px-6 max-w-7xl mx-auto text-center">
        
        {/* Animasi Judul: Muncul dari atas setiap kali masuk viewport */}
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black mb-16 italic uppercase tracking-tighter text-blue-400"
        >
          My <span className="text-pink-500">Projects</span>
        </motion.h2>
        
        {/* Grid 3 Kolom */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "valentine website",
              desc: "valentine website for my girlfriend.",
              image: "/valen.png",
              link: "https://newsatria466-ship-it.github.io/w_dwi/",
              color: "border-blue-500/50"
            },
            {
              title: "Maison De Choco",
              desc: "UAS Pemrograman Website Semester 3.",
              image: "/Coklat.png",
              link: "https://newsatria466-ship-it.github.io/Maison-De-Choco/",
              color: "border-pink-500/50"
            },
            {
              title: "Smart Home System",
              desc: "Monitoring suhu & kendali lampu via ESP32.",
              image: "/project-smarthome.jpg",
              link: "https://github.com/Satria/smart-home",
              color: "border-yellow-500/50"
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Mulai dari bawah (y:50)
              whileInView={{ opacity: 1, y: 0 }} // Naik ke atas saat dilihat
              // once: true dihapus agar efek meluncur jalan setiap kali di-scroll/diklik
              viewport={{ amount: 0.2 }} // Jalan ketika 20% kartu sudah masuk layar
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2, // Efek tangga: kartu muncul satu per satu
                ease: "easeOut"
              }}
              onClick={() => window.open(project.link, "_blank")}
              className="group relative bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-400 transition-all duration-500"
            >
              {/* Gambar Background Project */}
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Konten Teks */}
              <div className="p-5 text-left bg-gradient-to-b from-transparent to-[#0a0f1d]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={16} className="text-gray-500 group-hover:text-white" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {project.desc}
                </p>
                
                <div className="mt-4 flex gap-2">
                  <span className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-blue-300">
                    GITHUB_REPO
                  </span>
                </div>
              </div>

              {/* Animasi Cahaya di bagian bawah saat hover */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </section>

   {/* 6. CERTIFICATE SECTION - ALTERNATING 3D TILT */}
      <section id="certificates" className="relative z-10 py-20 px-6 max-w-6xl mx-auto text-center">
        
        {/* Animasi Judul Achievement */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black mb-12 italic uppercase tracking-tighter text-blue-400"
        >
          My <span className="text-pink-500">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> 
          {[
            { id: 1, title: "Web Dev", issuer: "Dicoding", img: "/intro html.jpeg" },
            { id: 2, title: "IoT Eng", issuer: "Cisco", img: "/iot huawei.png" },
            { id: 3, title: "Cyber Sec", issuer: "Google", img: "/iot tekno.png" },
            { id: 4, title: "Micro-C", issuer: "Harkat", img: "/jenong.jpeg" },
          ].map((cert, index) => ( 
            <motion.div
              key={cert.id}
              // --- TAMBAHAN ANIMASI MUNCUL ---
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // -------------------------------
              whileHover={{ 
                scale: 1.08,
                rotateY: index % 2 === 0 ? 30 : -30, 
                rotateX: -10,
                z: 50 
              }}
              whileTap={{ scale: 0.95 }}

              
              // @ts-ignore
              onClick={() => setSelectedCert(cert.img)}
              className="group relative cursor-pointer perspective-1000"
            >
              {/* Glow Aura */}
              <div className={`absolute -inset-1 bg-gradient-to-tr ${index % 2 === 0 ? 'from-cyan-500 to-blue-500' : 'from-pink-500 to-purple-500'} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="relative bg-[#0a0f1d] border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="h-[280px] overflow-hidden relative">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  
                  {/* Efek Kilatan Kaca (Shimmer) */}
                  <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent ${index % 2 === 0 ? '-translate-x-full group-hover:translate-x-full' : 'translate-x-full group-hover:-translate-x-full'} transition-transform duration-1000`}></div>
                  
                  {/* Overlay Gradasi */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Info Minimalis */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-[8px] text-cyan-400 font-mono tracking-widest uppercase mb-1">Certified</p>
                  <h3 className="text-sm font-black text-white uppercase truncate">{cert.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- POP-UP MODAL (LIGHTBOX) --- */}
   {/* --- POP-UP MODAL (LIGHTBOX) --- */}
        {selectedCert && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10">
            {/* Background Gelap / Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            {/* Container Gambar yang Fleksibel */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-[160] flex flex-col items-center justify-center w-full h-full pointer-events-none"
            >
              {/* Tombol Close */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 md:-top-16 pointer-events-auto bg-white/10 hover:bg-pink-500 p-3 rounded-full border border-white/20 transition-all shadow-lg"
              >
                <span className="text-white text-xl block leading-none">✕</span>
              </button>

              {/* Gambar Utama: Menyesuaikan Bentuk Asli (Object-Contain) */}
              <img 
                src={selectedCert} 
                alt="Full View" 
                className="max-w-[95vw] max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 pointer-events-auto" 
              />
              
              {/* Keterangan di bawah gambar */}
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-gray-400 font-mono text-[10px] tracking-[0.5em] uppercase pointer-events-auto"
              >
                Tap anywhere to close
              </motion.p>
            </motion.div>
          </div>
        )}
      </section>

    {/* 7. CONTACT SECTION - MINIMALIST VERSION */}
      <section id="contact" className="relative z-10 py-32 px-6 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          className="text-center"
        >
          {/* Judul yang sangat simple */}
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
            Say <span className="text-blue-500">Hello.</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs tracking-[0.3em] uppercase mb-12">
            Available for new opportunities
          </p>

          {/* Deretan Link yang langsung tertata */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* WHATSAPP LINK */}
            <a 
              href="https://wa.me/6285924594747" 
              target="_blank" 
              className="group flex items-center gap-3 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all">
                <PlayCircle size={20} className="text-gray-400 group-hover:text-green-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Chat Me</p>
                <p className="text-sm font-bold group-hover:text-green-500 transition-colors">WhatsApp</p>
              </div>
            </a>

            {/* EMAIL LINK */}
            <a 
              href="mailto:peachzw12@gmail.com" 
              className="group flex items-center gap-3 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <Mail size={20} className="text-gray-400 group-hover:text-blue-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Mail Me</p>
                <p className="text-sm font-bold group-hover:text-blue-500 transition-colors">newsatria466@gmail.com</p>
              </div>
            </a>

            {/* LINKEDIN / GITHUB (OPSIONAL) */}
            <a 
              href="#" 
              className="group flex items-center gap-3 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-pink-500 group-hover:bg-pink-500/10 transition-all">
                <User size={20} className="text-gray-400 group-hover:text-pink-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Profile</p>
                <p className="text-sm font-bold group-hover:text-pink-500 transition-colors">LinkedIn</p>
              </div>
            </a>

          </div>

          {/* Copyright sangat tipis di bawah */}
          <p className="mt-24 text-[9px] text-gray-600 font-mono uppercase tracking-[0.5em]">
            © 2026 Designed by Satria
          </p>
        </motion.div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="relative z-10 pt-20 pb-10 px-6 border-t border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Sosmed Icons Container */}
          <div className="flex items-center gap-6 mb-10">
            
            {/* INSTAGRAM */}
            <motion.a 
              href="https://instagram.com/username_kamu" 
              target="_blank"
              whileHover={{ y: -5 }}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </motion.a>

            {/* TIKTOK */}
            <motion.a 
              href="https://tiktok.com/@username_kamu" 
              target="_blank"
              whileHover={{ y: -5 }}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              {/* Icon TikTok manual menggunakan SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </motion.a>

            {/* GITHUB */}
            <motion.a 
              href="https://github.com/username_kamu" 
              target="_blank"
              whileHover={{ y: -5 }}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <Briefcase size={20} />
            </motion.a>

          </div>

          {/* Navigasi Cepat (Quick Links) */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
            <button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => document.getElementById('project')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => document.getElementById('certificates')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Achievements</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Contact</button>
          </div>

          {/* Garis Pemisah Tipis */}
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Identitas Akhir */}
          <div className="text-center">
            <p className="text-[10px] font-mono text-gray-600 tracking-[0.4em] uppercase mb-2">
              Built with Passion by
            </p>
            <h3 className="text-lg font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              SATRIA.DEV
            </h3>
            <p className="mt-6 text-[8px] text-gray-700 font-mono">
              © 2026 ALL RIGHTS RESERVED (HARKAT NEGERI TECHNOLOGY)
            </p>
          </div>

        </div>
      </footer>

      

    </div>
  );
}