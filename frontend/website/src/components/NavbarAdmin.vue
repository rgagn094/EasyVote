<template>
    <div class="nav-bar">
        <div class="logo"><img height="50" src="../assets/logo.png"> EasyVote</div>
        <div class="actions">
            <!--<a><i class="icon ion-md-notifications"></i>  </a>-->

            <!--<a><i class="icon ion-md-mail"></i> </a>-->
            <a class="country"><img height="24" src="../../public/canada_flag.png"/> <span></span></a>
            <a><i class="icon ion-md-menu"></i> </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
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
    padding: 5px 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 2px 2px #eee;
    /*font-size: 26px;*/
    /*font-size: 20px;*/
}
    .logo {
        display: flex;
        align-items: center;
    }
    .actions {
        display: flex;
        align-items: center;

    }
    .actions>a{
        padding-right: 30px;
    }
    .actions .icon {
        font-size: 24px;

    }
    .country {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .country > span {
        margin-left:10px ;
    }
    .icon{
        /*color: white;*/
    }
</style>