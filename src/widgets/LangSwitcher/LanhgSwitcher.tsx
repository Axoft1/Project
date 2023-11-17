import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ThemeButton, Button } from 'shared/ui/Button/Button'

interface LanhgSwitcherProps {
  className?: string
}

export default function LanhgSwitcher ({ className }: LanhgSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation()
  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <>

      <Button
        className={classNames('', {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
    </>
  )
}
