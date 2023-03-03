'use client'
import React from 'react'
import styles from './Main.module.scss'
import { top_nav_items } from '@@/config/top_menu'
import { Row, Col, Menu, Grid, Tag, Layout as Ant_Layout } from 'antd'
import { useRouter } from 'next/navigation'
// todo 图标用微软的那个，更全面
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
} from '@ant-design/icons'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useResetRecoilState,
    useRecoilValue,
} from 'recoil'
import { StateIsLight } from '@@/state/global'
import { Grid_Content, Grid_side } from '@@/config/layout_grid'
import Link from 'next/link'
import { IPropsChildren } from '@@/types/chidren.type'
import RecoilProvider from '@@/providers/recoil-provider'
import { StyleProviderLayout } from '@@/providers/antd-SSR-provider'
import AntdProvider from '@@/providers/antd-provider'
import Header from '@@/components/Layout_Header/Header'
import Footer from '@@/components/Layout_Footer/Footer'
const { useBreakpoint } = Grid

interface IProps extends IPropsChildren {}
function Main({ children }: IProps) {
    return (
        <div className={styles.container}>

            <RecoilProvider>
                <StyleProviderLayout>
                    <AntdProvider>
                        <Ant_Layout className={styles.container}>
                            {/*<Header />*/}
                            {/*<Ant_Layout.Header className={styles.header}>*/}
                            {/*  <Header />*/}
                            {/*</Ant_Layout.Header>*/}

                            <Header />

                            <Ant_Layout.Content>
                                <Row>
                                    <Col {...Grid_side}></Col>
                                    <Col {...Grid_Content}>
                                        <main style={{ marginTop: 50 }}>
                                            {children}
                                        </main>
                                    </Col>
                                    <Col {...Grid_side}></Col>
                                </Row>
                            </Ant_Layout.Content>

                            {/*<Footer />*/}
                            <Ant_Layout.Footer>
                                <Footer />
                            </Ant_Layout.Footer>
                        </Ant_Layout>
                    </AntdProvider>
                </StyleProviderLayout>
            </RecoilProvider>
        </div>
    )
}

export default Main
