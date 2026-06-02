import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Receipt, 
  Database, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Github, 
  Instagram, 
  Facebook, 
  Mail, 
  Smartphone, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  ExternalLink,
  Share2,
  Heart,
  Palette,
  Info,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Copy,
  Check
} from "lucide-react";
import { screenshots, features, developerInfo } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("splash");
  const [accent, setAccent] = useState<string>("teal"); // teal | violet | emerald | rose | amber
  const [downloadCount, setDownloadCount] = useState<number>(348);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showShareTooltip, setShowShareTooltip] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  // Auto-increment downloads subtly for interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareWebsite = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 2000);
  };

  const triggerDownload = () => {
    // Simulate high-quality glossy download animation
    if (downloadProgress !== null) return;
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(p => {
        if (p === null) return null;
        if (p >= 100) {
          clearInterval(interval);
          // Trigger actual download link
          window.location.href = "https://github.com/RealShibSankarSarkar/GeoBiling/releases/download/GeoBiling/app-release.apk";
          setTimeout(() => setDownloadProgress(null), 1500);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
  };

  // Accent color setups with Frosted Glass enhancements
  const accentColors: Record<string, {
    primary: string;
    glow: string;
    bgGlow: string;
    border: string;
    text: string;
    from: string;
    to: string;
  }> = {
    teal: {
      primary: "#14b8a6",
      glow: "rgba(20, 184, 166, 0.45)",
      bgGlow: "rgba(20, 184, 166, 0.18)",
      border: "border-teal-400/40",
      text: "text-teal-400",
      from: "from-emerald-400",
      to: "to-teal-600"
    },
    violet: {
      primary: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.45)",
      bgGlow: "rgba(139, 92, 246, 0.18)",
      border: "border-violet-400/40",
      text: "text-violet-400",
      from: "from-violet-500",
      to: "to-fuchsia-500"
    },
    emerald: {
      primary: "#10b981",
      glow: "rgba(16, 185, 129, 0.45)",
      bgGlow: "rgba(16, 185, 129, 0.18)",
      border: "border-emerald-400/40",
      text: "text-emerald-450",
      from: "from-emerald-400",
      to: "to-teal-600"
    },
    rose: {
      primary: "#f43f5e",
      glow: "rgba(244, 63, 94, 0.45)",
      bgGlow: "rgba(244, 63, 94, 0.18)",
      border: "border-rose-400/40",
      text: "text-rose-400",
      from: "from-rose-500",
      to: "to-orange-500"
    },
    amber: {
      primary: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.45)",
      bgGlow: "rgba(245, 158, 11, 0.18)",
      border: "border-amber-400/40",
      text: "text-amber-400",
      from: "from-amber-450",
      to: "to-yellow-500"
    }
  };

  const selectedAccent = accentColors[accent] || accentColors.teal;

  const currentScreenshotIndex = screenshots.findIndex(s => s.id === activeTab);
  const activeScreenshot = screenshots[currentScreenshotIndex] || screenshots[0];

  const handleNextScreenshot = () => {
    const nextIdx = (currentScreenshotIndex + 1) % screenshots.length;
    setActiveTab(screenshots[nextIdx].id);
  };

  const handlePrevScreenshot = () => {
    const prevIdx = (currentScreenshotIndex - 1 + screenshots.length) % screenshots.length;
    setActiveTab(screenshots[prevIdx].id);
  };

  // Helper dictionary (strictly English only)
  const t = {
    tagline: "Unleash Intelligent Location-Based Billing & Real-time Stock Controls",
    downloadBtn: "Download Installer APK",
    downloadSubtitle: "GeoBiling v1.0.0 • Secured & Evaluated by Play Protect",
    quickStats: "Quick Stats",
    downloadCountLabel: "Total Installs",
    appSize: "File Size : 8.2 MB",
    securityVerified: "Security Verified",
    installStepsTitle: "How to Install in Just 3 Simple Steps?",
    step1: "1. Tap the download button above to retrieve the signed GeoBiling APK.",
    step2: "2. Open the file and allow application installation from unknown sources if prompted by your browser.",
    step3: "3. Complete the installation and initiate billing instantaneously!",
    featuresTitle: "Next-Gen Enterprise Features",
    featuresSubtitle: "Crafted with cutting-edge technologies to streamline sales, database syncs, and geolocations.",
    devTitle: "Created & Crafted by",
    devSubtitle: "Code, structural design, and interactive optimization created singlehandedly with love",
    copyMailBtn: "Copy Developer Email",
    copiedLabel: "Copied address!",
    langLabel: "Language selection",
    themeLabel: "Tweak Neon Theme",
    techSpecs: "Technical Specifications",
    screenshotTitle: "Dynamic Interface Showcase",
    screenshotSub: "Slide or tap to inspect high-fidelity app modules in an interactive 3D style viewport.",
    viewOriginal: "Open high-res original",
    socialContact: "Connect Globally",
    geoBilingSlogan: "Automated local invoicing synced beautifully with coordinates",
    backToTop: "Scroll to top",
    craftedWithLove: "Engineered with absolute dedication by Shib Sankar Sarkar",
  };

  // Map icon names to lucide icons safely
  const renderIcon = (name: string, colorClass: string) => {
    const props = { className: `w-6 h-6 ${colorClass}` };
    switch (name) {
      case "MapPin": return <MapPin {...props} />;
      case "Receipt": return <Receipt {...props} />;
      case "Database": return <Database {...props} />;
      case "Zap": return <Zap {...props} />;
      case "Layers": return <Layers {...props} />;
      case "ShieldCheck": return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-900 text-gray-100 overflow-x-hidden font-sans grid-pattern selection:bg-emerald-500/45">
      
      {/* Animated Mesh Background Simulation from Frosted Glass Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[33%] h-[33%] bg-emerald-500/22 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] bg-teal-500/15 rounded-full blur-[110px]" />
      </div>

      {/* FIXED FLOATING CONTROL PANEL - Top header */}
      <header className="sticky top-0 z-50 w-full glass-panel-heavy border-b border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 to-violet-600 opacity-60 blur group-hover:opacity-100 transition duration-500" />
              <img 
                id="app-logo-header"
                src="https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/applogo.png" 
                alt="GeoBiling logo" 
                referrerPolicy="no-referrer"
                className="relative w-10 h-10 rounded-xl border border-white/10 shadow-lg object-contain bg-slate-900 group-hover:scale-110 transition duration-300"
              />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                GeoBiling
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 font-semibold border border-teal-500/20">
                PRORELEASE v1.0
              </span>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle Dial - High Craft Interaction */}
            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/5">
              {Object.keys(accentColors).map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  title={`Switch to ${c}`}
                  className={`w-5 h-5 rounded-full transition-all duration-300 mx-0.5 cursor-pointer hover:scale-125 focus:outline-none ${
                    accent === c ? 'scale-110 ring-2 ring-white/40' : 'opacity-40 hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: accentColors[c].primary,
                    boxShadow: accent === c ? `0 0 8px ${accentColors[c].primary}` : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* CORE WRAPPER */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative z-10">
        
        {/* HERO SECTION / FRONT PROMOTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-32">
          
          {/* Text pitch column - Gorgeous Frosted Glass Theme element */}
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl text-center lg:text-left text-white space-y-6">
            
            {/* Premium tag identifier */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-slate-950 border border-white/15 text-slate-300 shadow-inner flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-450 animate-pulse" />
                <span>Made by @RealShibSankarSarkar</span>
              </span>
            </div>

            {/* Glowing Big Title */}
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              <span className="block bg-gradient-to-b from-white to-slate-205 bg-clip-text text-transparent">
                Manage Your
              </span>
              <span className="block mt-1 text-emerald-400 font-sans font-black bg-gradient-to-r from-emerald-400 to-teal-300">
                Stocks & Billing
              </span>
              <span className="block mt-1 text-2xl md:text-3xl font-sans font-medium text-slate-300">
                {t.tagline}
              </span>
            </h1>

            {/* Beautiful brief paragraph in respective language */}
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              A lightweight, powerful, and secure mobile application designed for local businesses to handle inventory and transactions on the go. Realize precise geographical mapping aligned perfectly with instantaneous invoicing, stocks warnings, and rapid navigation.
            </p>

            {/* GLOSSY BIG DOWNLOAD BUTTON */}
            <div className="pt-4 flex flex-col items-center lg:items-start gap-4">
              
              <div className="relative group w-full max-w-md">
                {/* 3D Glossy Button Ambient Backsplash */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 via-fuchsia-600 to-purple-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
                
                <button
                  onClick={triggerDownload}
                  className="relative w-full overflow-hidden rounded-2xl glass-panel-heavy p-0.5 shadow-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                >
                  <div className="rounded-[14px] bg-gradient-to-r from-slate-900 to-slate-950 px-6 py-5 flex items-center justify-between gap-4 text-left border border-white/5 hover:bg-slate-900">
                    
                    <div className="flex items-center gap-4">
                      {/* Interactive download graphic icon with metallic/glossy circle */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-[#070b14] shadow-lg shadow-teal-500/30 ring-2 ring-white/10 group-hover:scale-110 transition-transform duration-300">
                        {downloadProgress !== null ? (
                          <span className="text-xs font-mono font-bold">{downloadProgress}%</span>
                        ) : (
                          <Download className="w-6 h-6 animate-bounce" />
                        )}
                      </div>
                      
                      <div>
                        <div className="text-white text-base md:text-lg font-bold font-display tracking-tight leading-snug">
                          {downloadProgress !== null ? "Downloading GeoBiling App..." : t.downloadBtn}
                        </div>
                        <div className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{t.downloadSubtitle}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1.5 transition-transform duration-300 hidden sm:block" />
                  </div>

                  {/* Progressive shine wave animation */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:animate-shine" />

                  {/* Active download process indicator bar */}
                  {downloadProgress !== null && (
                    <div 
                      className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-100"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  )}
                </button>
              </div>

              {/* Secure evaluations subhead */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t.appSize}
                </span>
                <span className="hidden sm:inline border-r border-white/10 h-3" />
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {t.securityVerified}
                </span>
                <span className="hidden sm:inline border-r border-white/10 h-3" />
                <span className="text-slate-300 font-semibold bg-white/5 py-0.5 px-2 rounded-md border border-white/5">
                  📥 {downloadCount} Installed today
                </span>
              </div>
            </div>

            {/* SHARE ACTION INTEGRATION */}
            <div className="relative pt-2 self-center lg:self-start">
              <button 
                onClick={shareWebsite}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 text-xs border border-transparent hover:border-white/5 transition-all duration-200 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-violet-400" />
                <span>Share this App page</span>
              </button>
              
              <AnimatePresence>
                {showShareTooltip && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-teal-500 text-slate-900 text-xs font-semibold whitespace-nowrap shadow-lg pointer-events-none"
                  >
                    Link copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* MAIN FLOATING PORTRAIT APP VIEW BLOCK - 3D Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* PORTRAIT CONTAINER MATCHING USER INTENT OUTSTANDINGLY */}
            <div className="relative w-full max-w-[340px] px-2 py-4">
              
              {/* Radial glow background around device */}
              <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-[60px] animate-pulse pointer-events-none" />

              {/* Realistic Glossy Mobile Phone Bezel Frame */}
              <div className="relative rounded-[40px] border-4 border-slate-700/80 bg-slate-900 shadow-2xl p-3 ring-8 ring-slate-800/40 outline-slate-950 flex flex-col">
                
                {/* Speaker Grill & Camera Punch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-40 h-5 bg-black rounded-b-2xl flex items-center justify-center z-20">
                  <div className="w-16 h-1 bg-slate-800 rounded-full mb-1" />
                  <div className="w-2 h-2 bg-slate-900 rounded-full ml-2 border border-slate-800 mb-1" />
                </div>

                {/* Subtitle Indicator Tag inside mockup */}
                <div className="absolute top-[40px] right-[24px] z-10">
                  <span className="text-[9px] font-mono select-none px-2 py-0.5 rounded-full bg-slate-950/80 text-teal-300 font-bold backdrop-blur-sm border border-teal-500/20">
                    {activeScreenshot.badge}
                  </span>
                </div>

                {/* Simulated Screen Body */}
                <div className="relative aspect-[9/18.5] w-full rounded-[30px] overflow-hidden bg-[#0a0d15] border border-slate-950">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.96, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.96, x: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      {/* Actual App screenshot representation */}
                      <img 
                        src={activeScreenshot.imageUrl} 
                        alt={activeScreenshot.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />

                      {/* Screen Glass Reflection Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none mix-blend-overlay" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Interactive Screen Overlay with Swipe Actions Instructions */}
                  <div className="absolute bottom-0 inset-x-0 p-4 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end text-left">
                    <div className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-widest bg-teal-500/10 self-start px-1.5 py-0.5 rounded mb-1 border border-teal-500/20">
                      {activeScreenshot.badge}
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-white mb-1">
                      {activeScreenshot.title}
                    </h3>
                    <p className="text-[10px] text-slate-350 line-clamp-3">
                      {activeScreenshot.description}
                    </p>
                  </div>

                </div>

                {/* Handheld Side Controls Simulation */}
                <div className="absolute top-[100px] -right-[12px] w-2 h-10 bg-slate-700 rounded-l" />
                <div className="absolute top-[160px] -right-[12px] w-2 h-16 bg-slate-700 rounded-l" />

                {/* Quick Swiper Buttons in screen border */}
                <button 
                  onClick={handlePrevScreenshot}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/15 cursor-pointer hover:scale-110 active:scale-95 transition-all z-20"
                >
                  <ChevronLeft className="w-4 h-4 text-teal-400" />
                </button>
                <button 
                  onClick={handleNextScreenshot}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/15 cursor-pointer hover:scale-110 active:scale-95 transition-all z-20"
                >
                  <ChevronRight className="w-4 h-4 text-teal-400" />
                </button>

              </div>

              {/* Bottom device reflection shadow */}
              <div className="w-[85%] mx-auto h-4 bg-teal-900/30 rounded-full filter blur-md mt-6 animate-pulse" />

              {/* Mobile Screenshots Navigation selector dots below phone */}
              <div className="flex items-center justify-center gap-1.5 mt-8">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      activeTab === s.id 
                        ? 'w-6' 
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    style={{
                      backgroundColor: activeTab === s.id ? selectedAccent.primary : undefined
                    }}
                  />
                ))}
              </div>

            </div>

          </div>

        </section>

        {/* SCREENSHOTS BENTO GRID TABS - High Quality Previews */}
        <section className="mb-20 md:mb-32">
          
          <div className="text-center md:text-left mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white flex items-center justify-center md:justify-start gap-2.5">
              <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Smartphone className="w-5 h-5" />
              </span>
              <span>{t.screenshotTitle}</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              {t.screenshotSub}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {screenshots.map((s) => {
              const isActive = activeTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`text-left rounded-xl p-3 cursor-pointer select-none transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? 'bg-slate-900 border-2 shadow-lg ring-2 ring-teal-500/20' 
                      : 'bg-white/5 border hover:bg-white/10 hover:-translate-y-1'
                  }`}
                  style={{
                    borderColor: isActive ? selectedAccent.primary : 'rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div className="aspect-[9/16] w-full bg-slate-950 rounded-lg overflow-hidden mb-3.5 relative">
                    <img 
                      src={s.imageUrl} 
                      alt={s.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    
                    {/* View full icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition duration-200">
                      <span className="text-[10px] text-white font-mono bg-slate-900/90 py-1 px-2 rounded-md border border-white/15 shadow">
                        Select Screen
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block">
                    {s.badge}
                  </span>
                  <span className="text-xs font-bold text-white block truncate mt-1">
                    {s.title}
                  </span>

                  {/* Small neon accent underline in active tabs */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 to-violet-500" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex justify-center">
            <a 
              href={activeScreenshot.imageUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white underline py-1 px-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 transition-all"
            >
              <ExternalLink className="w-3 h-3 text-teal-400" />
              <span>{t.viewOriginal} : {activeScreenshot.title}</span>
            </a>
          </div>

        </section>

        {/* 3Simple steps secure installations instructions guide */}
        <section className="mb-20 md:mb-32 relative">
          
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-violet-500/5 rounded-2xl filter blur-3xl pointer-events-none" />

          <div className="relative rounded-2xl glass-panel p-6 md:p-10 border border-white/10 shadow-2xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 pb-6 border-b border-white/5">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[10px] font-mono border border-emerald-500/20 uppercase tracking-widest font-semibold block w-fit">
                  Android APK Manual
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2">
                  {t.installStepsTitle}
                </h2>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-4 py-2 rounded-xl border border-white/5 w-fit">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Clean & Certified Release</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-400 font-mono font-bold text-sm mb-4 border border-teal-500/20 group-hover:scale-110 transition-transform">
                  01
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-none">
                  Save Installer
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {t.step1}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center text-violet-400 font-mono font-bold text-sm mb-4 border border-violet-500/20 group-hover:scale-110 transition-transform">
                  02
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-none">
                  Enable Sources
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {t.step2}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm mb-4 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  03
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-none">
                  Launch & Register
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {t.step3}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* FEATURES DETAIL SECTIONS */}
        <section className="mb-20 md:mb-32">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-400 text-xs font-mono tracking-widest uppercase font-semibold">
              GeoBiling Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-2">
              {t.featuresTitle}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-violet-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-xs md:text-sm mt-3.5 leading-relaxed font-sans">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div 
                key={idx}
                className="glass-card-glossy rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
              >
                {/* Micro corner accent glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-white/5 to-transparent pointer-events-none transform rotate-45" />

                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(f.iconName, f.color)}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-teal-300 transition duration-200 font-display">
                  {f.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {f.description}
                </p>

                {/* Simulated interactive link indicator inside features */}
                <div className="flex items-center gap-1 mt-4 text-[10px] uppercase tracking-wider text-teal-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore module</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* DEVELOPER PROFILE SECTION */}
        <section className="mb-20 md:mb-32">
          
          <div className="rounded-2xl glass-panel p-6 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Background spotlight gradient */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Picture column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                
                <div className="relative group">
                  {/* Glowing glossy ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 via-fuchsia-500 to-violet-600 opacity-75 blur group-hover:opacity-100 transition duration-500" />
                  
                  <img 
                    src={developerInfo.avatarUrl} 
                    alt={developerInfo.name} 
                    referrerPolicy="no-referrer"
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-900 bg-slate-800 pointer-events-none"
                  />
                  
                  {/* Micro coding verified badge */}
                  <div className="absolute bottom-2 right-2 w-7 h-7 bg-teal-500 text-[#070b14] rounded-full flex items-center justify-center border-2 border-slate-900 shadow">
                    <CheckCircle2 className="w-4 h-4 text-[#070b14] fill-teal-500" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-5">
                  {developerInfo.name}
                </h3>
                
                <span className="text-teal-400 text-xs font-mono tracking-wider mt-1.5 uppercase block">
                  {developerInfo.role}
                </span>

              </div>

              {/* Bio details columns */}
              <div className="lg:col-span-8 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    Developer Spotlight
                  </span>
                  <h4 className="text-xl font-display font-medium text-white">
                    {t.devTitle}
                  </h4>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {developerInfo.bio}
                  </p>
                </div>

                {/* Email actions copy */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 font-mono tracking-widest block leading-none">
                        Official Developer Mail
                      </span>
                      <span className="text-xs md:text-sm text-white font-mono font-medium block mt-1">
                        {developerInfo.email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 text-slate-900 hover:bg-teal-400 text-xs font-bold font-mono shadow transition cursor-pointer self-start sm:self-auto select-none"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? t.copiedLabel : t.copyMailBtn}</span>
                  </button>
                </div>

                {/* SOCIAL BUTTON COHORT */}
                <div className="space-y-3">
                  <span className="text-xs text-slate-400 font-mono block">
                    {t.socialContact} :
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    
                    <a 
                      href={developerInfo.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs transition duration-200"
                    >
                      <Github className="w-4 h-4 text-violet-400" />
                      <span>GitHub</span>
                    </a>

                    <a 
                      href={developerInfo.links.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs transition duration-200"
                    >
                      <Instagram className="w-4 h-4 text-rose-400" />
                      <span>Instagram</span>
                    </a>

                    <a 
                      href={developerInfo.links.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs transition duration-200"
                    >
                      <Facebook className="w-4 h-4 text-blue-400" />
                      <span>Facebook</span>
                    </a>

                    <a 
                      href={developerInfo.links.threads} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs transition duration-200"
                    >
                      <MessageCircle className="w-4 h-4 text-teal-400" />
                      <span>Threads</span>
                    </a>

                  </div>
                </div>

              </div>
              
            </div>

          </div>

        </section>

        {/* TECHNICAL DETAILS COMPARISON SECTION */}
        <section className="mb-10 text-center">
          <div className="max-w-2xl mx-auto glass-panel p-6 rounded-2xl border border-white/5">
            <h3 className="text-white font-display font-medium text-sm mb-4">
              {t.techSpecs}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-slate-950/60 p-3 rounded-lg border border-white/5">
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Architecture</span>
                <span className="block text-xs font-bold text-slate-300 mt-1 font-mono">MVP / Native Kotlin</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-white/5">
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Database Engine</span>
                <span className="block text-xs font-bold text-slate-300 mt-1 font-mono">SQLite Room Db</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-white/5">
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Compatibility</span>
                <span className="block text-xs font-bold text-slate-300 mt-1 font-mono">Android 8.0 & Up</span>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-lg border border-white/5">
                <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-wider">Invoicing standard</span>
                <span className="block text-xs font-bold text-slate-300 mt-1 font-mono">GST / VAT Enabled</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER - Simple & Elegant */}
      <footer className="w-full bg-[#04060b] border-t border-white/5 py-12 relative">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/RealShibSankarSarkar/GeoBiling/refs/heads/main/applogo.png" 
              alt="GeoBiling logo footer" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-lg border border-white/10 bg-slate-950"
            />
            <div>
              <span className="font-display font-bold text-base text-white tracking-tight">GeoBiling</span>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {t.geoBilingSlogan}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-slate-500">
              {t.craftedWithLove}
            </p>
            <p className="text-[10px] text-slate-600 font-mono">
              © {new Date().getFullYear()} Shib Sankar Sarkar. All rights reserved. GeoBiling is open-source.
            </p>
          </div>

        </div>

        {/* Back to top micro action */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-white cursor-pointer px-3 py-1 rounded-full border border-white/5 hover:bg-slate-900 transition"
          >
            <span>{t.backToTop} ↑</span>
          </button>
        </div>
      </footer>

    </div>
  );
}
