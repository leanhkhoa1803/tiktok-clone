import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8215443d792b7ca6ab617de52e57182c~c5_100x100.jpeg?x-expires=1654912800&x-signature=zoXve%2BQYCuEKilfiTDbVR2xVYnQ%3D"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>

        <p className={cx('username')}>Nguyen Van A</p>
      </div>
    </div>
  );
}

export default AccountItem;
