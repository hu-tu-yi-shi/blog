'use client'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { IPropsChildren } from '@@/types/chidren.type'

function RecoilProvider(props: IPropsChildren) {
    return <RecoilRoot>{props.children}</RecoilRoot>
}

export default RecoilProvider
