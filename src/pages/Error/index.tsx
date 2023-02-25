import { Link } from 'react-router-dom'
import { Button } from '@2600hz/sds-react-components'
import { SipsterIcon } from '@/components'
import type { ActivePage } from '@/types'
import './error.scss'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function Error({ setActivePage }: Props) {
  setActivePage('Error')

  return (
    <main className="error404">
      <SipsterIcon />
      <h1>Error 404</h1>
      <p>Ups! The page you're looking doesn't exists.</p>
      <Link to="/">
        <Button type="Secondary" icon="home" iconPosition="Right">
          Go Back Home
        </Button>
      </Link>
    </main>
  )
}
