export default function DhruviProfile() {
  return (
    <div className="space-y-6 text-base leading-8 text-ink-700">
      <h4 className="font-display text-2xl font-semibold text-peacock-800">Brief résumé</h4>
      <div>
        <h5 className="font-semibold text-peacock-800">Education & certifications</h5>
        <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-gold-600">
          <li>MSc in Yoga Therapy — Lakulesh University, Ahmedabad.</li>
          <li>Yoga Teacher Training Course (YTTC) — Lakulesh Yoga University.</li>
          <li>200-hour Yoga Alliance Teacher Training — Bodhi School of Yoga, Bangalore.</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-peacock-800">Teaching & therapy experience</h5>
        <ul className="mt-2 list-disc space-y-2 pl-5 marker:text-gold-600">
          <li>Personal Yoga Therapist, February 2023–present: personalised programmes for stress, anxiety, pain and lifestyle conditions.</li>
          <li>Yoga Instructor, Breath More Yoga Studio, June 2024–January 2025.</li>
          <li>Yoga Instructor, Dehit Yoga Studio, September 2022–February 2024.</li>
        </ul>
        <p className="mt-3">Her teaching combines asanas, pranayama and meditation, with guidance on posture, breathing and injury prevention.</p>
      </div>
      <a className="btn-outline" href="/gallery#dhruvi-patel">Explore Dhruvi’s yoga gallery <span aria-hidden="true">→</span></a>
    </div>
  );
}
