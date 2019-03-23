<template>
    <div>
        <div>

        </div>
        <div>
            <a class="button">Add Candidate</a>
            <div>
                <FormInput label="First Name" placeholder="Angela"></FormInput>
                <FormInput label="Last Name" placeholder="Grace"></FormInput>
                <FormInput label="Other Names" placeholder="Other Names"></FormInput>
                <FormInput label="Description" placeholder="About the candidate"></FormInput>
                <FormInput label="Party" placeholder="Name of party"></FormInput>
                <FormInput label="Image" placeholder="Angela"></FormInput>
            </div>
        </div>
    </div>
</template>

<script>
    import FormInput from "../components/FormInput";
    export default {
        name: "EditElectionForm.vue",
        components: {FormInput}
    }
</script>

<style scoped>

</style>