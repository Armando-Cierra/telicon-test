import { createRoot } from 'react-dom/client'
import App from './App'
import '@2600hz/sds-core/sds-reset.scss'
import '@2600hz/sds-themes/sds-themes.scss'
import './index.scss'

const container = document.getElementById('app') as HTMLAnchorElement
const root = createRoot(container)
root.render(<App />)
