import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export type SelectedPhoto = { src: string; alt: string } | null;

export default function PhotoLightbox({ photo, onClose, onNavigate }: { photo: SelectedPhoto; onClose: () => void; onNavigate: (direction: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!photo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') { event.preventDefault(); onNavigate(-1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); onNavigate(1); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [photo, onClose, onNavigate]);

  if (!photo) return null;

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-8" onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="w-fit max-w-full rounded-2xl bg-white p-3 shadow-2xl sm:p-4">
        <div className="mb-3 flex justify-end">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close photo" className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-100 text-2xl leading-none text-peacock-900 hover:bg-sand-200 focus-visible:outline-2 focus-visible:outline-peacock-600">×</button>
        </div>
        <img src={photo.src} alt={photo.alt} className="mx-auto max-h-[65dvh] max-w-[78vw] object-contain sm:max-w-[min(78vw,900px)]" />
        <div className="mt-4 flex items-center justify-between gap-6">
          <button type="button" onClick={() => onNavigate(-1)} className="rounded-full border border-sand-200 px-4 py-2 text-sm font-semibold text-peacock-800 hover:bg-sand-100">← Previous</button>
          <button type="button" onClick={() => onNavigate(1)} className="rounded-full border border-sand-200 px-4 py-2 text-sm font-semibold text-peacock-800 hover:bg-sand-100">Next →</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
