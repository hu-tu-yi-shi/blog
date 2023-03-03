import {
    defineDocumentType,
    makeSource,
    type ComputedFields,
} from 'contentlayer/source-files'
import { s } from 'hastscript'
import rehypeAutolinkHeadings, {
    type Options as AutolinkOptions,
} from 'rehype-autolink-headings'
import rehypePrettyCode, {
    type Options as PrettyCodeOptions,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { remarkCodeHike } from '@code-hike/mdx'

import theme from 'shiki/themes/github-dark.json' assert { type: 'json' } // any theme from shiki

// import { blogConfig } from "@@/config/blogConfig";

const computedFields: ComputedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        datePublished: {
            type: 'date',
            description: 'The datePublished of the post',
            required: true,
        },
        dateModified: {
            type: 'date',
            description: 'The dateModified of the post',
            required: true,
        },
        excerpt: {
            type: 'string',
            description: 'Short summary of the post',
            required: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            description: 'Tags for the post',
            required: true,
        },
        hidden: {
            type: 'boolean',
            description: 'hidden the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
        },
        ...computedFields,
    },
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [
            remarkGfm,
            [remarkCodeHike, { theme, lineNumbers: false }],
        ],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'append',
                    test: ['h1', 'h2', 'h3'],
                    content: s(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 24 24',
                            width: '24',
                            height: '24',
                            fill: 'none',
                            stroke: 'currentColor',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'aria-label': 'Anchor link',
                        },
                        [
                            s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
                            s('line', {
                                x1: '4',
                                y1: '15',
                                x2: '20',
                                y2: '15',
                            }),
                            s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
                            s('line', {
                                x1: '16',
                                y1: '3',
                                x2: '14',
                                y2: '21',
                            }),
                        ]
                    ),
                } satisfies Partial<AutolinkOptions>,
            ],
            // [
            //     rehypePrettyCode,
            //     {
            //         theme: {
            //             // light: blogConfig.theme?.codeBlockTheme?.light || "github-light",
            //             // dark: blogConfig.theme?.codeBlockTheme?.dark || "github-dark",
            //             light: 'github-light',
            //             dark: 'github-dark',
            //         },
            //         onVisitLine(node) {
            //             // Prevent lines from collapsing in `display: grid` mode, and
            //             // allow empty lines to be copy/pasted
            //             if (node.children.length === 0) {
            //                 node.children = [{ type: 'text', value: ' ' }]
            //             }
            //         },
            //         onVisitHighlightedLine(node) {
            //             node.properties.className.push('highlighted')
            //         },
            //         onVisitHighlightedWord(node) {
            //             node.properties.className = ['word']
            //         },
            //         tokensMap: {
            //             fn: 'entity.name',
            //             type: 'entity.name',
            //             prop: 'entity.name',
            //             const: 'variable.other.constant',
            //         },
            //     } satisfies Partial<PrettyCodeOptions>,
            // ],
        ],
    },
})
