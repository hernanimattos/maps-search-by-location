<template>
  <footer class="footer">
    <div class="footer-container">
      <nav class="footer-column--one">
        <router-link to="/" class="footer-title"
          >Encontre Uma Loja Nike</router-link
        >
        <router-link to="/" class="footer-title"
          >Cadastre-se para receber novidades</router-link
        >
        <router-link to="/" class="footer-title">Mapa do site</router-link>
      </nav>

      <div class="footer-column--two">
        <details class="details">
          <summary>
            <span>AJUDA</span>
          </summary>
          <p class="details-text">
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
        <details class="details">
          <summary><span>SOBRE A NIKE</span></summary>
          <nav class="details-text">
            <ul>
              <li><router-link to="/">Dúvidas Gerais</router-link></li>
              <li><router-link to="/">Encontre seu Tamanho</router-link></li>
              <li><router-link to="/">Entregas</router-link></li>
              <li><router-link to="/">Pedidos</router-link></li>
              <li><router-link to="/">Trocas e Devoluções</router-link></li>
              <li><router-link to="/">Editar consentimento</router-link></li>
              <li><router-link to="/">Preferências de Cookie</router-link></li>
              <li><router-link to="/">Pagamentos</router-link></li>
              <li><router-link to="/">Produtos</router-link></li>
              <li><router-link to="/">Corporativo</router-link></li>
              <li><router-link to="/">Fale Conosco</router-link></li>
            </ul>
          </nav>
        </details>
      </div>

      <div class="footer-column--three">
        <nav class="social-media">
          <h3>REDES SOCIAIS</h3>
          <ul class="social-media--paths">
            <li>
              <a href=""
                ><img
                  src="../assets/images/social-midia/logo_redes_sociais_facebook.svg"
                  alt="facebook nike"
              /></a>
            </li>
            <li>
              <a href=""
                ><img
                  src="../assets/images/social-midia/logo_redes_sociais_instagram.svg"
                  alt="instagram nike"
              /></a>
            </li>
            <li>
              <a href=""
                ><img
                  src="../assets/images/social-midia/logo_redes_sociais_youtube.svg"
                  alt="youtube nike"
              /></a>
            </li>
          </ul>
        </nav>
        <nav class="payment-types">
          <h3 class="title pdb-1rem">
            FORMAS DE PAGAMENTO
          </h3>
          <ul>
            <li>
              <img
                alt="nike aceita pagamento com cartão mastercard"
                src="../assets/images/payment-types/pgto_Mastercard.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com cartão visa"
                src="../assets/images/payment-types/pgto_Visa.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com cartão amex"
                src="../assets/images/payment-types/pgto_Amex.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com carto elo"
                src="../assets/images/payment-types/pgto_Elo.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com cartão hipercard"
                src="../assets/images/payment-types/pgto_Hipercard.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com cartão discover"
                src="../assets/images/payment-types/pgto_Discover.svg"
              />
            </li>
            <li>
              <img
                alt="nike aceita pagamento com boleto"
                src="../assets/images/payment-types/pgto_Boleto.svg"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="terms-politcs">
      <div class="terms-politcs_title">
        <h5>Brasil</h5>
        <h5>Politica e Privacidade</h5>
        <h5>Termos de Uso</h5>
      </div>
      <div>
        <p>
          © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos
          Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues
          Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 -
          Embu das Artes/SP.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'bottom',
};
</script>

<style>
details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
    transform: translatey(-10px);
  }
  100% {
    opacity: 1;
    transform: translatey(0);
  }
}
.footer {
  background-color: var(--black);
  color: var(--white);
  padding-left: var(--gutter);
  padding-right: 1.6rem;
  padding-bottom: 2rem;
}

.footer-container {
  padding-bottom: calc(var(--gutter) * 2);
  padding-top: calc(var(--gutter) * 2);
}

.footer a {
  color: var(--white);
}

.footer-title {
  font-size: var(--gutter);
  font-weight: 700;
  line-height: calc(var(--gutter) * 2);
  text-transform: uppercase;
}

.footer .details > summary {
  list-style-type: none;
  padding: 1.8rem 0 1.8rem 0;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
}

.footer .details > summary span::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 93%;
  border-bottom: 1px solid var(--white);
}

.footer .details > summary span::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 1px;
  border-top: 1px solid var(--white);
  width: 93%;
}

.footer .details > summary::-webkit-details-marker {
  display: none;
}

.footer .details > summary::before {
  content: '+';
  font-size: 5rem;
  position: absolute;
  right: 0.5rem;
  top: 1.2rem;
}

.footer .details[open] > summary::before {
  content: '_';
  top: -0.4rem;
}

.footer .details-text {
  padding: 1.6rem 0 var(--gutter);
}
.footer .details-text a {
  padding: 1.2rem 0 1.2rem 0;
  font-weight: 400;
  font-size: 1.2rem;
}

.social-media--paths {
  display: flex;
}
.social-media--paths li {
  padding-right: 1rem;
  padding-top: 1rem;
}

/* .footer-column--one {
  display: flex;
  flex-direction: column;

} */

.footer-column--one,
.footer-column--two,
.footer-column--three {
  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;
}

.payment-types ul {
  list-style: none;
  display: flex;
  width: 21rem;
  flex-wrap: wrap;
}

.terms-politcs {
  font-size: 12px;
  font-weight: 400;
}

.terms-politcs_title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
</style>
