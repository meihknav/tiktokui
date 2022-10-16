import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>Sidebar</h1>
            </div>
        </aside>
    );
}

export default Sidebar;
