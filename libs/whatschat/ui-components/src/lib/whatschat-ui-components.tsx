import { PropsWithChildren, ReactNode } from 'react'
import styles from './whatschat-ui-components.module.scss';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import React from 'react';

// LeftPane
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


// ContactCard in left pane
type ContactCardProps = {id: number, title: string, isSelected: boolean, selectContactCard: (id: number) => void}

export function ContactCard(props: PropsWithChildren<ContactCardProps>) {
  const {id, title, isSelected, selectContactCard, children} = props;

  const classes = styles.contactCard +' '+ (isSelected ? styles.selected : '')
  return (
    <div
      className={classes}
      onClick={() => selectContactCard(id)}
      >
    <div className={styles.contactCard__avatar +' '+ styles.smile} title={title}>{children}</div>
    <div className={styles.contactCard__title}>{title}</div>
    </div>)
}


// ContentPane
export function ContentPane(props: PropsWithChildren) {
  return (
    <div className={styles.contentPane}>
      {props.children}
    </div>
  ) 
}


// TextField
export function TextFieldContainer() {
  return (<div className={styles.textField}><TextField fullWidth variant="filled"/></div>)
}


// ContentHeader
type contentHeaderProps = {title: string};

export function ContentHeader(props: contentHeaderProps){
  const {title} = props
  return (
    <div className={styles.contentHeader}>
      <div className={styles.contentTitle}>{title}</div>
    </div>)
}


// ChatBubbleComponent
type ChatBubbleComponentProps = {content: string, datetimestamp: string, mychat: boolean; }
export function ChatBubbleComponent(props: ChatBubbleComponentProps){
  const {content, datetimestamp, mychat} = props;
  return (
    <div className={mychat ? styles.myChatBubbleComponent + '' : styles.chatBubbleComponent  + ''}>
      <div className={styles.chatBubbleDateTimeStamp}>{datetimestamp}</div>
      <div className={styles.chatBubbleContent}>{content}</div>
    </div>
  );
}
