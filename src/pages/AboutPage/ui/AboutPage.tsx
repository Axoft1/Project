import { useTranslation } from 'react-i18next'

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation()
  return <div>{t('О Сайте')}</div>
}

export default AboutPage
