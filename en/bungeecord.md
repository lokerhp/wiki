# BungeeCord

Do you want to use MinetopiaSDB on multiple servers using Bungeecord? That's possible, from v2.0! To get this done you have to adjust a few things. First of all, you'll need to [setup MySQL](./setup.md#database-setup), after that you need to change ``Enabled:`` to true here:
```yml
Multiserver:
  MessageChannels:
    Enabled: false
``` 
If you've setup MySQL correctly and enabled the MessageChannels, all your MinetopiaSDB data will be synchronized across all of your Minetopia servers.

This does not mean that you are completely ready, for example, your inventory is not synchronized across all servers, for example you can use [this](https://www.spigotmc.org/resources/mysql-inventory-bridge.7849/) plugin. 

A number of Minecraft achievements are very important for fitness, these achievements are not synchronized by default over your BungeeCord network, which means that your 'Walked kilometers' will differ per server.


Perhaps the most important of all, the bank balance of private accounts is controlled via Vault, MinetopiaSDB does not synchronize this data. You can use an [Essentials data synchronisation](https://www.spigotmc.org/resources/essentials-mysql-storage-extension.25673/) plugin, but using a plugin such as [MinetopiaEconomy](https://www.spigotmc.org/resources/minetopiaeconomy.53610/) by [TheMelvinNL](https://themelvin.nl/) is a better option.  
