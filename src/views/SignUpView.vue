    
<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/Footer.vue';
</script>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
      name: "Register",
      components: {
            Form,
            Field,
            ErrorMessage,
      },
      data() {
            const schema = yup.object().shape({
                  username: yup
                        .string()
                        .required("Username is required!")
                        .min(2, "Must be at least 2 characters!")
                        .max(20, "Must be maximum 20 characters!"),
                  email: yup
                        .string()
                        .required("Email is required!")
                        .email("Email is invalid!")
                        .max(255, "Must be maximum 255 characters!"),
                  password: yup
                        .string()
                        .required("Password is required!")
                        .min(8, "Must be at least 8 characters!")
                        .max(40, "Must be maximum 40 characters!"),
            });

            return {
                  successful: false,
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
      mounted() {
            if (this.loggedIn) {
                  this.$router.push("/home");
            }
      },
      methods: {
            handleRegister(user) {
                  this.message = "";
                  this.successful = false;
                  this.loading = true;

                  this.$store.dispatch("auth/register", user).then(
                        (data) => {
                              this.message = data.message;
                              this.successful = true;
                              this.loading = false;
                        },
                        (error) => {
                              this.message =
                                    (error.response &&
                                          error.response.data &&
                                          error.response.data.message) ||
                                    error.message ||
                                    error.toString();
                              this.successful = false;
                              this.loading = false;
                        }
                  );
            },
      },
};
</script>

<template>
      <HeaderComp /> 
      <main class="main">
            <section class="section-registration">
                  <Form @submit="handleRegister" :validation-schema="schema" class="form">
                        <div v-if="!successful">
                              <h1 class="form__title">Регистрация</h1>
                              <hr class="form__hr" />
                              <div class="form__group">
                                    <label for="register-name" class="form__label">Имя пользователя*</label>
                                    <div class="form__input-container">
                                          <Field type="text" name="username" id="register-name" class="form__input"/>
                                          <ErrorMessage name="username" class="error-feedback"/>
                                    </div>
                              </div>
                              <div class="form__group">
                                    <label for="register-email" class="form__label">Адрес электронной почты*</label>
                                    <div class="form__input-container">
                                          <Field type="email" name="email" id="register-email" class="form__input"/>
                                          <ErrorMessage name="email" class="error-feedback"/>
                                    </div>
                              </div>
                              <div class="form__group">
                                    <label for="register-pass" class="form__label">Пароль*</label>
                                    <div class="form__input-container">
                                          <Field type="password" name="password" id="register-pass" class="form__input"/>
                                          <ErrorMessage name="password" class="error-feedback"/>
                                    </div>

                                    <ul class="pass-law-list">
                                          <li class="pass-law-list__item">Ваш пароль должен содержать как минимум 8 символов.
                                          </li>
                                          <li class="pass-law-list__item">Пароль не может состоять только из цифр.</li>
                                    </ul>
                              </div>
                              <div class="form__group">
                                    <label for="register-pass-repeat" class="form__label">Подтверждение пароля*</label>
                                    <div class="form__input-container">
                                          <Field type="password" name="password_confirmation" id="register-pass-repeat"
                                                class="form__input"/>
                                    </div>
                                    <span class="form__note fs08rem">Для подтверждения введите, пожалуйста, пароль ещё
                                          раз.</span>
                              </div>
                              <div class="form__group form__group--center">
                                    <button type="submit"
                                          class="form__button form__button--register">Зарегистрироваться</button>
                              </div>
                              <span class="form__note fs08rem">Нажимая «Зарегистрироваться», Вы соглашаетесь с
                                    <a href="#" class="form__link fs08rem">пользовательским соглашением</a> и
                                    <a href="#" class="form__link fs08rem">политикой конфиденциальности</a>.
                              </span>
                        </div>
                  </Form>


                  <!-- <Form @submit="handleRegister" :validation-schema="schema">
                        <div v-if="!successful">
                              <div class="form-group">
                                    <label for="username">Username</label>
                                    <Field name="username" type="text" class="form-control" />
                                    <ErrorMessage name="username" class="error-feedback" />
                              </div>
                              <div class="form-group">
                                    <label for="email">Email</label>
                                    <Field name="email" type="email" class="form-control" />
                                    <ErrorMessage name="email" class="error-feedback" />
                              </div>
                              <div class="form-group">
                                    <label for="password">Password</label>
                                    <Field name="password" type="password" class="form-control" />
                                    <ErrorMessage name="password" class="error-feedback" />
                              </div>

                              <div class="form-group">
                                    <button class="btn btn-primary btn-block" :disabled="loading">
                                          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                          Sign Up
                                    </button>
                              </div>
                        </div>
                  </Form> -->

                  <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                        {{ message }}
                  </div>

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

.form__group {
      margin-bottom: 10px;
}

.form__group--center {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
}

.form__title {
      margin: 0;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 2rem;
      font-weight: normal;
}

.form__label {
      display: inline-block;
}

.form__input {
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

.form__link {
      text-decoration: underline;
}

.form__link:link,
.form__link:visited {
      color: var(--color-text);
}

.form__link:hover,
.form__link:active,
.form__link:focus {
      color: var(--color-accent);
      outline: 0;
      outline-offset: 0;
}

.form__link--forget {
      display: inline-block;
      margin-bottom: 20px;
}

.form__button {
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
.form__button:active {
      cursor: pointer;
      color: var(--color-accent);
      border: 2px solid var(--color-accent);
      outline: 0;
      outline-offset: 0;
}

.form__hr {
      margin: 25px auto 15px auto;
      height: 1px;
      background-color: var(--color-text);
      border: 0;
}

.form__hr--bright {
      background-color: var(--color-accent2);
}

.form__note {
      display: inline-block;
      line-height: normal;
}

.section-registration {
      display: flex;
      justify-content: center;
}

.pass-law-list {
      padding-left: 30px;
      font-size: 0.8rem;
}

.form__button--register {
      border: 2px solid var(--color-text);
}

.fs08rem {
      font-size: 0.8rem;
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