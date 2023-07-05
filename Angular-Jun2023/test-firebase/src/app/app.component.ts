import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { storage } from 'src/firebase'
import { ref, uploadBytes, getMetadata, getDownloadURL } from 'firebase/storage'
import tt from '@tomtom-international/web-sdk-maps'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit () {
    const map = tt.map({
      key: 'jCcpht8Igo9gAxQI97mUdla41kQBuBL7',
      container: 'map',
      center: [11.85, 46.43],
      zoom: 8
    })
    map.addControl(new tt.NavigationControl())

    const marker = new tt.Marker().setLngLat([11.85, 46.43]).addTo(map);
  }

  onFileSelected (event: any) {
    //console.log(event.target.files);
    //const file:File = event.target.files[0];

    for (const file of event.target.files) {
      const storageRef = ref(storage, file.name)

      uploadBytes(storageRef, file).then(snapshot => {
        console.log('Uploaded a blob or file!')

        getMetadata(storageRef).then(metadata => {
          console.log(metadata)
        })

        getDownloadURL(storageRef).then(url => {
          console.log(url)
        })
      })
    }
  }
}
