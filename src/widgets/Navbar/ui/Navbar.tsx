import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkThem } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export default function Navbar ({ className }: NavbarProps): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink them={AppLinkThem.SECONDARY} className={cls.mainLink} to={'/'}>
         {t('Главная')}
        </AppLink>
        <AppLink them={AppLinkThem.SECONDARY} to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  )
}
