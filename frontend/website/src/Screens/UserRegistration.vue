<template>

    <div >
        <Navbar></Navbar>
        <div class="election_form_container">
            <h3 style="margin-bottom: 10px">Create Election </h3>
            <p>{{this.messaage}}</p>
            <!--<p>Basic Info</p>-->
            <form class="election_form">
                <!--<p class="section_header">Basic Info</p>-->
                <FormInput label="Title" placeholder="Election Title (Year)" v-model="form.title"></FormInput>
                <Datetime  v-model="form.startDate" type="datetime">
                    <label for="startDate" slot="before"> Start Date</label>
                </Datetime>
                <Datetime  v-model="form.endDate" type="datetime">
                    <label for="endDate" slot="before"> End Date</label>
                </Datetime>

                <FormInput type='TextArea' label="Description" placeholder="About this Election" v-model="form.description"></FormInput>
                <!--<button>Continue <i class="ion-md-return-right"></i></button>-->
                <!--<p class="section_header">Candidate Info</p>-->
                <!--<i>Add candidates once the election is created</i>-->
            </form>
        </div>
        <Modal v-show="showModal">
            <template slot="header">
                <h3 style="text-align: center" >Add a Candidate</h3>
            </template>
            <form>

                <div>
                    <a></a>
                </div>
                <!--<p class="section_header">Basic Info</p>-->


                <FormInput label="First Name" placeholder="John" v-model="candidateForm.firstName"></FormInput>
                <FormInput label="Last Name" placeholder="Don" v-model="candidateForm.lastName"></FormInput>
                <FormInput label="Party" placeholder="Political party" v-model="candidateForm.party"></FormInput>
                <input type="file" @change="readURL($event)"  />
                <!--<img id="blah" src="#" alt="your image" />-->


                <button @click.prevent="addCandidate">Add</button>
                <!--<p class="section_header">Candidate Info</p>-->
                <!--<i>Add candidates once the election is created</i>-->
            </form>

        </Modal>
        <div>
            <!--<h3>Create Candidates</h3>-->
            <br>
            <!--<p>CANDIDATES :</p>-->
            <div style="text-align: center">
                <a class="button" @click="showModal=true"><i class="ion-md-add"></i>  Add a candidate</a>
            </div>

            <div class="candidates" >
                <div class="candidate_container" v-for="candidate, index in form.candidates">
                    <img :src="candidate.image"/>
                    <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxXBIU5ACOUbEY8r_rV3CfhpLL0mgn3PjKuSdaH-GuCtdneIycQ">-->
                    <p>
                        <strong>{{candidate.firstName}} {{candidate.lastName}}</strong>
                    </p>
                    <p>
                        {{candidate.party}}
                    </p>

                    <a class="button" @click="removeCandidate(index)"><i class="ion-md-trash"></i> Delete</a>
                </div>

            </div>


        </div>
        <div>
            <!--<a class="button" ><i class="ion-md-arrow-round-back"></i>  Back</a>-->
            <!--<a class="button" ><i class="ion-md-trash"></i> Cancel</a>-->
            <div style="text-align: center; display: block;">
                <a class="button"  @click="processForm"><i class="ion-md-checkmark"></i>  Save & Exit</a>
            </div>

        </div>
    </div>
</template>

<script>
    import FormInput from "../components/FormInput";
    import Navbar from "../components/NavbarAdmin";
    import Modal from "../components/modal";

    import { Datetime } from 'vue-datetime';
    import 'vue-datetime/dist/vue-datetime.css'
    // import DateTime from 'vue-datetime';
    // import timePicker from 'vue-datetime-picker';
    export default {
        name: "UserRegistration",
        components: {Modal, Navbar, FormInput, Datetime},
        data(){
            return{
                showModal:false,
                form:{
                    title:'',
                    description:'',
                    startDate:'',
                    endDate:'',
                    candidates:[],


                },
                candidateForm: {
                    firstName: '',
                    lastName:'',
                    party:'',
                    image:'',
                    upload:''
                },
                messaage:''
            }
        },
        methods: {
            readURL: function(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                var image = new Image();
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.candidateForm.image  = e.target.result;
                };
                reader.readAsDataURL(files[0]);
            },
            removeCandidate: function(candidateIndex){
                this.form.candidates = this.form.candidates.filter(
                    (candidate, index)=> index !== candidateIndex
                )},
            processForm: function(){
                this.messaage = '';
                this.$http.post('http://localhost:8000/election/create', {
                    title : this.form.title,
                    description: this.form.description,
                    startDate: this.form.startDate,
                    endDate: this.form.endDate,
                    candidates: this.form.candidates,
                    //add electionbodyid
                    electionBodyID: this.$route.params.electionBodyID
                })
                    .then(response=> {
                        if (response.status === 200) {
                            this.$router.push({name:'adminHome'})
                            this.message = 'Succesful login'
                        }
                        else {
                            this.message = 'Unsuccessful'
                        }
                    })
                    .catch(error=> {
                        this.message = 'Unsuccessful'
                        console.log(error);
                    });
            },

            addCandidate: function(){
                this.form.candidates.push({
                    firstName: this.candidateForm.firstName,
                    lastName: this.candidateForm.lastName,
                    party: this.candidateForm.party,
                    image: this.candidateForm.image,

                })
                //clear fields

                //close modal
                this.showModal = false;
            }
            //         readUrl: function readURL(input) {
            //     if (input.files && input.files[0]) {
            //         var reader = new FileReader();
            //
            //         reader.onload = function (e) {
            //             $('#blah')
            //                 .attr('src', e.target.result)
            //                 .width(150)
            //                 .height(200);
            //         };
            //
            //         reader.readAsDataURL(input.files[0]);
            //     }
            // }
            //     }
        }
    }
</script>

<style scoped>
    .election_form_container{
        padding: 0 30px;
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*flex-direction: column;*/

        /*border: 1px solid #ccc;*/

    }
    /*.candidates {*/
    /*display: flex;*/
    /*}*/

    .election_form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        /*justify-content: row;*/
    }
    button {
        margin: 20px 0;
        float: right;
    }

    .section_header{
        color: #333333;
        padding: 5px;
        border-bottom: 1px solid;
    }

    .candidate_container{
        display: inline-block;
        /*max-width: 100px;*/
        text-align: center;
        margin: 20px;
        padding: 10px;
        /*border: 1px solid;*/
    }



    .candidate_container img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
    }

</style>
<!--<template>-->
    <!---->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "UserRegistration"-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->