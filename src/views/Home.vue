<template>
  <container>
    <div class="home">
      <navigation />
      <news-promotion-header />
      <search />
      <search-result />

      <modal :open="true"><MapContainer /></modal>

      <call-to-action v-bind="teste">
        <template #top>
          <img src="../assets/images/logos/logo_nike.svg" alt="" />
        </template>
        <template #description>
          <div class="description">
            <h3 class="title">
              RECEBA AS NOVIDADES DA NIKE
            </h3>
            <p class="text-description">
              Cadastre-se e seja um dos primeiros a saber de todas as novidades
              e ofertas.
            </p>
          </div>
        </template>
      </call-to-action>
      <bottom />
    </div>
  </container>
</template>

<script>
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import NewsPromotionHeader from '@/components/NewsPromotionHeader';
import Search from '@/components/Search';
import CallToAction from '@/components/CallToAction';
import Bottom from '@/components/Bottom';
import SearchResult from './SearchResult';
import Modal from '@/components/Modal';
import MapContainer from '@/components/MapContainer';

export default {
  name: 'Home',
  data: () => ({
    lat: null,
    lng: null,

    teste: {
      description:
        ' Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.',
      bottom: 'Cadastre-se',
    },
  }),

  components: {
    Container,
    Navigation,
    NewsPromotionHeader,
    Search,
    CallToAction,
    Bottom,
    SearchResult,
    Modal,
    MapContainer,
  },
};
</script>
<style>
#map {
  height: 600px;
  background: gray;
}
</style>
