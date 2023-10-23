export class Item{
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number){
      this.name = name
      this.sellIn = sellIn
      this.quality = quality
  }
}

export class GildedRose{
  items: Array<Item>

  constructor(items = [] as Array<Item>){
      this.items = items
  }

  updateQuality(): Array<Item>{

      for(let i:number = 0; i<this.items.length; i++){
          if(this.items[i].name == 'Aged Brie' && this.items[i].quality < 50){
              this.items[i].quality += 1;
              this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Aged Brie' && this.items[i].quality == 50){
            this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Sulfuras'){
              this.items[i].quality = this.items[i].quality == 80 ? this.items[i].quality : 80;
              this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Conjured' && this.items[i].quality > 0){
              this.items[i].quality = ((this.items[i].quality -=2) >= 0) ? this.items[i].quality : 0;
              this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Backstage passes' && this.items[i].sellIn < 0){
              this.items[i].quality = 0;
              this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Backstage passes' && this.items[i].sellIn <= 5){
              this.items[i].quality = ((this.items[i].quality +=3) > 50) ? 50 : this.items[i].quality;
              this.items[i].sellIn -= 1;
          }else if(this.items[i].name == 'Backstage passes' &&  this.items[i].sellIn <= 10){
              this.items[i].quality = ((this.items[i].quality +=2) > 50) ? 50 : this.items[i].quality;
              this.items[i].sellIn -= 1;
          }else{
              this.items[i].quality = ((this.items[i].quality -= 1) <= 0) ? 0 : this.items[i].quality;
              this.items[i].sellIn -= 1;
          }
      }

      return this.items;
  }
}