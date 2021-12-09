import styles from './loading.module.scss';
import classnames from 'classnames/bind';

const LoadingSpinner =({ color }) => {
  const classNameContext = classnames.bind(styles)

  const loadingStyle = classNameContext({
    loading__ring: true,
    white: color ==='white'
  })
  return (
    <div className={loadingStyle}></div>

  )
}

export default LoadingSpinner