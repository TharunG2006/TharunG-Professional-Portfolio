"use client";

import { Shield, Flag, Crosshair, Award, GitBranch, ExternalLink, Trophy } from "lucide-react";
import { ClayCard } from "@/components/ui/ClayCard";
import { ScrollSection } from "@/components/ui/ScrollSection";

export const CTFSecurity = () => {
  const attackVectors = [
    {
      name: "Web Exploitation",
      description: "Advanced client and server-side flaw identification, business logic bypassing, and secure code audits.",
      tag: "OWASP Top 10",
      color: "bg-[#ffb5a7]/20 text-[#e07a5f] dark:text-[#ffb5a7]",
    },
    {
      name: "SSRF Chaining",
      description: "Internal network pivot reconnaissance, metadata exfiltration, and cloud credential extraction via blind & chained SSRF.",
      tag: "Network Pivot",
      color: "bg-[#a3cfcd]/20 text-[#3d8b88] dark:text-[#a3cfcd]",
    },
    {
      name: "JWT & Prototype Pollution",
      description: "Alg:None attacks, JWKS spoofing, signature stripping, and JavaScript prototype pollution causing remote code execution.",
      tag: "AppSec / V8",
      color: "bg-[#fcd5ce]/30 text-[#d48b7d] dark:text-[#fcd5ce]",
    },
    {
      name: "Active Directory (AD) Attacks",
      description: "Kerberoasting, AS-REP roasting, DCSync simulation, domain privilege escalation, and lateral movement analysis.",
      tag: "Enterprise InfSec",
      color: "bg-[#e0fbfc]/40 text-[#2b7a78] dark:text-[#a3cfcd]",
    },
  ];

  const ctfEvents = [
    {
      name: "GenCyS 2.0 CTF by UST",
      category: "Capture the Flag Challenge Finals // UST Campus, Trivandrum",
      year: "Sept 2026",
      highlight: "Won the Prelims Round to qualify for the on-site National Finals at UST Campus, Trivandrum; secured 39th Place in the Finals.",
      badge: "Prelims Winner • 39th in Finals",
      isWinner: true,
    },
    {
      name: "CloudSEK CTFx",
      category: "Threat Intelligence & Cloud Security",
      year: "2026",
      highlight: "OSINT, cloud misconfigurations, and threat actor trace forensics.",
      badge: "Participant",
      isWinner: false,
    },
    {
      name: "MythX National CTF",
      category: "National-Level Cybersecurity Challenge",
      year: "2026",
      highlight: "National-level competition organized by KIET Group of Institutions.",
      badge: "National Finalist",
      isWinner: false,
    },
  ];

  return (
    <section
      id="ctf"
      aria-label="CTF and Cybersecurity Practice"
      className="relative w-full py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <ScrollSection>
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/80 dark:border-slate-700 shadow-sm text-xs font-bold text-[#ffb5a7] dark:text-[#ffb5a7] uppercase tracking-widest mb-4">
            <Shield size={14} />
            <span>Offensive Security &amp; CTF</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-800 dark:text-white drop-shadow-sm mb-4">
            CTF &amp; Security Research
          </h2>
          <p className="text-slate-600 dark:text-slate-300 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Practical offensive security assessments, vulnerability research, and competitive CTF participation under handle{" "}
            <span className="font-bold text-[#ffb5a7] dark:text-[#ffb5a7]">ragefrost</span>.
          </p>

          {/* Player Badge */}
          <a
            href="https://tryhackme.com/p/Ragefrost"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-white dark:border-slate-700 shadow-sm hover:scale-105 active:scale-95 transition-all group"
            aria-label="View TryHackMe Profile Ragefrost"
          >
            <div className="w-8 h-8 rounded-full bg-[#ffb5a7]/30 flex items-center justify-center text-[#ffb5a7] group-hover:bg-[#ffb5a7] group-hover:text-white transition-colors">
              <Crosshair size={16} />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">TryHackMe Handle</div>
              <div className="text-sm font-heading font-extrabold text-slate-800 dark:text-white flex items-center gap-1.5">
                Ragefrost
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              </div>
            </div>
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Attack Vectors & Authored Challenge (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-slate-400 flex items-center gap-2 font-heading">
              <Shield size={16} className="text-[#a3cfcd]" />
              Core Research Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {attackVectors.map((v) => (
                <ClayCard key={v.name} className="p-5 flex flex-col justify-between" hoverScale>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold font-heading text-slate-800 dark:text-white">
                        {v.name}
                      </h4>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${v.color}`}>
                        {v.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </ClayCard>
              ))}
            </div>

            {/* Authored Challenge Highlight */}
            <ClayCard className="p-6 md:p-8 bg-gradient-to-r from-white/90 via-white/70 to-[#ffb5a7]/10 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-[#ffb5a7]/10 border-2 border-white/80 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffb5a7]/30 flex items-center justify-center text-[#ffb5a7] shrink-0 shadow-inner">
                  <GitBranch size={22} />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ffb5a7]">
                      Challenge Author
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      crimsonCTF
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-800 dark:text-white">
                    Authored &quot;Merge Conflict&quot; Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    Crafted a specialized forensic and source code exploitation challenge for <strong>crimsonCTF</strong> focusing on low-level Git object manipulation, hidden commit tree traversal, commit tampering, and conflict marker payloads.
                  </p>
                </div>
              </div>
            </ClayCard>
          </div>

          {/* Right: Competitions & Practice Benchmark (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-slate-400 flex items-center gap-2 font-heading">
              <Award size={16} className="text-[#ffb5a7]" />
              Competitions &amp; Labs
            </h3>

            <div className="space-y-3">
              {ctfEvents.map((evt) => (
                <ClayCard
                  key={evt.name}
                  className={`p-4 flex flex-col gap-1.5 ${
                    evt.isWinner
                      ? "border-2 border-[#ffb5a7]/80 dark:border-[#ffb5a7]/50 bg-gradient-to-r from-white/95 via-white/80 to-[#ffb5a7]/15 dark:from-slate-900/95 dark:via-slate-900/80 dark:to-[#ffb5a7]/15 shadow-md"
                      : ""
                  }`}
                  hoverScale
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-heading text-slate-800 dark:text-white flex items-center gap-2">
                      {evt.isWinner && <Trophy size={16} className="text-amber-500 shrink-0" />}
                      <span>{evt.name}</span>
                    </span>
                    <span className="text-xs font-bold text-[#a3cfcd]">{evt.year}</span>
                  </div>
                  {evt.isWinner && (
                    <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      <Trophy size={11} />
                      <span>{evt.badge}</span>
                    </div>
                  )}
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {evt.category}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mt-0.5 leading-relaxed">
                    {evt.highlight}
                  </p>
                </ClayCard>
              ))}
            </div>

            {/* TryHackMe Lab Card */}
            <ClayCard className="p-6 bg-gradient-to-br from-white/90 to-[#a3cfcd]/10 dark:from-slate-900/90 dark:to-[#a3cfcd]/10 border-2 border-white/80 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#a3cfcd] uppercase tracking-wider flex items-center gap-1.5 font-heading">
                  <Flag size={14} /> TryHackMe Practice Lab
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#a3cfcd]/20 text-[#2b7a78] dark:text-[#a3cfcd]">
                  Active Labs
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-1">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Handle</div>
                  <div className="text-sm font-bold text-[#ffb5a7]">ragefrost</div>
                </div>
                <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-white dark:border-slate-700 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Focus</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-200">AD &amp; Linux PrivEsc</div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Continuous hands-on penetration testing across Linux privilege escalation, Active Directory attack paths, and network pivoting.
              </p>

              <a
                href="https://tryhackme.com/p/Ragefrost"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2b7a78] dark:text-[#a3cfcd] hover:underline pt-1"
                aria-label="View TryHackMe Profile"
              >
                <span>View TryHackMe Profile</span>
                <ExternalLink size={12} />
              </a>
            </ClayCard>

          </div>

        </div>
      </ScrollSection>
    </section>
  );
};
