export type PhotosArray = Photo[]
export interface Photo  {
    id: bigint,
    imageUrl:string,
    description:string,
    timestamp:bigint
} 
export interface PhotoJson {
    id: number,
    imageUrl:string,
    description:string,
    timestamp:number
} 