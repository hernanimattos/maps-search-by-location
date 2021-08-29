<template>
  <article class="card-address">
    <header>
      <div class="card-address_header">
        <h3 class="title">
          {{ title }}
        </h3>
        <div class="distance title">
          {{ distance }}
        </div>
      </div>
      <div class="card-address_redirect">
        <img src="../assets/images/icons/icon_pin_link.svg" alt="" />
        <div class="card-address_redirect__map">Ver mapa</div>
      </div>
    </header>
    <main class="card-address_address">
      <p class="card-address_address__title ">
        Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200
      </p>
      <div>
        <p>Atendimento:</p>
        <p>Atendimento: Segunda a Sábado 10h às 22h | Domingo 11h às 20h</p>
      </div>
    </main>
  </article>
</template>

<script>
export default {
  name: 'card-address',
  props: {
    title: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card-address {
  padding: 1.6rem;
  background-color: var(--bg-gray);
  border-radius: 10px;
}

.card-address .title {
  text-transform: uppercase;
}

.card-address_header {
  display: flex;
  justify-content: space-between;
}

.card-address_redirect {
  display: flex;
  align-items: baseline;
  cursor: pointer;
}

.card-address_redirect__map {
  text-decoration: underline;
  margin-left: 1rem;
}

.card-address_address {
  color: var(--gray);
  background-color: var(--white);
  padding: 2.4rem;
  border-radius: 10px;
  margin-top: 1.6rem;
  font-weight: 400;
  line-height: 2.3rem;
}

.card-address_address__title {
  padding-bottom: 0.8rem;
  font-size: 1.4rem;
}
.card-address_address__service {
  font-size: 1.2rem;
}

/* .card-address_main {
  line-height: 4rem;
} */
</style>
