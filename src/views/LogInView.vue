<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  created() {
    if (this.loggedIn) {
      this.$router.push("/home");
    }
  },

  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/home");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<template>
      <HeaderComp /> 
      <main class="main">
            <section class="section-authorization">
                  <Form @submit="handleLogin" :validation-schema="schema">
                        <h1 class="form__title">Войдите в систему</h1>
                        <div class="form__group">
                              <label for="login-username" class="form__label">Имя пользователя</label>
                              <div class="form__input-container">
                                    <Field type="text" name="username" id="login-username" class="form__input"/>
                                    <ErrorMessage name="username" class="error-feedback" />
                              </div>
                        </div>
                        <div class="form__group">
                              <label for="logi-pass" class="form__label">Пароль</label>
                              <div class="form__input-container">
                                    <Field type="password" name="password" id="login-pass" class="form__input"/>
                                    <ErrorMessage name="password" class="error-feedback" />
                              </div>
                        </div>
                        <div class="form__group">
                              <a href="#" class="form__link form__link--forget">Забыли пароль?</a>
                        </div>
                        <div class="form__group form__group--center">
                              <button type="submit" class="form__button">Войти</button>
                        </div>
                        <hr class="form__hr"/>
                        <div class="form__group form__group--center">
                              <span class="form__note">Нет учетной записи?&nbsp;</span>
                              <RouterLink to="/signup" class="form__link open-registration-form-but">Регистрация</RouterLink>
                        </div>
                        <div class="form__group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
                  </Form>
                  <!-- <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div> 

      
      </Form>-->
            </section>
      </main>
      <FooterComp/>
</template>

<style scoped>
      .section-authorization {
            display: flex;
            justify-content: center;    
      }

      .form {
            margin: 2% 5px 3rem 5px;
            padding: 20px;
            width: 40%;
            max-width: 460px; 
            min-width: 320px;
            color: var(--color-text)
      }

      .form__group{
            margin-bottom: 10px;
      }

      .form__group--center{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
      }

      .form__title{
            margin: 0;
            margin-bottom: 1rem;
            text-align: center;
            font-size: 2rem;
            font-weight: normal;
      }

      .form__label{
            display: inline-block;
      }

      .form__input{
            padding: 0 10px;
            width: 100%;
            height: 2rem;
            
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;

            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;

            outline: 0;
            outline-offset: 0;

            color: var(--color-accent);  
            background-color: var(--color-background);
            
            border: 2px solid var(--color-text);
            border-radius: 1.5rem;   
      }
      .form__input:focus {
            border-color: var(--color-accent1);    
      }

      .form__link{
            text-decoration: underline;
      }

      .form__link:link,
      .form__link:visited{
            color:var(--color-text);
      }
      .form__link:hover,
      .form__link:active,
      .form__link:focus{
            color:var(--color-accent);
            outline: 0;
            outline-offset: 0;
      }

      .form__link--forget{
            display: inline-block;
            margin-bottom: 20px;
      }

      .form__button{
            width: 100%; 
            height: 2.5rem;

            text-transform: uppercase;
            font-weight: normal;
            letter-spacing: 0.1em;

            color: var(--color-text);
            background-color: var(--color-background); 
            border: 2px solid var(--color-text);
            
            border-radius: 2.5rem;
      }
      .form__button:hover,
      .form__button:active{
            cursor: pointer;
            color: var(--color-accent);
            border: 2px solid var(--color-accent);
            outline: 0;
            outline-offset: 0;      
      }

      .form__hr{
            margin: 25px auto 15px auto;
            height: 1px;
            background-color: var(--color-text);
            border:0;
      }

      .form__hr--bright{
            background-color: var(--color-accent2);
      }

      .form__note{
            display: inline-block;
            line-height: normal;
      }

      .error-feedback{
      color: var(--color-accent2);
      font-size: 0.8rem;
      }

      .alert-danger{
      color: var(--color-accent2);
      }
      .alert-success{
            color: var(--color-accent);
      }
</style>