import readingTime from 'reading-time';

export default function readTime(p: Record<string, any>): any {
    return readingTime(p.rawContent());
}