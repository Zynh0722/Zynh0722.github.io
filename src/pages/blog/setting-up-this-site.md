---
layout: ../../layouts/BlogPost.astro
title:  "Setting up this blog! [Outdated]"
pubDate:   Feb 28, 2022
updatedDate: Aug 23, 2022
categories: [blog, jekyll]
author: Zynh Ludwig
---

## Astro redesign

This page was initially made with github pages' jekyll integration.\
\
Overall however I wasn't super happy with this, hopefully I'll have an updated 
version for this site later!

## The Sauce

Setting up this site was done following the guidance of [David](https://dfederm.com/about/)
on [this](https://dfederm.com/creating-a-blog-using-github-pages/) page of his blog.

This site is based around [Jekyll](https://jekyllrb.com/), which is a really
neat static site generator based on ruby, that allows for markdown parsing,
and is generally designed for blogs.

This site's theme is based on the [minima](https://github.com/jekyll/minima)
theme, although *based on* is a bit of a stretch, as at the time of writing this
it is entirely unedited.

## Stuff I need to know to maintain this site

Im hosting this on github pages, although this page can be generated on a local
machine by running `bundle exec jekyll serve --drafts` assuming you have ruby
installed. The `--drafts` option means anything inside the `_drafts` folder
will also be included in posts.

New posts go in the `_posts` folder with the format `YEAR-MONTH-DAY-title.md`

{% highlight javascript %}
console.log('Just an example of how to use code block highlighting');
{% endhighlight %}


## Final Notes

If all goes well this site will be hosted on [zynh.me](https://zynh.me/)

Next blog post will be about optimizing the workflow of adding posts, so that I'm not
having to manually name, and format these markdown documents, as well as automatically
interacting with the git repo.

### Resources

[Jekyll main site](https://jekyllrb.com/)\\
[Jekyll docs](https://jekyllrb.com/docs/)\\
[Base Jekyll theme I am using](https://github.com/jekyll/minima)\\
[David's post about using jekyll and GH pages to host a blog](https://dfederm.com/creating-a-blog-using-github-pages/)
