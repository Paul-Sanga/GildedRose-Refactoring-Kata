import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {

  it('should increase quality of Aged Brie product and decrease sellIn', ()=>{
    let item: Item[] = [new Item('Aged Brie', 30, 39)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].sellIn).toEqual(29)
    expect(guildedRose.items[0].quality).toBe(40)
  })

  it('should maintain quality of Aged Brie product if quality is at 50 and decrease sellIn', ()=>{
    let item: Item[] = [new Item('Aged Brie', 30, 50)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].sellIn).toEqual(29)
    expect(guildedRose.items[0].quality).toEqual(50)
  })

  it('should maintain quality of Sulfuras and decrease sellIn', ()=>{
    let item: Item[] = [new Item('Sulfuras', 30, 80)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(80)
    expect(guildedRose.items[0].sellIn).toEqual(29)
  })

  it('should decrease quality and sellIn of Conjured', ()=>{
    let item: Item[] = [new Item('Conjured',30,40)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(38)
    expect(guildedRose.items[0].sellIn).toEqual(29)
  })

  it('should return quality as zero if subtraction of quality will lead to a number less than zero for Conjured', ()=>{
    let item: Item[] = [new Item('Conjured',30,1)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(0)
    expect(guildedRose.items[0].sellIn).toEqual(29)
  })

  it('should set quality to 0 and decrease sellIn date if Backstage passes is past its sellIn date', ()=>{
    let item: Item[] = [new Item('Backstage passes',-1,50)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(0)
    expect(guildedRose.items[0].sellIn).toEqual(-2)
  })

  it('should increase quality by three if sellIn date is equal to or less than 5 and decreement sellIn by one for the Backstage passes', ()=>{
    let item: Item[] = [new Item('Backstage passes',5,37)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(40)
    expect(guildedRose.items[0].sellIn).toEqual(4)
  })

  it('should set quality at 50 if increasing quality will lead to a value greater than 50 for Backstage passes', ()=>{
    let item: Item[] = [new Item('Backstage passes',5,57)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(50)
    expect(guildedRose.items[0].sellIn).toEqual(4)
  })

  it('should increase quality by two if sellIn date is equal or less than ten and decremenet sellIn for Backstage passes', ()=>{
    let item: Item[] = [new Item('Backstage passes',10,11)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(13)
    expect(guildedRose.items[0].sellIn).toEqual(9)
  })

  it('should set quality to 50 if increasing quality will lead to a value greater than 50', ()=>{
    let item: Item[] = [new Item('Backstage passes',10,49)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(50)
    expect(guildedRose.items[0].sellIn).toEqual(9)
  })

  it('should reduce the sellIn and quality of any other item by one', ()=>{
    let item: Item[] = [new Item('Others',10,49)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(48)
    expect(guildedRose.items[0].sellIn).toEqual(9)
  })

  it('should set the quality of any other product to zero if subtraction leads to a number lower than zero', ()=>{
    let item: Item[] = [new Item('Others',10,0)]
    let guildedRose: GildedRose = new GildedRose(item)
    guildedRose.updateQuality()
    expect(guildedRose.items[0].quality).toEqual(0)
    expect(guildedRose.items[0].sellIn).toEqual(9)
  })
});
