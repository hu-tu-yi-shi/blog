import React from 'react'
import styles from './Header.module.scss'
import { top_nav_items } from '@@/config/top_menu'
import { Row, Col, Menu, Grid } from 'antd'
import { useRouter } from 'next/navigation'
import { DarkTheme24Regular } from '@fluentui/react-icons'

// todo 图标用微软的那个，更全面

import { useRecoilState } from 'recoil'
import { StateIsLight } from '@@/state/global'
import { Grid_Content, Grid_side } from '@@/config/layout_grid'
import Link from 'next/link'
const { useBreakpoint } = Grid

function Header() {
    const router = useRouter()
    const [isLight, setIsLight] = useRecoilState(StateIsLight)
    const screens = useBreakpoint()

    const changeTheme = () => {
        console.info('🚀 ~ file:Header method:changeTheme line:21 -----')
        setIsLight(!isLight)
    }
    return (
        <div
            className={styles.container}
            style={
                isLight
                    ? { color: 'rgba(0, 0, 0, 0.88)', background: '#ffffff' }
                    : {
                          color: 'rgba(255, 255, 255, 0.85)',
                          background: '#141414',
                      }
            }
        >
            <Row>
                <Col {...Grid_side}></Col>

                <Col {...Grid_Content}>
                    <Row className={styles.navsWrapper}>
                        <Col xs={0} sm={2} md={3} lg={6}>
                            <h3 className={styles.logo}>
                                <Link href={`/`}>糊涂的博客 </Link>
                            </h3>
                        </Col>
                        <Col xs={22} sm={20} md={16} lg={12}>
                            <Menu
                                // theme={"dark"}
                                mode={'horizontal'}
                                className={styles.navs}
                                items={top_nav_items}
                                onClick={(val) => {
                                    router.push(val.key)
                                }}
                            />
                        </Col>
                        <Col xs={2} sm={2} md={3} lg={6}>
                            {/*<Col   >*/}
                            <div
                                className={styles.right_buttons}
                                style={
                                    !screens.xs ? { textAlign: 'right' } : {}
                                }
                            >
                                <a onClick={changeTheme}>
                                    <DarkTheme24Regular
                                        style={
                                            isLight ? { color: 'black' } : {}
                                        }
                                    />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col {...Grid_side}></Col>
            </Row>
        </div>
    )
}

export default Header
