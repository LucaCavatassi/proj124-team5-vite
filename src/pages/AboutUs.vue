<script>
export default {
  name: 'AboutUs',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<template>
  <div class="about-us">
    <section class="section-hero" id="section1">
      <div class="content-left">
        <h2>Start Up</h2>
        <p>Un team di giovani intraprendenti e appassionati che s'impegnano ad offrire il meglio. Siamo l'innovazione: analizziamo le tendenze emergenti e ci adattiamo alle nuove sfide, dando via a soluzioni lungimiranti..che anticipano le necessità del mercato.. </p>
      </div>
    </section>
    <section class="section-content" id="section2">
      <div class="content-left ">
        <h2>Mission</h2>
        <p>Puntiamo in alto e lo facciamo offrendo un servizio impeccabile, preciso e costruito a partire dalle esigenze delle persone. La nostra missione è l'eccellenza. Ci lasciamo guidare da un profondo rispetto per l'etica professionale e una devozione alla causa. Ogni progetto è un'opportunità per dimostrare il nostro impegno e la nostra presenza.</p>
      </div>
    </section>
    <section class="section-content" id="section3">
      <div class="content-left ">
        <h2>Etica Aziendale</h2>
        <ul>
          <li><span class="highlight green">TRASPARENZA:</span>  Fiducia, base di ogni relazione duratura e fruttifera, si costruisce con l'onestà degli intenti e la chiarezza della forma.</li>
          <li><span class="highlight orange">RESPONSABILITÀ SOCIALE:</span> sentiamo un forte senso di responsabilità verso l'ambiente e le comunità entro cui operiamo, e ci impegniamo attivamente nell'obiettivo di creare un futuro migliore. <a href="https://www.youtube.com/watch?v=d_mo1D7joI4&ab_channel=NinoPansera" target="_blank">Scopri di più</a></li>
          <li><span class="highlight yellow">SVILUPPO COLLETTIVO:</span> il progresso individuale e quello collettivo procedono di paripasso. Promuoviamo un ambiente lavorativo dinamico, consci che si cresce solo a partire da un armonioso e sinergico lavoro di squadra.</li>
        </ul>
      </div>
    </section>
    <div class="text-center my-5">
      <button class="btn btn-primary mb-5" @click="goBack">Torna Indietro</button>
    </div>
  </div>
</template>

<style scoped>

.about-us {
  font-family: 'Merriweather', serif; 
  background-color: #7EBC89; 
}

.section-hero, .section-content {
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
}

.section-hero {
  background-image: url('../assets/img/m.jpg');
  height: 60vh;
  margin-bottom: 20px; 
}

.section-content {
  height: 50vh;
  padding: 40px;
  margin-bottom: 20px; 
}

#section2 {
  background-image: url('../assets/img/n.jpg');
}

#section3 {
  background-image: url('../assets/img/c.jpg');
  text-align: center; 
}

.content-left {
  text-align: left;
  max-width: 70%;
}

.content-right {
  text-align: right;
  max-width: 50%;
}

.content-full {
  max-width: 100%;
  text-align: center; 
}

h1, h2 {
  margin-bottom: 20px;
  font-weight: bold;
}



h2 {
  color: #333; 
}

p, ul {
  font-size: 1.1em;
  line-height: 1.6;
  color: #333; 
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  background: url('/src/assets/check.svg') no-repeat left center;
  background-size: 1em;
  padding-left: 1.5em;
  margin-bottom: 0.5em;
}

.highlight {
  font-weight: bold;
  text-transform: uppercase;
}

.highlight.green {
  color: #7EBC89;
}

.highlight.orange {
  color: #FE5D26;
}

.highlight.yellow {
  color: #F3DE2C;
}

.btn-primary {
  background-color: #FE5D26; 
  border-color: #FE5D26;
  font-size: 1.2em;
  padding: 10px 20px;
}

.btn-primary:hover {
  background-color: lighten(#FE5D26, 10%);
  border-color: lighten(#FE5D26, 10%);
}

#section3 ul {
  columns: 2; 
  column-gap: 40px; 
}
</style>