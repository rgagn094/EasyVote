<template>
    <div class="admin-login">

        <form class="admin-login-form">

            <!--<h1>Login</h1>-->
            <div style="text-align: center; margin-bottom: 50px; margin-top: 20px">
                <img height="80px" src="../assets/logo.png" />
                <h2>Admin Login</h2>

            </div>
            <p style="color: red">{{this.message}}</p>
            <FormInput type="text" v-model='client' label="Client"  placeholder="username" required="true"/>
            <FormInput type="password" v-model="password" label='Password'  placeholder="password"  required="true"/>
            <br>
            <button type="submit" @click.prevent="processForm">Submit</button>

            <router-link :to="{name:'adminHome'}" >Redirect</router-link>
            <!--<router-link :to="{name:'adminHome'}">Test</router-link>-->
        </form> `
        <br>
        <div>
            <a>Help</a>
            <a>Contact Us</a>
            <a>Home</a>
        </div>


    </div>

</template>

<script>

    import FormInput from '../components/FormInput'
    export default {
        name: "AdminLogin",
        components: {
            FormInput,
        },
        data(){
            return {
                client: '',
                password: '',
                message:''
            }

        },
        methods: {
            processForm: function() {
                //clear message
                this.message = '';
                this.$http.post('http://localhost:8000/client/login', {
                    client : this.client,
                    password: this.password,
                })
                    .then(response=> {
                        if (response.status === 200) {
                            let electionBodyID = response.data.electionBodyID;
                            this.$router.push({name:'adminHome', params: {electionBodyID}})

                        }
                        else {
                            this.message = 'Unsuccessful Login'
                        }
                    })
                    .catch(error=> {
                        this.message = 'Unsuccessful';
                        console.log(error);
                    });
            }

        }
    }
</script>

<style scoped>
    .admin-login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*border: 1px solid;*/
        height: 100vh;
        width: 100%;
    }

.admin-login form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0px 30px;
    padding-bottom: 100px;
    box-shadow: 0 3px #eee;
}

a{
    margin: 5px;
}

/*.admin-login-form button{*/
    /*padding: 10px 30px;*/
    /*background: lightskyblue;*/
    /*border: 1px solid lightskyblue;*/
    /*border-radius: 20px ;*/
    /*font-size: 14px;*/
    /*color: white;*/
    /*margin: 10px;*/

/*}*/

</style>