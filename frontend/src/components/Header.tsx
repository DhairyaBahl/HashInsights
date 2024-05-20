import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import classNames from '@/utils/classNames';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useLogout } from '@/hooks/useLogout';

const Header = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const logout = useLogout();

  const currentRoute = router.pathname.split('/')[1];

  const getOptionsUI = () => {
    if(!user) {
      return (
        <>
          <Link 
            className = {classNames(styles.navigationLink, { [styles.invisible]: currentRoute === 'login' })} 
            href="/login"
          >
            Login
          </Link>
          
          <Link 
            className = {classNames(styles.navigationLink, { [styles.invisible]: currentRoute === 'register' })} 
            href="/register"
          >
            Register
          </Link>
        </>
      );
    }

    return (
      <>
        <Link 
          className = {classNames(styles.navigationLink, { [styles.invisible]: currentRoute === 'dashboard' })} 
          href="/dashboard"
        >
          Dashboard
        </Link>

        <div 
          className={styles.navigationLink}
          onClick={() => { logout(); router.push('/login'); } }
        >
          Logout
        </div>
      </>
    )
  };

  return (
    <div className={styles.relative}>
      <div className={styles.container}>

        <Link href="/" className={styles.heading}> Hash Insights </Link>

        <div className={styles.options}>
          { getOptionsUI() }
        </div>

      </div>
    </div>
  );

};

export default Header;
