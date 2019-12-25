import DirectSelect from '../lq-form-element-maker/DirectSelect'
// import Vue from 'vue'
// import {  EventBus } from 'lq-form'
export default DirectSelect.extend({
    name: 'vue-lq-select',
    data() {
        return {
            tagName: 'vue-select'
        }
    },
    props: {
        remote: Boolean,
        disabledValues: Array
    },
    computed: {
        /**
         * Make grouped options
         */
        groupedOptions() {
            const options = this.items;
            let grouped_options = {};
            options.map((opt) => {
                let group_name = this.$helper.getProp(opt, this.groupBy);
                group_name = group_name ? group_name : this.uncategorisedLabel;
                if (!grouped_options[group_name]) {
                    grouped_options[group_name] = [];
                }
                grouped_options[group_name].push(opt);
            });
            return grouped_options
        }
    },
    methods: {
        defaultSelectProps() {
            return {
                ...this.$attrs,
                disabled: this.isDisabled,
                value: this.LQElement,
                name: this.id,
                multiple: this.multiple,
                valueKey: this.itemValue,
                label: this.itemText,
                // loading: this.requesting,
                // remote: this.remote,
                // remoteMethod: this.remote ? this.fetchDataFromServer : undefined
                options: this.finalItems,
                createOption: this.createOption
            }
        },
        /**
        * Method to add events.
        */
        customEvents() {
            return {
                click: this.onClick,
                search: this.fetchDataFromServer,
            }
        },

        async fetchDataFromServer(search, loading) {
            if (!this.action) return false
            loading(true)
            await DirectSelect.options.methods.fetchDataFromServer.call(this, search)
            loading(false)
        },
        createOption(newOption) {
            newOption = {[this.itemText]: newOption, new: true}
            this.$emit('option:created', newOption)
            return newOption
        }
    }
})