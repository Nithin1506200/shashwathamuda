import { dhruviPhotos, nikhilPhotos } from '../data/gallery';

type AlbumProps = {
  id: string;
  title: string;
  description: string;
  folder: string;
  photos: { file: string; alt: string }[];
  person: string;
  landscape?: boolean;
};

function GalleryAlbum({ id, title, description, folder, photos, person, landscape = false }: AlbumProps) {
  return (
    <section id={id} aria-labelledby={`${id}-gallery-title`} className="scroll-mt-28">
      <div className="reveal flex flex-wrap items-baseline justify-between gap-3">
        <h2 id={`${id}-gallery-title`} className="font-display text-3xl font-semibold text-peacock-800">{title}</h2>
        <span className="text-xs uppercase tracking-wider text-ink-500">{photos.length} photos</span>
      </div>
      <p className="reveal mt-3 text-base leading-7 text-ink-700">{description}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => {
          const src = `/${folder}/${encodeURIComponent(photo.file)}`;
          return (
            <li key={photo.file} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <a href={src} className="group block overflow-hidden rounded-2xl border border-sand-200 bg-sand-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-600" aria-label={`${photo.alt}. View full-size photograph`}>
                <img src={src} alt={photo.alt} loading="lazy" decoding="async" width={landscape ? 800 : 600} height={landscape ? 600 : 800} className={`${landscape ? 'aspect-[4/3]' : 'aspect-[3/4]'} w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.03]`} />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-ink-500">Select a photograph to view it in full size.</p>
      <a href={`/team#${id}`} className="btn-outline mt-4">Meet {person} <span aria-hidden="true">→</span></a>
    </section>
  );
}

export default function Gallery() {
  return (
    <div className="not-prose space-y-14" id="yoga">
      <nav aria-label="Gallery albums" className="flex flex-wrap gap-3">
        <a href="#nikhil-srinivas" className="btn-outline">Nikhil’s gallery</a>
        <a href="#dhruvi-patel" className="btn-outline">Dhruvi’s gallery</a>
      </nav>
      <GalleryAlbum
        id="nikhil-srinivas"
        title="Yoga & community with Nikhil Srinivas"
        description="Moments from yoga gatherings, school sessions, community programmes, research presentations and youth exchanges."
        folder="nikhil"
        photos={nikhilPhotos}
        person="Nikhil"
        landscape
      />
      <GalleryAlbum
        id="dhruvi-patel"
        title="Yoga with Dhruvi Patel"
        description="Moments from Dhruvi’s personal yoga practice, exploring balance, strength and flexibility."
        folder="dhruvi"
        photos={dhruviPhotos}
        person="Dhruvi"
      />
    </div>
  );
}
