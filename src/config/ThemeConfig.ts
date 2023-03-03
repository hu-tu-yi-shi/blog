import { ThemeConfig } from 'antd/es/config-provider/context'
import { theme as antTheme } from 'antd'
const { defaultAlgorithm, darkAlgorithm } = antTheme

export const AntdThemeLight: ThemeConfig = {
    token: {
        colorPrimary: '#00b96b',
    },
    components: {
        Menu: {
            colorBgContainer: '#f12',
        },
    },
    algorithm: [defaultAlgorithm],
}

export const AntdThemeDark: ThemeConfig = {
    token: {
        colorPrimary: '#f54406',
    },
    algorithm: [darkAlgorithm],
}
