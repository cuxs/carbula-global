import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './spinner.module.scss';

export const Spinner = ({ isValidating }) => {
  const antIcon = <LoadingOutlined  style={{ fontSize: 24 }} spin />;

  return isValidating ? <div className="validating__spinner"><Spin indicator={antIcon} /></div>:<div/>
}
  