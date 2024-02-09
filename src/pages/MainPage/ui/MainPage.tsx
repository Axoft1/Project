import { useTranslation } from 'react-i18next'
import './css.scss'
import { BugButton } from 'app/ErrorBuondarie'
// import { useCallback, useEffect, useRef, useState } from 'react'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation()
  // const ref = useRef()
  // const [pos, setPos] = useState('0')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleScroll = useCallback(() => {
  //   console.log('scrolling')
  // }, [])
  // useEffect(() => {
  //   const div = ref.current
  //   if (div) {
  //     div.addEventListener('scroll', handleScroll)
  //   }
  // }, [handleScroll])

  return (
    <div><BugButton />
      {t('Главная страница')}
      {/* {pos} */}
      {/* <div ref={ref} className='css' style={{ rotate: '280deg' }}></div> */}

    </div>
  )
}

export default MainPage
