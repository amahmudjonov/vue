<template>
    <select v-model="modelValue" @change="changeOptions" class="form-control">
        <option disabled value="">Category</option>
        <option :value="option.value" v-for="option in options" :key="option.value" >
            {{option.name}}
        </option>
    </select>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        changeOptions(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },
}
</script>
<style>
    
</style>