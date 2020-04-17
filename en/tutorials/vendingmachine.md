# Vendingmachine

De MinetopiaSDB plugin heeft vendingmachines waarmee je drie verschillende soorten goodybags kan kopen met grayshards, luckyshards of goldshards (aanpasbaar in de config).
De inhoud van de drie soorten goodybags (normal, epic en legendary) is aanpasbaar met het ``/lootcrate items <normal/epic/legendary>`` commando.
Je kunt een vendingmachine plaatsen door een piston neer te zetten, en hier eventueel een barrier blok boven op te plaatsen.

The MinetopiaSDB plugin has vending machines where you can buy three different types of goodybags with grayshards, luckyshards or goldshards (customizable in the config).
You can change the contents of the three types of goodybags (normal, epic and legendary) with the ``/lootcrate items <normal/epic/legendary>`` command.
You can create a vending machine by placing a piston, and possibly placing a barrier block on top.

## Config
By default, the VendingMachine section in the config looks like this:
```
VendingMachine:
  GoodyBag:
    Item: DIAMOND_HOE:999
  Enabled: true
  ItemCount: 4
  ShardType: LUCKYSHARD
  PriceFormat: '0.0000'
  NormalPrice: 1
  EpicPrice: 2
  LegendaryPrice: 5
```
To use a different type of shard with the vending machines you can change the value of ``ShardType`` to ``LUCKYSHARD``, ``GRAYSHARD`` or ``GOLDSHARD``. Please note, these values **do not** change when you rename your shards.

It's recommended to change the messages in the ``Messages.yml`` file at the ``VendingMachine:`` section, because the default messages standaardteksten assume you're using LuckyShards.

![Vendingmacine](./vendingmachine.png)
