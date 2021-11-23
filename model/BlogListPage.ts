import {BlogAuthor} from "../component/BlogContent";

export interface BlogListEntity{
    thumbnail:string,
    title:string,
    date:string,
    id:string,
    author?:BlogAuthor
}