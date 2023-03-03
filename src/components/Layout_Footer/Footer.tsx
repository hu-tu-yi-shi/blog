import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { Row, Col, Menu, Grid, Tag } from 'antd'
import PackageJson from '../../../package.json'
interface IProps {}
const Footer = (props: IProps) => {
    return (
        <footer className={styles.container}>
            <div title={PackageJson.version}>基于 next.js</div>
            <div>Copyright © 2022 hutu 保留版权所有</div>
        </footer>
    )
}

export default Footer
