<script>
export default {
  name: 'AboutUsContent',
}
</script>

<template>
  <div>
    <section class="section-hero" id="section1">
      <div class="content-left">
        <h2>Start Up</h2>
        <p>Un team di giovani intraprendenti e appassionati che s'impegnano ad offrire il meglio. Siamo l'innovazione: analizziamo le tendenze emergenti e ci adattiamo alle nuove sfide, dando via a soluzioni lungimiranti..che anticipano le necessità del mercato..</p>
      </div>
    </section>
    <section class="section-content" id="section2">
      <div class="content-left">
        <h2>Mission</h2>
        <p>Puntiamo in alto e lo facciamo offrendo un servizio impeccabile, preciso e costruito a partire dalle esigenze delle persone. La nostra missione è l'eccellenza. Ci lasciamo guidare da un profondo rispetto per l'etica professionale e una devozione alla causa. Ogni progetto è un'opportunità per dimostrare il nostro impegno e la nostra presenza.</p>
      </div>
    </section>
    <section class="section-content" id="section3">
      <div class="content-left2">
        <h2>Etica Aziendale</h2>
        <ul>
          <li><span class="highlight green">TRASPARENZA:</span> Fiducia, base di ogni relazione duratura e fruttifera, si costruisce con l'onestà degli intenti e la chiarezza della forma.</li>
          <li><span class="highlight orange">RESPONSABILITÀ:</span> sentiamo un forte senso di responsabilità verso l'ambiente e le comunità entro cui operiamo, e ci impegniamo attivamente nell'obiettivo di creare un futuro migliore. <a href="https://www.youtube.com/watch?v=d_mo1D7joI4&ab_channel=NinoPansera" target="_blank">Scopri di più</a></li>
          <li><span class="highlight yellow">SVILUPPO:</span> il progresso individuale e quello collettivo procedono di paripasso. Promuoviamo un ambiente lavorativo dinamico, consci che si cresce solo a partire da un armonioso e sinergico lavoro di squadra.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

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

.content-left, .content-right {
  max-width: 50%;
  background: rgba(215, 226, 212, 0.3); 
  padding: 6px; 
  border-radius: 5px; 
}

.content-left {
  text-align: left;
  margin-right: auto; 
}

.content-right {
  text-align: right;
  margin-left: auto; 
}

.content-left1 {
  text-align: left;
  max-width: 30%;
  background: rgba(157, 168, 155, 0.3); 
  padding: 6px; 
  border-radius: 5px; 
}

.content-left2 {
  text-align: left;
  max-width: 100%;
  background: rgba(142, 168, 137, 0.3); 
  padding: 6px; 
  border-radius: 5px; 
}

h1, h2 {
  margin-bottom: 20px;
  font-weight: bold;
}

h2 {
  color: #333; 
}

p, ul {
  font-size: 0.9em;
  line-height: 1.6;
  color: #333; 
  font-weight: bold;
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
  font-family: 'Roboto', sans-serif;
  padding: 2px 4px;
  border-radius: 3px;
}

.highlight.green {
  color: #fff;
  background-color: #7EBC89;
  font-size: 1.2em;
}

.highlight.orange {
  color: #fff;
  background-color: #FE5D26;
  font-size: 1.2em;
}

.highlight.yellow {
  color: #333;
  background-color: #F3DE2C;
  font-size: 1.2em;
}

#section3 ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

#section3 ul li {
  flex: 0 0 30%; 
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
}
</style>