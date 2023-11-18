import { classNames } from 'shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface BugButtonProps {
  className?: string
}

// Для тестирования ошибок
const BugButton = ({ className }: BugButtonProps): JSX.Element => {
  const [error, setError] = useState(false)
  const newThrow = (): void => { setError(true) }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])
  return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={newThrow} className={classNames('BugButton', {}, [className])}>
            throw error
        </Button>
  )
}
export default BugButton
