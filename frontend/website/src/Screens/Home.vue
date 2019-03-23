<template>
    <div>

        <HomeNavbar></HomeNavbar>
    <div class='background'>
<img src="../assets/easyvote_preview.png"/>
    </div>

    <div class='section'>

        <div class="info">
            <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                <path fill="#000" d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />
            </svg>
            <!--<img src="../assets/devices.png">-->
        <p> Mobile.</p>
            <!--Vote from anywhere-->
        </div>
        <div class="info">
            <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                <path fill="#000" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
            </svg>
            <!--<img src="../assets/unlocked.png">-->
        <p>Secure</p>
            <!--Be confident in the process-->
        </div>
        <div class="info">

            <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                <path fill="#000" d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z" />
            </svg>

            <p>Scalable</p>
            <!--. We can meet your demands-->
        </div>
        <div class="info">
            <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                <path fill="#000" d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
            </svg>
            <!--<img src="../assets/checked.png">-->
           <p> Simple </p>
            <!--. Convenient for everyone-->
        </div>
    </div>

    <div class='about'>

        <p>
            EasyVote is a secure mobile voting application that aims to create a better voting experience for nationwide elections.
            <a class='about-links' href='' style="text-decoration: underline">Check out our customers</a>
        </p>
        <a class='about-links' href=''> Learn More <i class="icon ion-md-arrow-dropright"></i></a>
        <p class='contact-info'>  Contact us easyvoteapp@gmail.com </p>

    </div>
    </div>
</template>

<script>
    import Navbar from "../components/NavbarAdmin";
    import HomeNavbar from "../components/Navbar";
    export default {
        name: "Home",
        components: {HomeNavbar, Navbar}
    }
</script>

<style scoped>

    *{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
    }
    body {
        height: 100%;
        color: #777;
        padding-top: 80px;


    }

    .background {
        height: 600px;
        padding-top: 100px;
        text-align: center;

    }
    .background img{
        max-height: 100%;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background-color: white;
        height: 100px;
        right: 0;
        left:0;
        top:0;

    }


    .navbar >.header {
        display: flex;
        /*justify-content: center;*/
        align-items: center;

        font-size: 30px;
        color: #777;
    }
    .header > img {
        height: 50px
    }

    .nav-right {
        /*position: absolute;*/
        /*right: 20;*/
        /*top: 50;*/
        color: #777;
    }
    .nav-right > a{
        padding-right: 30px;
    }

    .section {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 30px 10px;
        min-height: 150px;
        /*background-color: #333;*/
        color: #333333;


    }
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;

    }
    .info p{
        margin: 10px;
        font-size: 24px;
        font-weight: 300;
    }
    .section>p {
        font-size: 20px;
        width: 200px;


    }

    .credit {
        visibility: hidden; ;
    }

    .about {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #333;
        height:250px;
        align-content: center;
        color: white;

    }


    .about > * {
        /*display: inline-block;*/
        max-width: 700px;
    }

    .about-links {
        color: white;
        font-size: 18px;
    }

    .contact-info{
        font-size: 16px;
    }
</style>