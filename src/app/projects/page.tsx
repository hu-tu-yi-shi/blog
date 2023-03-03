'use client'
import React from 'react'
import { Button, Descriptions } from 'antd'
import { Space } from 'antd'

const Index = () => {
    return (
        <div>
            <Space size={'large'} direction={'vertical'}>
                <Descriptions title="我的作品" column={1}>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                    <Descriptions.Item label="111111">11111</Descriptions.Item>
                </Descriptions>
                需要完善，给项目添加足够的说明，如技术栈、思路 等等
            </Space>
        </div>
    )
}

export default Index
