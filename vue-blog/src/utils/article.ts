import router from '@/router/index';

export function useArticle() {
    function articleDetail(obj: any) {
        router.push('/article/' + obj?.id);
    }

    return { articleDetail };
}
