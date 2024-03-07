import { PropsWithChildren } from 'react'
import styles from './whatschat-ui-components.module.scss';

import Stack from '@mui/material/Stack';
import React from 'react';

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
      <img className={styles.avatar} src={url} alt={alt}></img>
  );
}

// Balloon in left pane
type BalloonProps = {id: number, title: string, isSelected: boolean, selectBalloon: (id: number) => void}

export function Balloon(props: PropsWithChildren<BalloonProps>) {
  const {id, title, isSelected, selectBalloon, children} = props;

  const classes = styles.balloon +' '+ (isSelected ? styles.selected : '')
  return (
    <div
      className={classes}
      onClick={() => selectBalloon(id)}
      >
    <div className={styles.balloon__avatar}>{children}</div>
    <div className={styles.balloon__title}>{title}</div>
    </div>)
}
