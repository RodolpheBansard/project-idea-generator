export interface Idea {
  id?:string;
  title: string;
  description: string;
  likeNumber: number;
  creationDate: string;
  tags?: string[]
}
