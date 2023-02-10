// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Article = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Article'
  title: string
  publishedAt: string
  description: string
  seoDescription: string
  category: string
  tags: string
  author?: Author | undefined
  image: string
  toc: boolean
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
  headings: json
}

export type Book = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Book'
  title: string
  category: string
  description: string
  image: string
  publishedAt: string
  author: string
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
  headings: json
}

export type Snippet = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Snippet'
  title: string
  updatedAt: string
  description: string
  category: string
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
  headings: json
}  

/** Nested types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  name: string
  image: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Article | Book | Snippet
export type DocumentTypeNames = 'Article' | 'Book' | 'Snippet'

export type NestedTypes = Author
export type NestedTypeNames = 'Author'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Article: Article
  Book: Book
  Snippet: Snippet
}

export type NestedTypeMap = {
  Author: Author
}

 