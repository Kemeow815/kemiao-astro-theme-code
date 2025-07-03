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
    title: '喵落阁',
    description: '每一段旅行，都有终点',
    lang: 'zh-CN',
    helloworld: `<p>奇迹只能一时，命运总是漫长。<br/>愿你看清一切真相后，依旧热爱你的家人和朋友。</p>`,
    profile: {
        author: '克喵爱吃卤面',
        description: '愿你看清一切真相后，依旧热爱你的家人和朋友。',
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
        link: 'https://github.com/Kemeow815',
    },
    {
        icon: 'mdi:email',
        friendlyName: 'email',
        link: 'mailto:me@kemiaosw.top',
    },
    {
        icon: 'mdi:telegram',
        friendlyName: 'telegram',
        link: 'https://t.me/KemiaoJun',
    },
    {
        icon: 'mdi:qqchat',
        friendlyName: 'qq',
        link: 'https://qm.qq.com/q/J9VDiX6KoS',
    },
    {
        icon: 'ri:bilibili-line',
        friendlyName: 'bilibili',
        link: 'https://space.bilibili.com/3546643173477234',
    },
    {
        icon: 'ri:netease-cloud-music-fill',
        friendlyName: 'netease',
        link: 'https://music.163.com/#/user/home?id=1725716511',
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
        title: '首页',
        path: '/',
    },
    {
        title: '文章',
        path: '/blog',
    },
    {
        title: '朋友',
        path: '/friends',
    },
    {
        title: '音乐',
        path: 'https://music.kemiao.online',
    },
    {
        title: '相册',
        path: 'https://photos.050815.xyz',
    },
    {
        title: '朋友圈',
        path: 'https://moment.050815.xyz',
    },
    {
        title: '关于',
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
