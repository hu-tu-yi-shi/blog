import { blogConfig } from '@@/config/blogConfig'
import { Metadata } from 'next/types'

import Main from '@@/components/Layout_Main/Main'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-cn">
            <head />
            <body>
                <Main>{children}</Main>
            </body>
        </html>
    )
}

// https://beta.nextjs.org/docs/api-reference/metadata#icons
// todo 完善 metadata
export const metadata: Metadata = {
    title: {
        default: blogConfig.title,
        template: `%s - ${blogConfig.title}`,
    },
    openGraph: {
        title: {
            default: blogConfig.title,
            template: `%s - ${blogConfig.title}`,
        },
    },
    twitter: {
        title: {
            default: blogConfig.title,
            template: `%s - ${blogConfig.title}`,
        },
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: 'favicon.ico' },
            // new URL('/favicon.ico', 'https://example.com'),
        ],
        // shortcut: ['/shortcut-icon.png'],
        apple: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/apple-touch-icon-precomposed.png',
            },
        ],
    },
    // icons2: [
    //     {
    //         rel: 'apple-touch-icon',
    //         sizes: '180x180',
    //         url: '/apple-touch-icon.png',
    //     },
    //     { rel: 'icon', url: 'favicon.png' },
    //
    //     {
    //         rel: 'icon',
    //         type: 'image/png',
    //         sizes: '32x32',
    //         url: '/favicon-32x32.png',
    //     },
    //     {
    //         rel: 'icon',
    //         type: 'image/png',
    //         sizes: '16x16',
    //         url: '/favicon-16x16.png',
    //     },
    // ],
}
