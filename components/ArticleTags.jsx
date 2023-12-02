import React from 'react'

export function ArticleTags({ tags }) {
  if (!tags?.length) {
    return null
  }

  tags = tags.split(',').map((t) => t.trim())

  return tags.map((tag, i) => (
    <span
      key={i}
      className="ml-2 text-[9px] text-gray-500 border border-gray-600 rounded-lg px-[4px] py-[2px]"
    >
      {tag}
    </span>
  ))
}
