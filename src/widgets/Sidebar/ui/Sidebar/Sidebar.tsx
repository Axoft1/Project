import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import LanhgSwitcher from 'widgets/LangSwitcher/LanhgSwitcher'

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
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LanhgSwitcher className={cls.lang}/>
      </div>
    </div>
  )
}
