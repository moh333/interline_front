<template>
  <div class="g-map-map" id="bottom_panel">
    <GmapMap :center="center" :zoom="12"/>
    <div class="g-map-map-resize"></div>
  </div>
</template>

<script>
/* eslint eqeqeq: "off", curly: "error" */
export default {
  name: "GoogleMap",
  props: {
    height: {
      type: String,
      default: () => { }
    }
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 }
    };
  },
  mounted() {
    this.geolocate();
    const BORDER_SIZE = 6;
    const panel = document.getElementById("bottom_panel");

    let m_pos;
    function resize(e) {
      const dx = m_pos - e.y;
      m_pos = e.y;
      panel.style.height = (parseInt(getComputedStyle(panel, '').height) - dx) + "px";
    }

    panel.addEventListener("mousedown", function (e) {
      if (e.offsetY < BORDER_SIZE) {
        m_pos = e.y;
        console.log(m_pos);
        document.addEventListener("mousemove", resize, false);
      }
    }, false);

    document.addEventListener("mouseup", function () {
      document.removeEventListener("mousemove", resize, false);
    }, false);
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
