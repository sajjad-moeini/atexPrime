export type category = {
   id: number
   image: null | string
   title: string
}
type feature = {
   feature: string
   value: string
}
export type product = {
   id: number
   title: string
   description: string
   unit: string
   unitPrice: string
   image: string
   category: string
   features:feature []
}
export type products = product[]

export interface productsStaticProps  {
   products: products
}

export interface Params extends ParsedUrlQuery {
   id: string;
 }