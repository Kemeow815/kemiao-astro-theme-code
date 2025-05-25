// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { AstroExpressiveCodeOptions } from 'astro-expressive-code';
import { pluginTextMarkers as esTextMarkersPlugin } from '@expressive-code/plugin-text-markers';

type Config = {
    title: string;
    description: string;
    lang: string;
    helloworld: string;
    profile: {
        author: string;
        description?: string;
    };
    pageSize: number;
};

type SocialLink = {
    icon: string;
    friendlyName: string; // for accessibility
    link: string;
};

export const siteConfig: Config = {
    title: 'twiify的博客',
    description: '我的博客空间，记录生活的惊喜。',
    lang: 'zh-CN',
    helloworld: `生活总是充满惊喜，记录是最好的礼物。<br/>希望你能在这里找到一些惊喜。`,
    profile: {
        author: 'twiify',
        description: '简单生活，优雅前行。',
    },
    pageSize: 10,
};

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
    {
        icon: 'mdi:github',
        friendlyName: 'Github',
        link: 'https://github.com/twiify/astro-theme-code',
    },
    {
        icon: 'mdi:email',
        friendlyName: 'email',
        link: 'mailto:ppixiu07@gmail.com',
    },
    {
        icon: 'mdi:rss',
        friendlyName: 'rss',
        link: '/rss.xml',
    },
];

// Type for navigation links
export interface NavLink {
    title: string;
    path: string;
}

export const NAV_LINKS: NavLink[] = [
    // Use the exported NavLink type
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Friends',
        path: '/friends',
    },
    {
        title: 'About',
        path: '/about',
    },
];

/**
 * expressive 代码高亮配置
 * See More : https://expressive-code.com/reference/configuration/
 */
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
    plugins: [esTextMarkersPlugin],
    styleOverrides: {
        borderRadius: '0rem',
        codeFontFamily: "JetBrainsMono, 'Noto Sans SC', monospace",
        codeFontWeight: '400',
        codeFontSize: '0.9rem',
        codeLineHeight: '1.5rem',
        borderColor: 'var(--theme-text)',
        codeBackground: 'var(--theme-bg)',
        frames: {
            editorTabBarBackground: 'transparent',
            editorTabBarBorderBottomColor: 'var(--theme-text)',
            editorActiveTabBackground: 'var(--theme-text)',
            editorActiveTabForeground: 'var(--theme-bg)',
            editorTabBarBorderColor: 'var(--theme-text)',
            editorActiveTabBorderColor: 'var(--theme-text)',
            editorActiveTabIndicatorHeight: '2px',
            editorActiveTabIndicatorTopColor: 'none',
            editorActiveTabIndicatorBottomColor: 'var(--theme-text)',
            terminalBackground: 'var(--theme-bg)',
            terminalTitlebarBackground: 'transparent',
            terminalTitlebarBorderBottomColor: 'var(--theme-text)',
            terminalTitlebarDotsForeground: 'var(--theme-text)',
            terminalTitlebarDotsOpacity: '0.5',
            frameBoxShadowCssValue: '0.15rem 0.18rem',
            shadowColor: 'var(--theme-text)',
        },
    },
    themeCssSelector(theme, { styleVariants }) {
        // If one dark and one light theme are available
        // generate theme CSS selectors compatible with cactus-theme dark mode switch
        if (styleVariants.length >= 2) {
            const baseTheme = styleVariants[0]?.theme;
            const altTheme = styleVariants.find(
                (v) => v.theme.type !== baseTheme?.type,
            )?.theme;
            if (theme === baseTheme || theme === altTheme)
                return `[data-theme='${theme.type}']`;
        }
        // return default selector
        return `[data-theme="${theme.name}"]`;
    },
    themes: ['github-dark', 'github-light'],
    emitExternalStylesheet: true,
};
