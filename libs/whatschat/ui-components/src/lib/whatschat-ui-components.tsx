import styles from './whatschat-ui-components.module.scss';

import Stack from '@mui/material/Stack';

// Stack
type LeftPaneProps = {children: JSX.Element[]}

export function LeftPane({children}: LeftPaneProps) {
  return <Stack className={styles.leftPane}>{children}</Stack>
}


// Avatar 
type AvatarProps = {url:string, alt:string}

export function Avatar(props: AvatarProps) {
  const {url, alt} = props;
  return (
    <div className={styles.avatar}>
      <img src={url} alt={alt}></img>
    </div>
  );
}

export default Avatar;
