'use client'
import { ConfigProvider } from 'antd'
import React from 'react'
import { AntdThemeDark, AntdThemeLight } from '@@/config/ThemeConfig'
import { useRecoilValue } from 'recoil'
import { StateIsLight } from '@@/state/global'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    const isLight = useRecoilValue(StateIsLight)

    return (
        <ConfigProvider theme={isLight ? AntdThemeLight : AntdThemeDark}>
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider
