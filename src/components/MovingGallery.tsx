import { useEffect, useRef, useState } from 'react';
import { allGalleryPhotos, dhruviPhotos, nikhilPhotos } from '../data/gallery';
import PhotoLightbox, { type SelectedPhoto } from './PhotoLightbox';

const albums = [
  { person: 'Nikhil', id: 'nikhil-srinivas', folder: 'nikhil', label: 'Yoga, learning & community', photos: nikhilPhotos },
  { person: 'Dhruvi', id: 'dhruvi-patel', folder: 'dhruvi', label: 'Balance, strength & stillness', photos: dhruviPhotos },
];

type Album = typeof albums[number];

function PhotoRow({ album, onSelect }: { album: Album; onSelect: (photo: SelectedPhoto) => void }) {
  const row = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const advance = (direction: number) => {
    const element = row.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>('.gallery-frame');
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    const end = element.scrollWidth - element.clientWidth;
    const atEnd = element.scrollLeft >= end - 2;
    const atStart = element.scrollLeft <= 2;
    const target = direction > 0 && atEnd ? 0 : direction < 0 && atStart ? end : element.scrollLeft + direction * step;
    element.scrollTo({ left: target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    const timer = window.setInterval(() => {
      if (!visible || document.hidden || element.matches(':hover, :focus-within') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      advance(1);
    }, 4500);
    return () => { observer.disconnect(); window.clearInterval(timer); };
  }, []);

  return (
    <div ref={container}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <a href={`/gallery#${album.id}`} className="font-display text-2xl font-semibold text-peacock-800 hover:text-peacock-600">{album.person} <span aria-hidden="true" className="text-base">↗</span></a>
          <p className="mt-1 text-xs font-medium tracking-wide text-ink-500">{album.label} · {album.photos.length} photos</p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="gallery-arrow" aria-label={`Previous photos in ${album.person}’s gallery`} aria-controls={`moving-${album.id}`} onClick={() => advance(-1)}><span aria-hidden="true">←</span> Previous</button>
          <button type="button" className="gallery-arrow" aria-label={`Next photos in ${album.person}’s gallery`} aria-controls={`moving-${album.id}`} onClick={() => advance(1)}>Next <span aria-hidden="true">→</span></button>
        </div>
      </div>
      <div ref={row} id={`moving-${album.id}`} className="gallery-window" role="region" aria-label={`${album.person}’s photo gallery`} tabIndex={0}>
        <ul className="gallery-sequence">
          {album.photos.map((photo, index) => (
            <li key={photo.file} className="gallery-frame">
              <button type="button" onClick={() => onSelect({ src: `/${album.folder}/${encodeURIComponent(photo.file)}`, alt: photo.alt })} className="gallery-photo" aria-label={`${photo.alt}. View full-size photograph`}>
                <img src={`/gallery-preview/${album.folder}-${index + 1}.webp`} alt={photo.alt} width={640} height={480} loading="lazy" decoding="async" />
                <span className="gallery-caption" aria-hidden="true">{album.person}<span>View photo ↗</span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MovingGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto>(null);
  const navigate = (direction: number) => {
    const index = allGalleryPhotos.findIndex((photo) => photo.src === selectedPhoto?.src);
    setSelectedPhoto(allGalleryPhotos[(index + direction + allGalleryPhotos.length) % allGalleryPhotos.length]);
  };
  return (
    <div className="moving-gallery">
      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} onNavigate={navigate} />
      <div className="space-y-10">
        {albums.map((album) => <PhotoRow key={album.id} album={album} onSelect={setSelectedPhoto} />)}
      </div>
      <div className="mt-8 text-center">
        <a href="/gallery" className="btn-outline">Explore the gallery <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}
