'use client'

import Link from 'next/link'
import css from './TagsMenu.module.css'
import { useState } from 'react'

const tags = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'] as const

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={css.menuContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={css.menuButton} onClick={() => setIsOpen(true)}>
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={`/notes/filter/${tag}`}
                className={css.menuLink}
                onClick={() => setIsOpen(false)}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
