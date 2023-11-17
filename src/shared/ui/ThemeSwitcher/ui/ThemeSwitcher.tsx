import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/sun-light.svg'
import DarkIcon from 'shared/assets/icons/sun-dark.svg'
import { ThemeButton, Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export default function ThemeSwitcher ({ className }: ThemeSwitcherProps): JSX.Element {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
