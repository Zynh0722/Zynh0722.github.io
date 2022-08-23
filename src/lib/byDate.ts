export default function byDate(a: Record<string, any>, b: Record<string, any>) {
    return new Date(String(b.frontmatter.pubDate)).valueOf() - 
           new Date(String(a.frontmatter.pubDate)).valueOf();
}