import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import maplibregl, { Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;
    const element = this.divElement()?.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container id
      style: 'https://demotiles.maplibre.org/globe.json', // style URL
      center: [-79.062518, -8.070393], // starting position [lng, lat]
      zoom: 5, // starting zoom
    });

    const marker = new maplibregl.Marker({
      draggable: false,
      color: 'black',
    })
      .setLngLat([-79.062518, -8.070393])
      .addTo(map);

    marker.on('dragend', (event) => {
      console.log(event);
    });

    this.mapListeners(map);
  }

  mapListeners(map: maplibregl.Map) {
    console.log('obj');
  }
}
