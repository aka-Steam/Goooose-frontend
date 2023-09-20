    
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
                        .min(3, "Must be at least 3 characters!")
                        .max(20, "Must be maximum 20 characters!"),
                  email: yup
                        .string()
                        .required("Email is required!")
                        .email("Email is invalid!")
                        .max(50, "Must be maximum 50 characters!"),
                  password: yup
                        .string()
                        .required("Password is required!")
                        .min(6, "Must be at least 6 characters!")
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
      <main class="main">
            <section class="section-registration">
                  <!-- <form id="form-register" action="#" method="post" class="form">
                        <h1 class="form__title">Регистрация</h1>
                        <hr class="form__hr"/>
                        <div class="form__group">
                              <label for="register-name" class="form__label">Имя пользователя*</label>
                              <div class="form__input-container">
                                    <input type="text" name="name" id="register-name" class="form__input">
                              </div>
                        </div>
                        <div class="form__group">
                              <label for="register-email" class="form__label">Адрес электронной почты*</label>
                              <div class="form__input-container">
                                    <input type="email" name="email" id="register-email" class="form__input">
                              </div>
                        </div>
                        <div class="form__group">
                              <label for="register-pass" class="form__label">Пароль*</label>
                              <div class="form__input-container">
                                    <input type="password" name="pass" id="register-pass" class="form__input">
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
                                    <input type="password" name="pass-repeat" id="register-pass-repeat" class="form__input">
                              </div>
                              <span class="form__note fs08rem">Для подтверждения введите, пожалуйста, пароль ещё
                                    раз.</span>
                        </div>
                        <div class="form__group form__group--center mt20 mb5">
                              <button type="submit" class="form__button form__button--register">Зарегистрироваться</button>
                        </div>
                        <span class="form__note fs08rem">Нажимая «Зарегистрироваться», Вы соглашаетесь с
                              <a href="#" class="form__link fs08rem">пользовательским соглашением</a> и
                              <a href="#" class="form__link fs08rem">политикой конфиденциальности</a>.
                        </span>
                  </form> -->


                  <Form @submit="handleRegister" :validation-schema="schema">
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
                  </Form>

                  <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                        {{ message }}
                  </div>

            </section>
      </main>
</template>

<style scope>
.section-registration {
      display: flex;
      justify-content: center;
}

.pass-law-list {
      padding-left: 30px;
      font-size: 0.8rem;
}

.form__button--register {
      border: 2px solid var(--color-accent2);
}

.fs08rem {
      font-size: 0.8rem;
}
</style>