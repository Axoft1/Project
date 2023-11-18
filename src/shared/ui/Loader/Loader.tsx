import './Loader.scss'

interface LoaderProps {
  className?: string
}

const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
          <span className="loader"></span>
  )
}
export default Loader
