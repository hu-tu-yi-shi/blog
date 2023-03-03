'use client'

import styles from './page.module.css'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { allPosts } from 'contentlayer/generated'
import { Button, Card, Tag } from 'antd'

import { Space, Typography, Grid } from 'antd'
import { useRecoilState } from 'recoil'
import { StateIsLight } from '@@/state/global'
const { useBreakpoint } = Grid

import { AiOutlineMail, BsGithub, BsRssFill } from 'react-icons/all'
export default function Home() {
    const [isLight, setIsLight] = useRecoilState(StateIsLight)
    const screens = useBreakpoint()

    const latestPosts = allPosts
        // todo 按照日期排序的
        // .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .slice(0, 3)

    return (
        <main className={styles.main}>
            <section style={{ textAlign: 'center' }}>
                <Typography.Title>糊涂的博客</Typography.Title>
                <Typography.Text>糊涂一时 还是 糊涂一世</Typography.Text>
                <p></p>
                <div
                    className={styles.icons}
                    style={isLight ? {} : { color: 'red' }}
                >
                    <BsGithub />
                    <AiOutlineMail />
                    <BsRssFill />
                </div>
            </section>

            {latestPosts
                .filter((item) => !item.hidden)
                .map((post) => (
                    <Card
                        className={styles.articleItem}
                        key={post.slug}
                        title={
                            <div>
                                <Typography.Title
                                    level={2}
                                    style={{ whiteSpace: 'break-spaces' }}
                                >
                                    <Link
                                        as={`/posts/${post.slug}`}
                                        href={`/posts/[slug]`}
                                    >
                                        {post.title}
                                    </Link>
                                </Typography.Title>

                                <Space>
                                    <Typography.Text type="secondary">
                                        {format(
                                            parseISO(post.datePublished),
                                            'yyyy-MM-dd'
                                        )}
                                    </Typography.Text>

                                    <span>
                                        {post?.tags?.map((tag) => {
                                            return <Tag key={tag}>#{tag}</Tag>
                                        })}
                                    </span>
                                </Space>
                            </div>
                        }

                        // extra={<a href="#">More</a>}
                    >
                        <Space direction={'vertical'} size={'large'}>
                            <p>{post.excerpt}</p>

                            <Link
                                as={`/posts/${post.slug}`}
                                href={`/posts/[slug]`}
                            >
                                <Button>阅读全文 </Button>
                            </Link>
                        </Space>
                    </Card>
                ))}
            {latestPosts.map((post) => (
                <Link target={'_blank'} key={post._id} href={post.url}>
                    {post.title}{' '}
                </Link>
            ))}
        </main>
    )
}
