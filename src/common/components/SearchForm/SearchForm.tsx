import { useRef, type ComponentProps } from 'react'
import clsx from 'clsx'
import { Button } from '@/common/components/Button/Button'
import s from './SearchForm.module.scss'

type Props = {
  value: string
  onValueChange: (value: string) => void
  onSubmit: (query: string) => void
  placeholder?: string
  buttonText?: string
  inputId?: string
  inputName?: string
  inputAriaLabel?: string
  autoFocus?: boolean
  disabled?: boolean
  isSubmitting?: boolean
  trimOnSubmit?: boolean
  className?: string
  inputClassName?: string
  buttonClassName?: string
}

export const SearchForm = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    value,
    onValueChange,
    onSubmit,
    placeholder = 'Search for a movie',
    buttonText = 'Search',
    inputId = 'movie-search-input',
    inputName = 'query',
    inputAriaLabel = 'Movie search input',
    autoFocus = false,
    disabled = false,
    isSubmitting = false,
    trimOnSubmit = true,
    className = '',
    inputClassName = '',
    buttonClassName = '',
  } = props

  const formClassName = clsx(s.form, className)
  const fieldClassName = clsx(s.input, inputClassName)
  const submitButtonClassName = clsx(s.button, buttonClassName)

  const isValueEmpty = !value.trim()
  const isButtonDisabled = disabled || isSubmitting || isValueEmpty

  const onResetSearch = () => {
    onValueChange('')
    inputRef.current?.focus()
  }

  const onFormSubmit: NonNullable<ComponentProps<'form'>['onSubmit']> = (event) => {
    event.preventDefault()

    const normalizedQuery = trimOnSubmit ? value.trim() : value
    if (!normalizedQuery) {
      return
    }

    onSubmit(normalizedQuery)
  }

  return (
    <form className={formClassName} onSubmit={onFormSubmit}>
      <label htmlFor={inputId} className="srOnly">
        {inputAriaLabel}
      </label>
      <div className={s.field}>
        <button
          className={clsx('btnReset', s.reset, !isValueEmpty && s.resetVisible)}
          type="button"
          aria-label="Очистить поиск"
          title="Очистить поиск"
          onClick={onResetSearch}
        >
          <svg className={s.resetIcon} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M15 5C14.8437 4.84377 14.6318 4.75601 14.4108 4.75601C14.1898 4.75601 13.9779 4.84377 13.8216 5L9.99997 8.82167L6.1783 5C6.02203 4.84377 5.81011 4.75601 5.58914 4.75601C5.36817 4.75601 5.15624 4.84377 4.99997 5C4.84374 5.15627 4.75598 5.3682 4.75598 5.58917C4.75598 5.81014 4.84374 6.02206 4.99997 6.17833L8.82164 10L4.99997 13.8217C4.84374 13.9779 4.75598 14.1899 4.75598 14.4108C4.75598 14.6318 4.84374 14.8437 4.99997 15C5.15624 15.1562 5.36817 15.244 5.58914 15.244C5.81011 15.244 6.02203 15.1562 6.1783 15L9.99997 11.1783L13.8216 15C13.9779 15.1562 14.1898 15.244 14.4108 15.244C14.6318 15.244 14.8437 15.1562 15 15C15.1562 14.8437 15.244 14.6318 15.244 14.4108C15.244 14.1899 15.1562 13.9779 15 13.8217L11.1783 10L15 6.17833C15.1562 6.02206 15.244 5.81014 15.244 5.58917C15.244 5.3682 15.1562 5.15627 15 5Z" />
          </svg>
        </button>
        <input
          id={inputId}
          name={inputName}
          type="search"
          ref={inputRef}
          value={value}
          autoFocus={autoFocus}
          disabled={disabled || isSubmitting}
          placeholder={placeholder}
          className={fieldClassName}
          onChange={(event) => onValueChange(event.currentTarget.value)}
        />
      </div>
      <Button type="submit" disabled={isButtonDisabled} className={submitButtonClassName}>
        {buttonText}
      </Button>
    </form>
  )
}
