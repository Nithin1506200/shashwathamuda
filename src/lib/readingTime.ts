export function readingTime(source: string | undefined): string {
  const body = (source ?? '').replace(/^---[\s\S]*?---/, '').replace(/^import .*$/gm, '');
  const words = body.replace(/<[^>]+>|[#*_`>\-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
