export const STATIC_API_HOST = 'https://den-3.github.io/den3-blog-static/api/v1/';

export const API_HOST = '';

export interface BlogPageLink {
    url:string,
    tag:string,
}

export const Links:BlogPageLink[] = [{
    url:"/",
    tag:"HOME",
},{
    url:"/activity_content",
    tag:"活動内容",
},{
    url:"/page/0",
    tag:"活動ブログ",
},{
    url:"/production",
    tag:"制作物",
},{
    url:"/link",
    tag:"おすすめリンク",
}]
