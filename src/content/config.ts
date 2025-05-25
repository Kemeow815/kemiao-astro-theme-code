import { defineCollection } from 'astro:content';
import { PocketBaseLoader, postSchema } from '~/lib/loader/PocketBaseLoader';

// 博客集合
const blog = defineCollection({
    type: 'content_layer',
    loader: PocketBaseLoader({
        url: import.meta.env.POCKETBASE_URL,
        user: import.meta.env.POCKETBASE_USER,
        pwd: import.meta.env.POCKETBASE_PWD,
    }),
    schema: postSchema,
});

export const collections = { blog };
