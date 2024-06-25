import router from '@/router/index';
import { provide } from "vue"

export function useArticle() {
    function articleDetail(obj: any) {
        router.push('/article/' + obj?.id);
    }
    function tagDetail(obj: any, isSelf = false) {
        console.log(obj, 'obj')
        router.push({ path: '/tags/' + obj?.name, query: obj });
        if (isSelf) {
            provide('reloadPage', true)
        }
    }
    return { articleDetail, tagDetail };
}
