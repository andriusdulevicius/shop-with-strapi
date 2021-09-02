import css from './Blog.module.css';
import BlogItem from './BlogItem';

const blogs = [
  {
    id: 'b1',
    title: 'Want to travel? Great Stuffs for Travel',
    image: 'https://picsum.photos/id/1057/1000/800',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque eveniet dolorem, porro earum. Eius, corrupti provident iusto modi sunt.',
    link: '/blog/b1',
    text: "Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.",
  },
  {
    id: 'b2',
    title: 'Our Melbourne Store',
    image: 'https://picsum.photos/id/1061/1000/800',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque eveniet dolorem, porro earum. Eius, corrupti provident iusto modi sunt.',
    link: '/blog/b2',
    text: "Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.",
    address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
  },
];

export default function Blog() {
  return (
    <section className={`container ${css.blog}`}>
      {blogs.map((b) => (
        <BlogItem key={b.id} blog={b} />
      ))}
    </section>
  );
}

// sukiam sekcija Blog

// Sukuriam BlogItem pagal dizaina

// atvizduojam viska kaip brezinyje

// duomenys blog is sukurto masyvo
