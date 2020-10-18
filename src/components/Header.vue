<template>
  <div class="header">
    <div class="agent-details" :style="itsLogin? { boxShadow: '0px -5px 20px 0px #0000007d' } : '' ">
        <div class="agent-details__img">
            <img src="../../imgs/agent.png" alt="">
        </div>
        <div>
            <div class="agent-details__name">
                שם סוכן 
                <b>ישראל ישראלי</b>         
            </div>
            <div class="agent-details__number">
                מספר
                <b>123465</b> 
            </div>
            <div class="agent-details__collective">
                קולקטיב
                <b>חברת חשמל</b> 
            </div>
        </div>
    </div>
    <div class="agent-name" v-if="itsLogin">
        שלום, 
        <b> חיים משה </b> 
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed : {
        ...mapGetters( 'routerModel' ,['getRoutherPath']),

        itsLogin(){
            return this.getRoutherPath === '/login'
        }
    },
}
</script>

<style scoped>
.header{
    width: 100%;
    background-color: #ffffff;
    direction: rtl;
}
.agent-details{
    display: flex;
    padding: 0 20px;
    height: 100px;
    align-items: center;
    margin-bottom: 6px;
    color: #009C41;
    font-size: 16px;
}
.agent-details__img{
    width: 38px;
    height: 38px;
    background-color: #009C41;
    border-radius: 10px;
    display: grid;
    justify-content: center;
    align-content: center;
    margin-left: 19px;
}

.agent-details__collective {
    display: none;
}

.agent-name {
    background: #F5F5F5;
    height: 76px;
    padding: 0 62px;
    display: flex;
    align-items: center;
}

.agent-name b {
    padding: 0 3px;
}

@media only screen and (max-width: 600px) {

    .agent-details__number{
        display: none;
    }

    .agent-details__collective {
        display: initial;
    }

    .agent-details {
        display: flex;
        padding: 0 11px;
        box-shadow: 0px 0px;
        margin: 0;
        height: auto;
        font-size: 12px;
    }

    .agent-details__img {
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .agent-name {
        background: #ffffff;
        height: auto;
        padding: 0 52px;
        display: initial;
        color: #fe5d27;
    }

    .header {
        padding: 13px 0 11px 0;
    }

    .agent-name b {
        padding: 3px 0 0 0;
    }

}

</style>