<template>
      <main>
            <section class="section-registration">
                  <form id="form-register" action="#" method="post" class="form">
                        <h1 class="form__title">Регистрация</h1>
                        <hr class="form__hr form__hr--bright"/>
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
                                    <li class="passLawList__item">Ваш пароль должен содержать как минимум 8 символов.
                                    </li>
                                    <li class="passLawList__item">Пароль не может состоять только из цифр.</li>
                              </ul>
                        </div>
                        <div class="form__group">
                              <label for="register-pass-repeat" class="form__label">Подтверждение пароля*</label>
                              <div class="form__input-container">
                                    <input type="password" name="pass-repeat" id="register-pass-repeat" class="form__input">
                              </div>
                              <span class="form__text fs08rem">Для подтверждения введите, пожалуйста, пароль ещё
                                    раз.</span>
                        </div>
                        <div class="form__group form__group--center mt20 mb5">
                              <button type="submit" class="form__button form__button--register">Зарегистрироваться</button>
                        </div>
                        <span class="form__text fs08rem">Нажимая «Зарегистрироваться», Вы соглашаетесь с
                              <a href="#" class="form__link">пользовательским соглашением</a> и
                              <a href="#" class="form__link">политикой конфиденциальности</a>.
                        </span>
                  </form>
            </section>
      </main>
</template>