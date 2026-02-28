import devforces from "../assets/924shots_so.png"
import lovable from "../assets/456shots_so.png"
import codeforces from "../assets/670shots_so.png"
import gamble from "../assets/532shots_so.png"

type Project = {
  title: string;
  description: string;
  status: 'Live' | 'Building';
  image: string;
  accent: string;
  href: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Devforces',
    description: 'A developer community platform to level up your dev game — share projects, compete, and grow together.',
    status: 'Live',
    image: devforces,
    accent: '#1a1a2e',
    href: 'https://github.com/Nagmani001/devforces',
    liveUrl: 'https://devforces.vercel.app',
  },
  {
    title: 'Lovable',
    description: 'An AI-powered website builder that lets you build beautiful websites with a single prompt.',
    status: 'Building',
    image: lovable,
    accent: '#0d1117',
    href: 'https://github.com/Nagmani001/lovable',
  },
  {
    title: 'Codeforces',
    description: 'A competitive programming companion — track contests, solve problems, and monitor your Codeforces progress.',
    status: 'Live',
    image: codeforces,
    accent: '#0f2027',
    href: 'https://github.com/Nagmani001/codeforces',
    liveUrl: 'https://codeforces.vercel.app',
  },
  {
    title: '100xGamble',
    description: 'A Solana-based roulette gambling dApp — place bets, spin the wheel, and win SOL on-chain.',
    status: 'Building',
    image: gamble,
    accent: '#1a0a00',
    href: 'https://github.com/Nagmani001/100xGamble',
  },
];

export default function Projects() {
  return (
    <section className="px-5">
      {/* Center-divider wrapper: the pseudo ::after trick isn't available in Tailwind,
          so we use a relative container with an inset absolute line */}
      <div className="relative">
        {/* Vertical center divider — only when 2-col grid is active */}
        <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-black/15 dark:bg-white/10 pointer-events-none" />
        {/* Horizontal row divider — only when 2-col grid is active */}
        <div className="hidden sm:block absolute left-0 right-0 top-1/2 h-px bg-black/15 dark:bg-white/10 pointer-events-none" />

        {/* 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  ">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col pt-2 border-black/15 dark:border-white/10 overflow-hidden transition-colors duration-200 cursor-pointer"
            >
              {/* Full-card clickable overlay */}
              <a
                href={p.liveUrl || p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Open ${p.title}`}
              />
              {/* ── Image block ── */}
              <div
                className="relative overflow-hidden aspect-video border-b border-black/15 dark:border-white/10 bg-gray-100 dark:bg-[#111]"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full rounded-xl border-2 border-black/50 dark:border-white/20  h-full object-cover block  transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-[1.1] group-hover:brightness-110 group-hover:border-black/50 dark:group-hover:border-white/20"
                />
                {/* Bottom fade into accent colour */}

              </div>

              {/* ── Content block ── */}
              <div className="flex flex-col gap-1.5 flex-1 px-5 pt-4 pb-1">
                {/* Title + status row */}
                <div>
                  <h2 className="text-[1.05rem] font-medium text-gray-950 dark:text-gray-50 m-0">
                    {p.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400 m-0">
                  {p.description}
                </p>

                {/* CTA row */}
                <div className="relative z-20 mt-1.5 flex items-center gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.82rem] text-gray-500 dark:text-gray-400 no-underline tracking-wide transition-colors duration-150 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
                    GitHub
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.82rem] text-gray-500 dark:text-gray-400 no-underline tracking-wide transition-colors duration-150 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm7.25-.182a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.121l-5.47 5.47a.75.75 0 1 1-1.06-1.061l5.47-5.47H12.25a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
