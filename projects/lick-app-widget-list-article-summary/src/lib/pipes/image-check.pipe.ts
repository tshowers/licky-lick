import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageCheck'
})
export class ImageCheckPipe implements PipeTransform {

  defaultImage: string = "assets/images/attachment.png"

  transform(value: any, args?: any): any {
    return (value && ((value.indexOf('.tiff') > 0) || (value.indexOf('.jpg') > 0) || (value.indexOf('.gif') > 0) || (value.indexOf('.png') > 0) || (value.indexOf('.jpeg') > 0))) ? value : this.defaultImage;
  }

}
