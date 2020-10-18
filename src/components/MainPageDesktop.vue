<template>
  <table>
        <tr> 
            <th v-for="(t , key) in tableTitles" :key="key">{{t}}</th> 
        </tr>
        <tr v-for="(insured,idx) in getInsuredesDetails" :key="idx">
            <td v-for="(t,key) in tableTitles" :key="key">
                <div class="insured-detail">
                    <div v-if="key === 'sentToCustomer'" class="insured-detail__sent-check" >
                        <img src="../../imgs/Vector 1.png" width="22px" v-if="insured[key]">
                    </div>
                    <div v-else>{{insured[key]}}</div>
                    <div v-if="key === 'branch' " class="insured-detail__control">

                        <div class="insured-detail__control-button">
                            <div>
                                <img src="../../imgs/pencil.svg" alt="">
                            </div> 
                            <span>עריכת ההצעה</span>
                        </div>
                        <div class="insured-detail__control-button"> 
                            <div>
                                <img src="../../imgs/envelope.svg" alt=""> 
                            </div>
                            <span>שליחת ההצעה</span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
        return{
            tableTitles : {      
                        branch : 'ענף',
                        product : 'מוצר' ,
                        insuredName : 'שם מבוטח',
                        licenseNumber : "מס' רישוי" ,
                        id : 'תעודת זהות',
                        openingOffer : 'פתיחת ההצעה',
                        beginningInsurance : 'תחילת הביטוח',
                        policyNumber : "מס' פוליסה",
                        sentToCustomer : 'נשלח ללקוח' 
                    } ,                  
        }
    },

    computed: {
        ...mapGetters('insuredes',[
            'getInsuredesDetails'
        ]),
    }
}
</script>

<style scoped>
.insured-detail {
    border-left: 1px solid #E5E5E5;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}


table { 
    border-spacing: 0 10px ;
    width: 100%;
    padding-top: 35px;
    padding-bottom: 50px;
}

td {
    text-align : center;
    height: 45px;
    color: #21325E;
    font-size: 14px;
}

tr {
    background: white;
}

tr:first-child {
    background: #ffffff00;
    color: #F5F5F5;
    font-weight: normal;
    font-size: 14px;
}

th{
    font-weight: normal; 
}

th:first-child {
    padding-right: 8px;
}

tr > td:first-child{
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    padding-right: 8px;
}

tr > td:last-child {
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
}

tr > td:last-child div {
    border-left: 0px
}

.insured-detail__control {
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: -119px;
    top: -7px;
    width: 156px;
    padding-left: 50px;
    opacity: 0;
}

.insured-detail__control-button div {
    background:white;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.insured-detail__control-button span {
    color: #ffffff;
    font-size: 14px;
}

tr:not(:first-child):hover  {
    background: #FF7728;
}

tr:hover .insured-detail{
    color: white;
}

tr:hover .insured-detail > .insured-detail__sent-check img {
    filter: brightness(0) invert(1);
}

tr:hover .insured-detail > .insured-detail__control {
    opacity: 1;
}
</style>