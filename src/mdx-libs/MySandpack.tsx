import {
    SandpackProvider,
    ClasserProvider,
    SandpackPreview,
    useActiveCode,
    SandpackLayout,
    SandpackStack,
    FileTabs,
    useSandpack,
    SandpackThemeProvider,
    SandpackCodeEditor,
} from '@codesandbox/sandpack-react'
import React from 'react'
// import { MonacoEditor } from '@@/comps/MonacoEditor/MonacoEditor'
// import { useRecoilValue } from 'recoil'
// import { StateIsLight } from '@@/state/global'
import { SandpackInternalProvider } from '@codesandbox/sandpack-react/dist/types/types'
// import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { CodeEditorProps } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor'

// export default function MySandpack() {
//   return (
//     <SandpackProvider template="react">
//       <SandpackLayout theme="dark">
//         <MonacoEditor />
//         <SandpackPreview   />
//       </SandpackLayout>
//     </SandpackProvider>
//   );
// }
interface IProps {
    options: CodeEditorProps
}

type IType = SandpackInternalProvider & IProps

const MySandpack = (props: IType) => {
    // const isLight = useRecoilValue(StateIsLight)
    // console.info(
    //   "🚀 ~ file:MySandpack method:CustomSandpack line:33 -----",
    //   props
    // );
    return (
        <SandpackProvider
            {...props}
            style={{ minWidth: '100%' }}
            template={'react-ts'}
        >
            {/*<SandpackThemeProvider theme={isLight ? 'light' : 'dark'}>*/}
            <SandpackThemeProvider>
                <SandpackLayout
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <SandpackPreview style={{ height: 'auto' }} />
                    {/*<MonacoEditor />*/}
                    <SandpackCodeEditor {...props?.options} />
                </SandpackLayout>
            </SandpackThemeProvider>
        </SandpackProvider>
    )
}
export default MySandpack

