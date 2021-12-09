import styles from './progress.module.scss';
import classnames from 'classnames';
import { startsWith } from "lodash";

const ProgressBar = ({ step, total}) => {
  const width = step * 100 / total;

  const progressBarClass = classnames({
    'progress-bar': width !== 100,
    'progress-bar--success': width === 100,
    error: startsWith(step, 'end')
  });

  return <div className={styles[progressBarClass]} style={{width: `${width}%`}} />
}
export default ProgressBar