export type ArticleType = {
  title: string,
  createdAt: string,
  category: string,
  url: string,
  urlCategory: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface ArticleSliceState {
  items: Array<ArticleType>,
  status: Status
}