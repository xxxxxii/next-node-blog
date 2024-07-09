const NoData = (props: any, { attrs }) => {
    return (
        <div {...attrs}>
            <v-card style={{ textAlign: 'center', padding: '15px' }}>
                <p>灯火阑珊处，</p>
                <p>文章一点无！</p>
            </v-card>
        </div>
    );
};

export default NoData;
