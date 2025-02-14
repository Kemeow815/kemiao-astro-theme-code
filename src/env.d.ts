/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    // Directus
    readonly DIRECUS_URL: string;
    readonly DIRECTUS_TOKEN: string;

    // PocketBase
    readonly POCKETBASE_URL: string;
    readonly POCKETBASE_USER: string;
    readonly POCKETBASE_PWD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
