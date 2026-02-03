import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [],
  templateUrl: './fullscreen-map-page.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
      background-color: #09f;
    }

    #controls {
      background-color:white;
      padding:10px;
      border-radius:5px;
      position:fixed;
      bottom:20px;
      right:20px;
      z-index:9999;
      box-shadow:0 0 10px 0 rgba(0,0,0,0.1);
      border:1px solid #e2e8f0;
      width: 250px
    }
  `,
})
export class FullscreenMapPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  zoom = signal(5)

  map = signal<maplibregl.Map | null>(null)

  zoomEffect = effect(() => {
    if (!this.map()) return;

    this.map()?.setZoom(this.zoom())
  })

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;
    const element = this.divElement()?.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container id
      style: 'https://demotiles.maplibre.org/globe.json', // style URL
      center: [10, 0], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    this.map.set(map)
  }
}
