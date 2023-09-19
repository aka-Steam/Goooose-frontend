<template>
      <main>
            <section class="section-authorization">
                  <form id="form-login" action="#" method="post" class="form">
                        <h1 class="form__title">Войдите в систему</h1>
                        <div class="form__group">
                              <label for="login-email" class="form__label">Имя пользователя</label>
                              <div class="form__input-container">
                                    <input type="email" name="email" id="login-email" class="form__input">
                              </div>
                        </div>
                        <div class="form__group">
                              <label for="logi-pass" class="form__label">Пароль</label>
                              <div class="form__input-container">
                                    <input type="password" name="pass" id="login-pass" class="form__input">
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
                              <span class="form__text">Нет учетной записи?&nbsp;</span>
                              <a id="open-registration-form-but" data-modal-id="#popupRegistr"
                                    class="form__link open-registration-form-but">Регистрация</a>
                        </div>
                  </form>
            </section>
      </main>
</template>