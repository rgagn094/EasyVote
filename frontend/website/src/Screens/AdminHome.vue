<template>
    <div  class="admin_container">
        <!--includes top navbar-->
        <Navbar></Navbar>
        <h4>DASHBOARD</h4>

        <!--Actions to create election or go to logs-->
        <div class="dashboard_actions">
            <div>
                <router-link :to="{name:'createElectionForm', params:{electionBodyID}}"><i class="ion-ios-add"></i> Create Election</router-link>
            </div>
            <div>
                <a><i class="ion-md-list"></i> Go to Logs</a>
            </div>
        </div>

            <!--Analytcis Preview-->
        <div class="dashboard">
            <div class="dashboard-card">
                <h5>CITIZENS </h5>
                <!--<div>-->
                    <div class="citzens_stats">

                        <!--analytics for citzens by age group-->
                    <div class="chart_container" >
                        <h3>Age Group</h3>
                        <canvas id="myChart" width='100' height="100" ></canvas>


                    </div>
                        <!--analytics for citzens by region-->
                    <div class="chart_container" >
                        <h3>Region</h3>
                        <canvas id="myChart2" width='100' height="100" ></canvas>
                        <!--<canvas id="countries" ></canvas>-->

                    </div>

                </div>
                <!--</div>-->

            </div>

<!--Election container -->
        <div class="dashboard-card">
           <h5>ELECTIONS</h5>
            <div class="election-card" v-for="election in elections">
                <div class="election-card-info">
                    <router-link :to="{name: 'viewElection', params:{electionID:election._id} }">{{election.title}}</router-link>
                    <div class="actions">

                        <a>Edit </a>
                        <a> Archive </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import TextInput from '../components/FormInput'
    import Navbar from '../components/NavbarAdmin'
    export default {
        name: "AdminHome",
        components: {
            TextInput,
            Navbar
        },
        data(){
            return{
                showElectionForm: false,
                electionBodyID:'',
                elections : [],



            }
        },
        created() {
          //fetch data
            this.electionBodyID = this.$route.params.electionBodyID
          this.$http.get(`http://localhost:8000/election/list/${this.electionBodyID}`).then( response =>{
                  this.elections = response.data.elections
          })  .catch((err)=>{
              console.log(err)
          })
        },
        mounted() {
            //

            let ctx = document.getElementById("myChart").getContext('2d');
            let ctx2 = document.getElementById("myChart2").getContext('2d');
                // ctx.height = 200;
            //analytics for age group
            let myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [10, 20, 30,40],
                        backgroundColor: [
                                'orange',
                                'lightblue',
                                'aqua',
                            'pink'


                            ],
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        '18-24',
                        '25-44',
                        '45-64',
                        '65+',

                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }});

            //analytics for region
            let myChart2 = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [10, 20, 30,40,50],
                        backgroundColor: [
                            'orange',
                            'lightblue',
                            'aqua',
                            'pink'


                        ],
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'ON',
                        'BC',
                        'AB',
                        'NS',
                        'MN'

                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }});

        }



    }
</script>


<style scoped>

.admin_container {

    padding: 0 30px;



    /*display: flex;*/

}
/*.background{*/
    /*background-image: url("http://www.pngall.com/wp-content/uploads/2016/07/Canada-Leaf-PNG-File.png") ;*/
    /*background-repeat: no-repeat ;*/
    /*background-color: white;*/
    /*background-position: center;*/
    /*opacity: 0.2;*/
    /*position: fixed;*/
   /*top: 0;*/
   /*height: 100%;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: -3;*/
/*}*/
.board {
    margin: auto auto ;
    border: 1px solid #ccc;
    box-shadow: 3px 6px #eee;
    /*width: 600px;*/
    min-width: 250px;
    padding: 20px;

}
.dashboard{
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    margin: 50px 0;


}
.dashboard-card {
    min-height: 250px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    /*min-width: 350px;*/
    width: 90%;
    box-shadow: 3px 6px #eee;

}
    .election-card{
        border-bottom: 1px solid #ddd;
        padding: 10px;
        margin: 10px;
        /*min-width: 300px;*/

    }
    .election-card-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .actions > a{
        padding: 10px;
    }

    .dashboard_actions{
        display: flex;
        margin: 15px;


    }
    .citzens_stats{
        display: flex;
        justify-content: space-between;
    }
    .chart_container {
        display:  flex;
       flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        min-width: 500px ;
        /*border: 1px solid;*/
        padding: 5px;
    ;

    }
    .dashboard_actions div {
        margin-right: 10px;
        border: 1px solid cornflowerblue;
        border-radius: 30px;
        padding: 5px 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
    }
    .dashboard_actions i {
        font-size: 15px;
    }
/*.dashboard_actions div p {*/
    /*!*border: 1px solid;*!*/
    /*margin: 0;*/
/*}*/
</style>