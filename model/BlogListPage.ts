import {BlogAuthor} from "../component/blog/BlogContent";

export interface BlogListEntity{
    thumbnail:string,
    title:string,
    date:string,
    id:string,
    author?:BlogAuthor
}
