import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(description: string, wordLimit: number = 20): string {
    const words = description.split(' ');
    const truncatedWords = words.slice(0, wordLimit);
    let truncatedDescription = truncatedWords.join(' ');

    if (words.length > wordLimit) {
      truncatedDescription += '...';
    }

    return truncatedDescription;
  }
}
