import Image from 'next/image'
import Link from 'next/link'
import { CodeBlock } from '@@/mdx-libs/code-block'
import { Callout } from '@@/mdx-libs/callout'
import MySandpack from '@@/mdx-libs/MySandpack'
// import { Sandpack } from '@codesandbox/sandpack-react'

// import { Callout } from "@/components/callout";
//
// import { TableOfContents } from "@/components/table-of-contents";
// import { cn } from "@/lib/utils";

/**
 * Use <Link> for internal links and <a> for external links and anchors
 * and open external links in a new tab
 */
function a({ href, children }: React.HTMLProps<HTMLAnchorElement>) {
    if (href && href.startsWith('/')) {
        return <Link href={href}>{children}</Link>
    }

    if (href && href.startsWith('#')) {
        return <a href={href}>{children}</a>
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

/**
 * Use div instead of p elements since p elements have restrictions on what
 * elements can be nested inside them
 */
function p(props: React.HTMLProps<HTMLParagraphElement>) {
    // return <div className={cn("my-4", props.className)} {...props} />;
    return <div {...props} />
}

/**
 * Image component that uses next/image, with optional caption and width/height
 * Example usage: \!\[alt text {{ w: 600, h: 300, cap: "caption text" }}](/path/to/image)
 */
function img({ src, alt }: React.HTMLProps<HTMLImageElement>) {
    const _alt = (alt?.split('{')[0].trim() ?? alt) || ''
    const props = alt?.split('{')[1]
    const width = parseInt(props?.match(/w:\s*(\d+)/)?.[1] ?? '700')
    const height = parseInt(props?.match(/h:\s*(\d+)/)?.[1] ?? '400')
    const caption = props?.match(/cap:\s*"(.*?)"/)?.[1]

    return (
        <figure
            className="mx-auto mt-3 mb-6 flex h-fit w-fit flex-col rounded bg-slate-300/20 dark:bg-rose-50/25"
            aria-label={_alt}
        >
            <Image src={src || ''} alt={_alt} width={width} height={height} />
            {caption && (
                <figcaption
                    style={{
                        maxWidth: width,
                    }}
                >
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}

/**
 * Code block component with copy button
 */
function pre({ children }: React.HTMLProps<HTMLPreElement>) {
    return <CodeBlock>{children}</CodeBlock>
}

// export const MDXComponents = { a, p, img, pre, TableOfContents, Callout };
export const MDXComponents = { a, p, img, pre, Callout, Sandpack: MySandpack }
