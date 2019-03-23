<template>
    <div>
        <!--Adds Navbar -->
        <Navbar></Navbar>

    <div class="election_container">
        <!--Election header information-->
        <div class="header_container">
            <p style=" font-size: 24px; text-transform: uppercase; font-weight: bold; text-align: center">{{title}}</p>
            <div style="display: flex; justify-content: center; margin-top: 15px">
                <br>
                    <div>
                        <p style="color:black; font-size: 20px"> <i class="icon ion-md-time"></i> {{startDateFormatted}} </p>
                    </div>
            </div>
        </div>

        <!--ANALYTICS -->
        <section>
            <p class="section_header" style="color: red">Live Analytics</p>

            <div class="statistics">
                <br>
                <h3 style="text-align: center">Votes by Province </h3>
                <GChart
                        v-if="provinceChartData"
                        type="PieChart"
                        :data="provinceChartData"
                        :options="provinceChartOptions"
                        title=""
                />
                <h3 style="text-align: center">Voters by Age Group </h3>
                <GChart
                        v-if="provinceChartData"
                        type="PieChart"
                        :data="provinceChartData"
                        :options="provinceChartOptions"
                        title=""
                />


            </div>
        </section>

        <!--CANDIDATES INFORMATION SECTION-->
        <p id="test"></p>
        <section>
            <p class="section_header">Candidates</p>
            <br>
            <div class="candidate_container">
                <div class="candidate_card" v-for="candidate in candidates">
                    <div class="candidate_image">
                        <img :src="candidate.image"/>
                    </div>

                   <div class="candidate_info">
                       <div>
                           <!--<p style="color: #777777; font-size: 12px">Name</p>-->
                           <h4 style="text-transform: capitalize">{{candidate.firstName}} {{candidate.lastName}}</h4>
                           <p>{{candidate.party}} </p>
                       </div>
                     </div>
                </div>
            </div>
        </section>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/NavbarAdmin";
    import moment from 'moment'
    import { GChart } from 'vue-google-charts'

    export default {
        name: "Election",
        components: {Navbar, GChart},
        created(){
            this.electionID = this.$route.params.electionID

            this.fetchAnalytics()

            this.$http.get(`http://localhost:8000/election/view/${this.electionID}`).then((response)=>{
                this.title = response.data.title
                this.startDate = response.data.startDate
                this.endDate = response.data.endDate
                this.candidates= response.data.candidates
            }).catch(
                (err)=>{
                    console.log(err)
                }
            )
        },
        data(){
            return {
                title:'',
                electionID:'',
                startDate:'',
                endDate:'',
                candidates : [
                ],
                province: {
                    dataPoints:[],
                    dataLabels:[],
                    data:[['province','percentage']],
                },
                // Array will be automatically processed with visualization.arrayToDataTable function
                provinceChartData: [],
                provinceChartOptions: {
                    chart: {
                        title: 'Province',
                        // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    }
                }
            }
        },
        methods:{
            fetchAnalytics() {
                this.$http.get(`http://localhost:8000/analytics/${this.electionID}/province`).then(
                    (response)=>{
                        this.province.dataPoints = response.data.dataPoints;
                        this.province.dataLabels = response.data.dataLabels;
                        for (var i = 0; i< this.province.dataLabels.length; i++) {
                            this.province.data.push([this.province.dataLabels[i], this.province.dataPoints[i]])
                        }
                        this.provinceChartData = this.province.data
                    }
                );
            },
        ready () {
            // this.fetchAnalytics();

            setInterval(function () {
                this.fetchAnalytics();
            }.bind(this), 1000);
        }
        },
        computed: {
          startDateFormatted: function(){
              if (this.startDate) {
                  return moment(this.startDate).fromNow()
              }
              else{
                  return "-"
              }
              // return moment(this.startDate).format("llll")
          },
            endDateFormatted: function(){
                return moment(this.endDate).format("llll")
            }
        },

    }
</script>

<style scoped>
.election_container{
    padding: 20px;
    display: flex;
    /*text-align: center;*/
    flex-direction: column;
    /*max-width: 1000px;*/
    justify-content: center;
    align-items: center;
}
.header_container {
    margin-bottom: 50px;
}

section{
    margin: 30px 0 ;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px 10px;
    width: 1000px;
    box-shadow: 3px 3px #eee;

}

section .section_header {
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
}
.election_info {
    height: 200px;
}

.statistics{
    /*display: flex;*/
    /*justify-content: space-between;*/
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

.time_container{
    /*display: flex;*/
    display: inline-block;
    /*border: 1px solid;*/
    /*align-items: center;/*/
    width: 130px;
    padding: 5px;
    margin-right: 10px;
    /*float: left;*/
}
.time_container i {
    font-size: 24px;
    padding-right: 10px;
    display: inline-block;
    float: left;


}

    .candidate_container{

        /*margin: 20px;*/
        display: flex;
        /*justify-content: center;*/
        flex-wrap: wrap;

    }
    .candidate_card {
        /*width: 300px;*/
        /*height:200px;*/
        /*border: 1px solid #ccc;*/
        display: block;
        text-align: center;
        padding: 10px;
        clear: both;
        /*width: ;*/
        /*width: 300px;*/
        /*position: relative;*/
        /*border-radius: 10px;*/
        margin: 10px;
        /*box-shadow: 2px 2px 2px #ddd;*/
        /*padding: 10px;*/

        /*display: flex;*/
        /*justify-content: space-around;*/
        /*text-align: center;*/
    }

    .candidate_image {
        /*float: left;*/
        /*margin-right: 20px;*/
    }

    .candidate_card img {
        /*width: 150px;*/
        /*width: 100%;*/
        height: 150px;
        width: 150px;
        border-radius: 50%;
        /*border-radius: 50%;*/
        /*height: 200px;*/
        /*height: 250px;*/
    }
    .candidate_info div{
        margin: 15px;
    }

    .election_info {
        display: flex;
        /*border: 1px solid;*/
        justify-content: start;
        /*padding: 10px;*/
    }
    .votes{
        font-size: 70px;
        color: #777
    }
    .election_info div {
        text-align: center;
        padding: 10px;
        margin: 10px;

    }
</style>