<template>
    <div>
        <v-lq-from name="test_form" :rules="rules" ref="lqForm" action="http://localhost:8080">
            <template v-slot="{model, submit}">
                {{model}}
                <vue-lq-select id="_file" :filterable="true" :options="[{label: 'Canada', code: 'ca'}]" itemText="label" :pushTags="true" :taggable="true" :multiple="true" />

            </template>
        </v-lq-from>
    </div>
</template>
<script>
export default {
    data() {
        const generateData = _ => {
            const data = [];
            const states = [
                'California',
                'Illinois',
                'Maryland',
                'Texas',
                'Florida',
                'Colorado',
                'Connecticut '
            ];
            const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
            states.forEach((city, index) => {
                data.push({
                    label: city,
                    key: `_${index}`,
                    initial: initials[index]
                });
            });
            return data;
        };

        return {
            radio: 1,
            data: generateData(),
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            rules: {
                _text_field: {
                    presence: { allowEmpty: false }
                },
                _rate: { presence: { allowEmpty: false } }
            }
        };
    },
    methods: {
        handleChangeNumber(value) {
            console.log('handleChangeNumber', value);
        }
    }
};
</script>