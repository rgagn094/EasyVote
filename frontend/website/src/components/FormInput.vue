<template>
    <div class="input-container">
        <p class="label">{{label}}</p>
        <TextArea  v-if="type === 'TextArea'"  :placeholder="placeholder"
                   v-on:input="$emit('input', $event.target.value)"
        ></TextArea>

        <input  v-else :type="type" :value="value"
                v-on:change="$emit('onchange', $event.target.value)"
                v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder" :required="required" />
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props: ['label', 'type','placeholder', 'value', 'required', 'onchange']
    }
</script>

<style scoped>
.input-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin: 10px;
    /*font-size: 18px;*/
}
    input {
        width: 350px;
        padding: 5px 10px;
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 18px;
    }
    TextArea {
        width: 350px;
        padding: 5px 10px;
        min-height: 100px;
        border:1px solid #ddd;
        resize: none;
        font-size: 18px;
    }

    .label {
        margin: 3px;

        /*font-weight: bold;*/
    }
</style>