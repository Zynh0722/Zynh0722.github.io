import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export default function readTimePlugin() {
    return (tree, { data }) => {
        data.astro.frontmatter.readTime = readingTime(toString(tree));
    }
}