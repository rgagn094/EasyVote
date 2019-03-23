<template>
    <div class="nav-bar">
        <div class="logo"><img height="50" src="../assets/logo.png"> EasyVote</div>
        <div class="actions">
             <!--<a> About </a>-->
            <router-link :to="{name:'adminLogin'}"> Admin </router-link>

            <a class="button"> Register &#9662;</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeNavbar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        /*background: lightskyblue;*/
        color: #555;
        font-weight: 300;
        position: fixed;
        background: white;
        left: 0;
        right: 0;
        padding: 15px 10px;
        border-bottom: 1px solid #ccc;
        box-shadow: 2px 2px #eee;

        /*font-size: 26px;*/
        /*font-size: 20px;*/
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .actions>a{
        padding-right: 30px;
    }

    .actions .icon {
        font-size: 24px;

    }

    .icon{
        /*color: white;*/
    }
</style>