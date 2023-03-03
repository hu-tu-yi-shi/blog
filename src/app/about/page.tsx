'use client'
import React from 'react'
import { Button, Descriptions } from 'antd'
import { Space } from 'antd'

const Index = () => {
    return (
        <div>
            <Space size={'large'} direction={'vertical'}>
                <Descriptions title="关于我" column={1}>
                    <Descriptions.Item label="昵称">糊涂</Descriptions.Item>
                    <Descriptions.Item label="微信">****</Descriptions.Item>
                    <Descriptions.Item label="技术栈">
                        JavaScript、TypeScript、CSS
                    </Descriptions.Item>

                    <Descriptions.Item label="框架">next.js</Descriptions.Item>
                    <Descriptions.Item label="感兴趣">
                        web3、区块链、electron
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions title="我的作品" column={1}>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                </Descriptions>
            </Space>
        </div>
    )
}

export default Index
