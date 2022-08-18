<template>
    <input :value="modelValue" @input="undateInput">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },

    methods: {
        undateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>