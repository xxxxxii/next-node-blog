import { defineComponent, ref, onMounted } from 'vue';
import { home } from '@/request/api/open';
import './index.css';
import '../../styles/public.css';
import { useArticle } from '@/utils/article';
import SysTip from './componets/sysTip/index';
import FriendLink from './componets/friendlink/index';
import Tags from '@/views/comp/tags.vue';
// import { SkeletonItem, Skeleton } from '@/directives/skeleton';

// const vSkeleton = Skeleton;
// const vSkeletonItem = SkeletonItem;

const { articleDetail, tagDetail, categoryDetail } = useArticle();

const Home = defineComponent({
    setup() {
        const homeData: any = ref({
            banner: [{}, {}],
            topnews: [{}, {}, {}, {}, {}, {}],
            article: [
                {
                    category: {
                        name: '',
                    },
                    list: [{}, {}, {}, {}],
                },
                {
                    category: {
                        name: '',
                    },
                    list: [{}, {}, {}, {}],
                },
                {
                    category: {
                        name: '',
                    },
                    list: [{}, {}, {}, {}],
                },
                {
                    category: {
                        name: '',
                    },
                    list: [{}, {}, {}, {}],
                },
            ],
            recommend: [{}, {}, {}],
        });
        const show: any = ref(true);
        async function homeApi() {
            const { code, data } = await home({ mode: 'api' });
            if (code === 200) {
                homeData.value = data;
                show.value = false;
                console.log(homeData.value, 'homeData.value');
            }
        }

        onMounted(() => {
            homeApi();
        });
        return () => (
            <>
                {/* <v-row class='flex main' v-show={!homeData.value}>
                    <v-skeleton-loader
                        class='mx-auto'
                        elevation={2}
                        height={800}
                        width={'100%'}
                        type='card-avatar, article, actions'
                        boilerplate
                    ></v-skeleton-loader>
                </v-row> */}
                <v-row class='flex main' v-skeleton={show.value}>
                    <v-col cols={12} sm={10} class='left-box'>
                        <v-row>
                            <v-col cols={12} sm={6} class='item-l'>
                                <v-card>
                                    <v-carousel
                                        hide-delimiters
                                        show-arrows='hover'
                                        verticalDelimiters='right'
                                        progress='primary'
                                        cycle
                                        loop
                                        style='height: 300px'
                                    >
                                        {homeData.value?.banner?.map((item) => {
                                            return (
                                                <v-carousel-item
                                                    src={item.img_url}
                                                    cover
                                                    v-skeleton-item
                                                >
                                                    <div
                                                        style='
                                                            width: 100%;
                                                            height: 100%;
                                                            display: flex;
                                                            justify-content: center;
                                                            align-items: center;
                                                            position: relative;
                                                        '
                                                    >
                                                        <a
                                                            href={item?.link_url}
                                                            target='_blank'
                                                            class='carousel-text'
                                                        >
                                                            {item?.title}
                                                        </a>
                                                    </div>
                                                </v-carousel-item>
                                            );
                                        })}
                                    </v-carousel>
                                </v-card>
                            </v-col>
                            <v-col cols={12} sm={6} class='item-r'>
                                <v-card style='height: 100%'>
                                    <v-card-item>
                                        <v-card-title>
                                            <span v-skeleton-item>最新文章</span>
                                        </v-card-title>
                                    </v-card-item>
                                    {homeData.value?.topnews?.news?.map((item) => {
                                        return (
                                            <v-card
                                                style='padding: 6px; margin: 10px 15px'
                                                onClick={articleDetail.bind(this, item)}
                                                v-skeleton-item
                                            >
                                                <div
                                                    class='d-flex'
                                                    style='justify-content: space-between'
                                                >
                                                    <div class='title t-els' style='flex: 1'>
                                                        {item?.title}
                                                    </div>
                                                    <div
                                                        class='date'
                                                        style='width: 50px; flex: none'
                                                    >
                                                        {item?.createdAt}
                                                    </div>
                                                </div>
                                            </v-card>
                                        );
                                    })}
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            {homeData.value?.article?.map((item: any, index: number) => {
                                return (
                                    <v-col
                                        cols={12}
                                        sm={6}
                                        key={index}
                                        class={index % 2 === 0 ? 'item-l' : 'item-r'}
                                    >
                                        <v-card style={'height: 100%'}>
                                            <v-card-item>
                                                <v-card-title>
                                                    <div
                                                        onClick={categoryDetail.bind(this, item)}
                                                        style={'cursor: pointer; min-height:30px'}
                                                        v-skeleton-item
                                                    >
                                                        {item?.category?.name}
                                                    </div>
                                                </v-card-title>
                                            </v-card-item>

                                            {item?.list?.length > 0 ? (
                                                item?.list.map((ic: any) => {
                                                    return (
                                                        <div
                                                            style={
                                                                'margin: 8px 15px;min-height:32px'
                                                            }
                                                            v-skeleton-item
                                                        >
                                                            <v-card
                                                                style={'padding: 6px'}
                                                                onClick={articleDetail.bind(
                                                                    this,
                                                                    ic
                                                                )}
                                                            >
                                                                {ic?.title}
                                                            </v-card>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <no-data />
                                            )}
                                        </v-card>
                                    </v-col>
                                );
                            })}
                        </v-row>
                    </v-col>
                    <v-col cols={12} sm={2} class='item-l right-box'>
                        <SysTip />
                        {/* 文章推荐  */}
                        <v-card style={'padding: 8px; margin-top: 12px'}>
                            <div style={'font-size: 0.9rem; font-weight: 600'} v-skeleton-item>
                                <v-icon
                                    size={16}
                                    color={'red'}
                                    icon={'mdi-receipt-send-outline'}
                                ></v-icon>
                                推荐文章
                            </div>
                            <div>
                                {homeData.value?.recommend?.map((item) => {
                                    return (
                                        <v-card
                                            key={item?.id}
                                            style={'margin: 8px 0; cursor: pointer'}
                                            onclick={articleDetail.bind(this, item)}
                                            v-skeleton-item
                                        >
                                            <v-list-item>{item?.title}</v-list-item>
                                        </v-card>
                                    );
                                })}
                            </div>
                        </v-card>
                        {/* 标签 */}
                        <Tags />
                        {/* 友链 */}
                        <FriendLink />
                    </v-col>
                </v-row>
            </>
        );
    },
});

export default Home;
