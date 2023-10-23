import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {

  it('should increase quality of Aged Brie product', ()=>{
    let item: Item[] = [new Item('Aged Brie', 30, 39)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].sellIn).toEqual(29)
    expect(guildedRose.items[0].quality).toBe(40)
  })

  it('should maintain quality of Aged Brie product if quality is at 50', ()=>{
    let item: Item[] = [new Item('Aged Brie', 30, 50)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].sellIn).toEqual(29)
    expect(guildedRose.items[0].quality).toEqual(50)
  })

  it('should maintain quality of')

});
