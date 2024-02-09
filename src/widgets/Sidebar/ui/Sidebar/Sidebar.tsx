import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import LanhgSwitcher from 'widgets/LangSwitcher/LanhgSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export default function Sidebar ({ className }: SidebarProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <Button data-testid='sidebar-toggle' onClick={onToggle}>toggle</Button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LanhgSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
