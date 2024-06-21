import service from '@/request';
import qs from 'qs';

const api = {
    Home: '/api/webfont/home',
    Read60s: '/api/60s',
    ArcList: '/api/article/list',
    ArcTongJi: '/api/article/tongji',
    TagList: '/api/tag',
    Frag: '/api/frag',
    Friendlink: '/api/friendlink',
    Site: '/api/site',
    ArticleDetail: '/api/article/detail',
    TagList2: '/api/tag/list',
    //  '/api/getArticleListByCid',
};

// 首页
export const home = (params: any) => {
    return service.get(api.Home + '?' + qs.stringify(params));
};

// 60s 读懂世界
export const read60s = (params: any) => {
    return service.get(api.Read60s + '?' + qs.stringify(params));
};

// 文章list
export const arcList = (params: any) => {
    return service.get(api.ArcList + '?' + qs.stringify(params));
};

// 文章tongji
export const arcTongJi = (params: any) => {
    return service.get(api.ArcTongJi + '?' + qs.stringify(params));
};

// tags
export const tags = (params: any) => {
    return service.get(api.TagList + '?' + qs.stringify(params));
};

// farg
export const frag = (params: any) => {
    return service.get(api.Frag + '?' + qs.stringify(params));
};

// Friendlink
export const friendlink = (params: any) => {
    return service.get(api.Friendlink + '?' + qs.stringify(params));
};

// Site
export const site = (params: any) => {
    return service.get(api.Site + '?' + qs.stringify(params));
};

// 文章详情
export const articleDetail = (params: any) => {
    return service.get(api.ArticleDetail + '?' + qs.stringify(params));
};

// 标签列表
export const tagList = (params: any) => {
    return service.get(api.TagList2 + '?' + qs.stringify(params));
};
