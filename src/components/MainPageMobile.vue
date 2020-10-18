<template>
  <div class="insureds-details">
        <div class="insured-detail" v-for="(insured , idx) in getInsuredesDetails" :key="idx">
            <div class="insured-detail__control">   
                <div> 
                  <img src="../../imgs/car.svg" alt="">
                </div>
                <div class="insured-detail__control-btns">
                    <div>
                        <img src="../../imgs/pencil.svg" alt=""> 
                    </div>
                    <div>
                        <img src="../../imgs/envelope.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="insured-detail__details">
                <div v-for="(title , key) in titles" :key="key" :style="{gridArea : key }" class="insured-detail__details-box">
                    <div class="insured-detail__details-title">{{title}}</div>
                    <div class="insured-detail__details-value" v-if="key !== 'sentToCustomer'" >{{insured[key]}}</div>
                    <div class="insured-detail__details-value" v-else-if="insured[key]" style="color: #009C41;padding-top: 22px;">(נשלחה ללקוח)</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    data(){
        return {           
            titles : {      
                        collective : 'קולקטיב',
                        insuredName : 'שם מבוטח',
                        id : 'תעודת זהות',
                        licenseNumber : 'מספר רישוי',
                        openingOffer : 'פתיחת הצעה',
                        beginningInsurance : 'תחילת ביטוח',
                        policyNumber : 'פוליסה',
                        sentToCustomer : '' 
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
    
    .insureds-details {
      padding-bottom: 50px;
    }

    .insured-detail {
        width: 100%;
        height: 383px;
        background-color: #ffffff;
        border-radius: 30px;
        margin-bottom: 20px;
    }

    .insured-detail__control {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0 13px 0;
        margin: 0 15px;
        border-bottom: 2px solid #1D4076;
    }

    .insured-detail__control-btns {
        display: flex;
    }

    .insured-detail__control-btns div {
        width: 40px;
        height: 40px;
        background: #009C41;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .insured-detail__control-btns div:first-child {
        margin-left: 15px;
    }

    .insured-detail__control-btns div img {
        filter: brightness(0) invert(1);
    }

    .insured-detail__control-btns div:first-child img {
        width: 18px;
        height: 18px;
    }

       .insured-detail__control-btns div:nth-child(2) img {
        width: 30px;
        height: 16px;
    }

    .insured-detail__details {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr ;
        grid-template-areas: 
            "collective collective "
            "insuredName insuredName "
            "id licenseNumber"
            "openingOffer beginningInsurance"
            "policyNumber sentToCustomer";
        padding-right: 20px;
        padding-top: 7px;

    }

    .insured-detail__details-title {
        color: #797979;
        font-size: 18px;
    }

    .insured-detail__details-value {
        color: #21325E;
        font-size: 20px;
        font-weight: bold;
    }

</style>