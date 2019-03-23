<template>
    <div class="modal">
        <div class="modal_content">


            <div class="header">

                <slot name="header"></slot>
                <a class="close" @click=""><i class="ion-ios-close"></i></a>
            </div>
            <div>
                <slot ></slot>
            </div>
            <div class="footer">
                <slot name="footer" ></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "modal"
    }
</script>

<style scoped>
    .modal {
        position: fixed;
        z-index: 9998;
        top:0;
        left: 0;
        right:0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity 3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        /*align-content: center;*/

    }
    .modal_content{

        background-color: white;
        padding: 20px 10px;
        border: 1px solid #ccc;
        border-radius: 15px;


    }
.header{
    padding: 10px 5px;
    border-bottom: 1px solid #bbb;
    position: relative;

}
    .close i {
        position: absolute;
        left:10px;
        top: 2px;
        font-size: 40px;
    }
</style>