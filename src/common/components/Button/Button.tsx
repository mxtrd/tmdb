import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import s from './Button.module.scss'

type Variant = 'primary' | 'secondary'

type BaseProps = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never
}

type Props = LinkProps | NativeButtonProps

const isLinkProps = (props: Props): props is LinkProps => {
  return typeof props.href === 'string'
}

export const Button = (props: Props) => {
  if (isLinkProps(props)) {
    const { variant = 'primary', className = '', children, href, ...restProps } = props
    const classes = `${s.button} ${s[variant]} ${className}`.trim()

    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  }

  const { variant = 'primary', className = '', children, type = 'button', ...restProps } = props
  const classes = `${s.button} ${s[variant]} ${className}`.trim()

  return (
    <button type={type} className={classes} {...restProps}>
      {children}
    </button>
  )
}
