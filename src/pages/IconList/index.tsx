import { useState, useEffect } from 'react'
import {
  AvailableTelicon,
  Search,
  Telicon,
  Toast,
  toastTrigger
} from '@2600hz/sds-react-components'
import teliconList from '@2600hz/sds-telicon/telicon-list.json'
import 'react-toastify/dist/ReactToastify.css'
import './icon-list.scss'
import { ActivePage } from '@/types'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function IconList({ setActivePage }: Props) {
  setActivePage('IconList')

  const [search, setSearch] = useState<string>('')
  const [filteredList, setFilteredList] = useState(
    teliconList as AvailableTelicon[] | []
  )

  useEffect(() => {
    setFilteredList(
      teliconList.filter((icon) => icon.indexOf(search.toLowerCase()) > -1) as
        | AvailableTelicon[]
        | []
    )
  }, [search])

  function captureData(e: any) {
    const { value } = e
    setSearch(value)
  }

  function copyText(e: any) {
    const value = e.target.getAttribute('data-clipboard-text')
    navigator.clipboard.writeText(value)
    toastTrigger('Icon Name Copied Successfully!', 'Success', 'bottom-center')
  }

  return (
    <>
      <Toast />
      <main className="iconList">
        <div className="searchBar">
          <div className="container">
            <h2>Icon Reference Sheet</h2>
            <Search
              placeholder="Search By Name..."
              id="search"
              onChange={captureData}
            />
          </div>
        </div>
        <div className="container">
          <div className="list">
            {filteredList.map((icon: AvailableTelicon, index: number) => (
              <div
                className="card"
                key={index}
                data-clipboard-text={icon}
                onClick={copyText}
              >
                <Telicon name={icon} size="Default" />
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
