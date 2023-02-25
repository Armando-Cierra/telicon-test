import { Link } from 'react-router-dom'
import { Button } from '@2600hz/sds-react-components'
import { SipsterIcon, TeliconLogo, ThemeSettings } from '@/components'
import { ActivePage } from '@/types'
import './home.scss'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function Home({ setActivePage }: Props) {
  setActivePage('Home')

  return (
    <main className="home">
      <div className="container">
        <div className="logo">
          <TeliconLogo />
          <h2 className="logoText">SDS Telicon</h2>
        </div>
        <div className="content">
          <p>A SVG icon collection for Sipster Design System</p>
          <div className="buttonBox">
            <Link to="/icon-list">
              <Button type="Primary" size="Large">
                View Icons
              </Button>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://2600hz.gitbook.io/sipster-design-system/sds-telicon/sds-telicon"
            >
              <Button type="Base" size="Large">
                View Documentation
              </Button>
            </a>
          </div>
          <ThemeSettings />
        </div>
      </div>
      <SipsterIcon />
    </main>
  )
}
