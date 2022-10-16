import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={account.avatar} alt={account.username}></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{account.name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{account.username}</span>
            </div>
        </div>
    );
}

export default AccountItem;
