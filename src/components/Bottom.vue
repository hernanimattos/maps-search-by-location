<template>
  <footer class="footer">
    <details class="details">
      <summary>AJUDA</summary>
      <p class="details-text">
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
      </p>
    </details>
    <details class="details">
      <summary>AJUDA</summary>
      <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
      </p>
    </details>
  </footer>
</template>

<script>
export default {
  name: "bottom",
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
  background-color: #000;
  color: #fff;
}

.footer .details {
  padding: 0 1.6rem 0 1.6rem;
}

.footer .details > summary {
  list-style-type: none;
  padding: 1.8rem 0 1.8rem 0;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  border-top: solid #fff 1px;
  border-bottom: solid #fff 1px;
}

.footer .details > summary::-webkit-details-marker {
  display: none;
}

.footer .details > summary::before {
  content: "+";
  font-size: 5rem;
  position: absolute;
  right: 1.6rem;
  top: 1.2rem;
}

.footer .details[open] > summary::before {
  content: "_";
  top: -0.4rem;
}

.footer .details-text {
  padding: 1.6rem 0 1.6rem;
}
</style>
