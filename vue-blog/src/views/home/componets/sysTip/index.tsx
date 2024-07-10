import { defineComponent, onMounted, ref } from 'vue';
import { frag } from '@/request/api/open';

const sysTip = defineComponent({
    setup() {
        const fragList: any = ref({
            'sys-tip': null,
        });
        async function fragApi() {
            const { code, data } = await frag({});
            if (code === 200) {
                fragList.value = data;
            }
        }
        onMounted(() => {
            fragApi();
        });
        return () => (
            <>
                {/* 系统公告 */}
                <v-card style='padding: 8px'>
                    <div style='font-size: 0.9rem; font-weight: 600' v-skeleton-item>
                        <v-icon size='16' color='red' icon='mdi-tooltip-check-outline'></v-icon>
                        系统公告
                    </div>
                    <v-card
                        style='padding: 4px 8px; margin: 4px 0px;min-height:110px'
                        v-html={fragList.value['sys-tip']}
                        v-skeleton-item
                    ></v-card>
                </v-card>
            </>
        );
    },
});

export default sysTip;
