import { defineComponent, onMounted, ref } from 'vue';
import { friendlink } from '@/request/api/open';

const friendLink = defineComponent({
    setup() {
        const friendlinkList: any = ref(null);
        const loading = ref(true);
        async function friendlinkApi() {
            const { code, data } = await friendlink({});
            if (code === 200) {
                friendlinkList.value = data;
                loading.value = false;
            }
        }

        onMounted(() => {
            friendlinkApi();
        });
        return () => (
            <>
                <v-card style='padding: 8px; margin-top: 12px' v-skeleton='loading'>
                    <div
                        style='font-size: 0.9rem; font-weight: 600;min-height:22px'
                        v-skeleton-item
                    >
                        <v-icon color='red' icon='mdi-link' />
                        友链
                    </div>

                    <div>
                        <v-list lines='one'>
                            {friendlinkList.value?.list?.map((n) => {
                                return (
                                    <v-list-item
                                        key={n?.id}
                                        title={n?.title}
                                        subtitle={n?.link}
                                        style='min-height:64px;padding:8px 0;'
                                        v-skeleton-item
                                    >
                                        {{
                                            subtitle: () => {
                                                return (
                                                    <a
                                                        href={n?.link}
                                                        target='_blank'
                                                        style='cursor: pointer'
                                                    >
                                                        {n?.link}
                                                    </a>
                                                );
                                            },
                                        }}
                                    </v-list-item>
                                );
                            })}
                        </v-list>
                    </div>
                </v-card>
            </>
        );
    },
});

export default friendLink;
