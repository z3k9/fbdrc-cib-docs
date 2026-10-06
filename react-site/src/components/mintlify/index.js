// Lightweight equivalents of the Mintlify components used in the docs,
// so the same MDX renders in this self-hosted Docusaurus site.
import React, {useState, Children} from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

// Mintlify uses Font Awesome Pro names; map Pro-only icons to free equivalents.
const ICON_FALLBACK = {browser: 'window-maximize', 'shield-check': 'shield-halved'};
export function Icon({icon, className}) {
  if (!icon) return null;
  const name = ICON_FALLBACK[icon] || icon;
  return <i className={`fa-solid fa-${name} ${className || ''}`} aria-hidden="true" />;
}

export function Card({title, icon, href, children}) {
  const body = (
    <>
      {icon && <Icon icon={icon} className={styles.cardIcon} />}
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardBody}>{children}</div>
    </>
  );
  return href ? (
    <Link to={href} className={`${styles.card} ${styles.cardLink}`}>{body}</Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

export function CardGroup({cols = 2, children}) {
  return <div className={styles.grid} style={{'--cols': cols}}>{children}</div>;
}
export const Columns = CardGroup;

export function Steps({children}) {
  return <ol className={styles.steps}>{children}</ol>;
}
export function Step({title, children}) {
  return (
    <li className={styles.step}>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.stepBody}>{children}</div>
    </li>
  );
}

export function Tabs({children}) {
  const tabs = Children.toArray(children).filter(Boolean);
  const [active, setActive] = useState(0);
  return (
    <div className={styles.tabs}>
      <div role="tablist" className={styles.tabList}>
        {tabs.map((t, i) => (
          <button key={i} role="tab" aria-selected={i === active}
            className={i === active ? styles.tabActive : styles.tab}
            onClick={() => setActive(i)}>
            {t.props.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" className={styles.tabPanel}>{tabs[active]}</div>
    </div>
  );
}
export function Tab({children}) {
  return <>{children}</>;
}

export function AccordionGroup({children}) {
  return <div className={styles.accordionGroup}>{children}</div>;
}
export function Accordion({title, children}) {
  return (
    <details className={styles.accordion}>
      <summary>{title}</summary>
      <div className={styles.accordionBody}>{children}</div>
    </details>
  );
}

export function Frame({caption, children}) {
  return (
    <figure className={styles.frame}>
      <div className={styles.frameInner}>{children}</div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

const admonition = (type) => ({children}) => <Admonition type={type}>{children}</Admonition>;
export const Note = admonition('note');
export const Info = admonition('info');
export const Tip = admonition('tip');
export const Warning = admonition('warning');

export function Check({children}) {
  return (
    <div className={styles.check}>
      <Icon icon="circle-check" className={styles.checkIcon} />
      <div>{children}</div>
    </div>
  );
}
