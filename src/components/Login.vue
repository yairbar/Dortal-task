<template>
  <div class="login-page">
    <div class="login-page__background-color">
      <div class="login-page__title">
        <div>
          <img src="../../imgs/user-1 2.png" alt="">
          <h1 class="desktop-mode">
            כניסה למערכת - צפיה בהצעת מחיר
          </h1>
          <h1 class="mobile-mode">
            כניסה למערכת <br>
             צפיה בהצעת מחיר
          </h1>
        </div>
      </div>
      <div class="login-page__note">
        <span class="desktop-mode">
        הזן את קוד הכניסה, אם לא קיבלת לחץ על שליחת קוד חדש
        </span>
        <span class="mobile-mode">
         לקבלת קוד הכניסה הזן את מספר מספר הטלפון הנייד
        </span>
      </div>
      <div class="login-page__form">
        <div class="login-page__form-name">
          <label>שם משתמש</label>
          <input type="text" name="user-name" v-model="user.userName">
          <img @click="clearInput('userName')" class="login-page__form-input-cancel" src="../../imgs/Vector.png" alt="">
        </div>
         <div class="login-page__form-password">
          <label>סיסמא</label>
          <input type="password" name="password" v-model="user.password">
          <img @click="clearInput('password')" class="login-page__form-input-cancel" src="../../imgs/Vector.png" alt="">
        </div>
      </div>
      <div class="login-page__buttons">
        <button class="login-page__buttons-cancel" @click="clearAll()">ביטול</button>
        <button class="login-page__buttons-confirm" @click="login()">
         <span>כניסה</span> 
          <img src="../../imgs/Polygon 2.svg" alt="">
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
 
export default {

  data(){
    return {
      user : {
        userName : '',
        password : ''
      }
    }
  },

  methods : {
    ...mapActions('user', [
      'loginUser'
    ]),

    loginAgent(){
      return this.user.userName !== '' && this.user.password !== '' ? true : false;
    },

    clearInput(i){
      this.user[i] = ''
    },

    clearAll(){
      this.clearInput('userName');
      this.clearInput('password');
    },

    login(){
      this.loginUser(this.user);
      this.$router.push({path: '/'})
      .catch(error => {
          console.error(error.message)
      })
    }
  },

  computed : {
    ...mapGetters('user', ['getUser'])
  }
  
}
</script>

<style scoped>
.login-page{
  background-image: url('../../imgs/Reasons-your-vehicle-needs-a-dash-camera 1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #FFFFFF;
}

.login-page__background-color{
  width: 100%;
  height: 100%;
  background-color: rgba(33, 50, 94, 0.8);
}

.login-page__title{
  width: 100%;
  display: flex;
  justify-content: center;
}

.login-page__title div{
  display: flex;
  align-items: center;
  margin-top: 50px;
  border-bottom: 5px solid white;
  border-radius: 2px;
  width: 55%;
}

.login-page__title img{
  margin-left: 30px;
}

.login-page__title h1{
  font-size: 48px;
  font-weight: 400;
  margin: 0;
}

.login-page__note {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  width: fit-content;
  margin: auto;
  margin-top: 72px;
}

.login-page__form{
  width: fit-content;
  margin: auto;
  margin-top: 57px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.login-page__form div{
  display: grid;
}

.login-page__form label {
  margin: 0px 40px 15px 0;
}

.login-page__form input {
  width: 350px;
  height: 58px;
  background: #FFFFFF;
  border-radius: 35px;
  padding:0 30px;  
  font-size: 24px;
}

input:focus{
  outline: none;
}

.login-page__form-name {
  position: relative;
}

.login-page__form-password {
  position: relative;
  margin-top: 63px;
}

.login-page__form-input-cancel{
  position: absolute;
  left: 21px;
  bottom: 20px;
  width: 18px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ;
}

.login-page__form-name input:focus + img , .login-page__form-password input:focus + img{
  opacity: 1;
}

.login-page__buttons {
  margin-top: 93px;
  padding-bottom: 71px;
  display: flex;
  justify-content: center;
}

.login-page__buttons button {
  border: 0;
  width: 350px;
  height: 58px;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
  border-radius: 35px;
  color: #FFFFFF;
}

.login-page__buttons-cancel {
  background: #009C41;
  margin-left: 41px;
}

.login-page__buttons-confirm {
  background: #C4C4C4;
  display: flex;
  justify-content: center ;
  align-items: center;
}

.login-page__buttons-confirm img{
  width: 14px;
  margin-right: 21px;
  margin-top: 3px;
}

.mobile-mode{
  display: none;
}

@media only screen and (max-width: 600px) { 
  
  .mobile-mode{
    display: initial; 
  }

  .desktop-mode{
    display: none;
  }

  .login-page{
    background-image: url('../../imgs/slider1 1.png');
    height: calc(100vh - 80px);
  }

  .login-page__title div {
    width: 85%;
  }

  .login-page__title img {
    width: 39px;
    margin-left: 7px;
    padding-bottom: 12px;
  }

  .login-page__title h1{
    padding-bottom: 12px;
    font-size: 24px; 
    font-weight: 700;
    line-height: 28px;
  }

  .login-page__note {
    margin-top: 48px;
    text-align: center;
    padding: 0 50px;
  }

  .login-page__form {
    font-size: 18px;
  }

  .login-page__form input {
    width: 330px;
    height: 40px;
    font-size: 18px;
  }

  .login-page__form label {
    margin: 0px 22px 13px 0;
  }

  .login-page__form-input-cancel{
    left: 19px;
    bottom: 12px;
    width: 14px;
  }

  .login-page__form-password {
    margin-top: 56px;
  }
  
  .login-page__buttons {
    justify-content: space-around;
    max-width: 330px;
    margin: 93px auto 0 auto;
  }

  .login-page__buttons button {
    width: 156px;
    height: 40px;
    font-size: 18px;
  }

  .login-page__buttons-cancel {
    margin-left: 0;
  }

  .login-page__buttons-confirm img[data-v-ef68022e] {
    width: 11px;
    margin-right: 11px;
  }

}

</style>
