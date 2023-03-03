'use client'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { useServerInsertedHTML } from 'next/navigation'

export function StyleProviderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const [cache] = useState(() => createCache());
    // SSR Render
    const cache = createCache()

    // // Grab style from cache
    // const styleText = extractStyle(cache);

    const render = <>{children}</>

    useServerInsertedHTML(() => {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `</script>${extractStyle(cache)}<script>`,
                }}
            />
        )
    })

    if (typeof window !== 'undefined') {
        return render
    }

    return <StyleProvider cache={cache}>{render}</StyleProvider>
}
