import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { localBlogSchema } from '~/lib/loader/LocalBlogLoader.ts';

// 博客集合
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './content/blog' }),
    schema: localBlogSchema,
});

export const collections = { blog };
