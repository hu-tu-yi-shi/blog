'use client'
import { ConfigProvider } from 'antd'
import React from 'react'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    return <ConfigProvider>{children}</ConfigProvider>
}

export default AntdProvider
