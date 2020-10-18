<template>
  <div class="main-page">
    <div class="main-page__background-color">
        <div class="main-page__container">

            <div class="main-page__control">
                <img src="../../imgs/user-1 2.png" alt="">
                <div>הצעות אחרונות</div>
                <div>פוליסות שהופקו</div>
            </div> 

            <div class="main-page__search">
                <input type="text" class="main-page__search-input" placeholder="חיפוש">
                <img src="../../imgs/search.svg" class="main-page__search-img" alt="">
                <button class="main-page__new-offer-btn desktop-mode">
                    <span>הצעה חדשה</span>    
                    <img src="../../imgs/Polygon 2.svg" alt="">
                </button>

                <button class="main-page__new-offer-btn mobile-mode">
                    <img src="../../imgs/plus.svg" alt="">
                </button>
            </div> 

            <MainPageDesktop class="desktop-mode" />
            <MainPageMobile class="mobile-mode" />

        </div>
    </div>
  </div>
</template>

<script>
import MainPageDesktop from './MainPageDesktop';
import MainPageMobile from './MainPageMobile';

export default {

    data(){
        return{
            tableTitles : ['ענף' , 'מוצר', 'שם מבוטח', "מס' רישוי", 'תעודת זהות', 'פתיחת ההצעה', 'תחילת הביטוח', "מס' הפוליסה", 'נשלח ללקוח'] ,
            insuredesDetails :[
                                {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                                   {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : false,
                                },
                                   {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                                 {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                             {
                                    branch : 'רכב',
                                    product : 'שם המוצר' ,
                                    insuredName : 'יצחק אברהם',
                                    licenseNumber : '12-345-67',
                                    id : '039894872',
                                    openingOffer : '12.10.2019',
                                    beginningInsurance : '04.04.2020',
                                    policyNumber : '123456789012',
                                    sentToCustomer : true,
                                },
                            
                            
                            ]
                            
        }
    },

    components : {
        MainPageDesktop,
        MainPageMobile,
    }

}
</script>

<style scoped>

.main-page{
    background-image: url('../../imgs/main-page.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: calc(100vh - 106px);
}

.main-page__background-color{
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 106px);
    background-color: rgba(33, 50, 94, 0.8);
}

.main-page__container {
    width: 1076px;
    margin: 0 auto;
}

.main-page__control {
    display: flex;
    padding-top: 43px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid white;
    position: relative;
}

.main-page__control img {
    margin-left: 26px;
}

.main-page__control div {
    background: #ffffff;
    font-size: 30px;
    font-weight: 400;
    color: #5F5F5F;
    border-radius: 35px;
    height: 58px;
    width: 515px;
    text-align: center;
    cursor: pointer;
    padding: 5px 0;
}

.main-page__control > div:first-of-type {
    background-color: #FF7728;
    color:white;
    right: 101px;
    z-index:2;
    position: absolute;
}

.main-page__search {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.main-page__search input {
    height: 58px;
    width: 754px;
    border-radius: 35px;
    border: none;
    font-size: 18px;
    padding-right: 25px;
}

::placeholder {
  color: #b1b1b1;
}

.main-page__search input:focus{
    outline: none;
}

.main-page__search-img {
    position: relative;
    right: -50px;
    width: 22px;
    cursor: pointer;
}

.main-page__new-offer-btn {
    border: 0;
    width: 284px;
    height: 58px;
    font-size: 24px;
    font-weight: 400;
    cursor: pointer;
    outline: none;
    border-radius: 35px;
    color: #FFFFFF;
    background: #009C41;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-page__new-offer-btn img {
    margin-top: 3px;
    margin-right: 15px;
}

.mobile-mode {
    display: none;
}

@media only screen and (max-width: 600px) { 

    .mobile-mode {
        display: initial;
    }

    .desktop-mode {
        display: none;
    }   

    .main-page{
        background-image: url('../../imgs/slider1 1.png');
    }

    .main-page__container {
        width: auto;
        width: 330px;
    }

    .main-page__background-color {
        padding-bottom: 15px;
    }
    
    .main-page__control{
        border: none;
        width: 330px;
        margin: 0 auto;
        flex-direction: row-reverse;
    }

    .main-page__control img {
        display: none;
    }

    .main-page__control div {
        width: 165px;
        height: 40px;
        font-size: 18px;
    }

    .main-page__control > div:first-of-type {
        position: absolute;
        right: 0px;
    }

    .main-page__control > div:nth-of-type(2) { 
        width: 330px;
        text-align: left;
        padding-left: 21px;
    }

    .main-page__search {
        align-items: center;
        justify-content: space-around;
        padding-bottom: 26px;
        border-bottom: 3px solid #ffffff;
        border-radius: 2px;
        margin-bottom: 26px;
    }

    .main-page__search input {
        width: 273px;
        height: 40px;
    }

    .main-page__search-img {
        width: 19px;
        right: -32px;
    }

    .main-page__new-offer-btn {
        width: 40px;
        height: 40px;
        position: relative;
    }

    .main-page__new-offer-btn img {
        margin: 0;
        padding: 0;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

}

</style>