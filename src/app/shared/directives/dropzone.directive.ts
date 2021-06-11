import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropzone]',
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();
  @HostListener('drop', ['$event'])
  onDrop($event: any): void {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }
  @HostListener('dragover', ['$event'])
  onDropOver($event: any): void {
    $event.preventDefault();
    this.hovered.emit(true);
  }
  @HostListener('dragLeave', ['$event'])
  onDropLeave($event: any): void {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
