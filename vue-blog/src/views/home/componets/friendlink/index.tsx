import { defineComponent, onMounted, ref } from 'vue';
import { friendlink } from '@/request/api/open';

const friendLink = defineComponent({
    setup() {
        const friendlinkList: any = ref(null);
        async function friendlinkApi() {
            const { code, data } = await friendlink({});
            if (code === 200) {
                friendlinkList.value = data;
            }
        }

        onMounted(() => {
            friendlinkApi();
        });
        return () => (
            <>
                <v-card style='padding: 8px; margin-top: 12px'>
                    <div style='font-size: 0.9rem; font-weight: 600'>
                        <v-icon color='red' icon='mdi-link' />
                        友链
                    </div>

                    <div>
                        <v-list lines='one'>
                            {friendlinkList.value?.list?.map((n) => {
                                return (
                                    <v-list-item key={n?.id} title={n?.title} subtitle={n?.link}>
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
