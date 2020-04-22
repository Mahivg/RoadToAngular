import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ht-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() onFeatureChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  featureChanged(feature: string) {
    this.onFeatureChange.emit(feature);
  }
}
