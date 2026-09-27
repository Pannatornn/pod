import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { regionalContests } from '../data/experience';

export default function RegionalContests() {
  return (
    <section aria-labelledby="regional-contests-title" className="space-y-6">
      <header className="border-b border-neonCyan/20 pb-4">
        <h2 id="regional-contests-title" className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan">
          REGIONAL CONTESTS
        </h2>
        <p className="font-chakra text-sm text-hotPink mt-1">กิจกรรมการแข่งขันระดับภูมิภาค</p>
      </header>

      {regionalContests.map((contest) => {
        const AwardIcon = contest.champion ? Trophy : Award;

        return (
          <article key={contest.id} aria-labelledby={`${contest.id}-title`} className="rounded-xl border border-neonCyan/30 bg-[#0a0518]/80 p-4 md:p-5 space-y-4">
            <header className="flex flex-wrap items-center justify-between gap-3">
              <h3 id={`${contest.id}-title`} className="rounded-full border border-hotPink/50 bg-hotPink/15 px-3 py-1.5 font-chakra text-base font-bold text-white">
                {contest.title}
              </h3>
              <time dateTime={contest.dateISO} className="font-chakra text-sm text-neonCyan">{contest.date}</time>
            </header>

            <div className={`grid grid-cols-1 gap-3 ${contest.images.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
              {contest.images.map((image) => (
                <figure key={image.file} className="min-w-0">
                  <a
                    href={`${import.meta.env.BASE_URL}images/experiences/${image.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`เปิดภาพขนาดเต็ม: ${image.caption}`}
                    className="block aspect-[10/7] overflow-hidden rounded-lg border border-neonCyan/30 bg-[#050510] transition-colors hover:border-hotPink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neonCyan"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/experiences/${image.file}`}
                      alt={image.caption}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </a>
                  <figcaption className="mt-2 text-center font-chakra text-xs leading-relaxed text-gray-400">{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-yellow-400/25 bg-yellow-400/5 p-4 font-chakra md:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-400" aria-hidden="true">
                <AwardIcon className="h-6 w-6" />
              </div>
              <div className="min-w-0 space-y-1">
                <p className="font-bold text-yellow-300">{contest.award}</p>
                <p className="text-sm leading-relaxed text-gray-200">{contest.description}</p>
                <p className="text-xs leading-relaxed text-gray-400">{contest.organization}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
