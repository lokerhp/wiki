# BungeeCord

Wil je MinetopiaSDB met meerdere servers via Bungeecord gebruiken? Dat kan, vanaf v2.0! Om dit voor elkaar te krijgen moet je een paar dingen aanpassen. Ten eerste moet je [MySQL instellen](./setup.md#database-setup), vervolgens moet je in de config.yml bij
```yml
Multiserver:
  MessageChannels:
    Enabled: false
``` 

``Enabled:`` op true zetten. Als je dit beide hebt ingesteld wordt al jouw MinetopiaSDB gesynchroniseerd over alle Minetopia servers.

Dit betekent nog niet dat je er helemaal klaar voor bent, jouw inventaris wordt bijvoorbeeld nog niet gesynchroniseerd over alle servers heen, hiervoor kun je bijvoorbeeld [deze](https://www.spigotmc.org/resources/mysql-inventory-bridge.7849/) plugin gebruiken. 

Voor de fitheid zijn een aantal Minecraft-achievements erg belangrijk, deze worden standaard nog niet over jouw BungeeCord netwerk gesynchroniseerd waardoor jouw gelopen kilometers per server verschillen. 

Misschien wel het belangrijkste van allemaal, omdat het banksaldo van privé-rekeningen via Vault geregeld wordt, synchroniseert MinetopiaSDB deze data niet. Je kunt een [Essentials data synchronisatie](https://www.spigotmc.org/resources/essentials-mysql-storage-extension.25673/) plugin gebruiken maar het handigste is om [MinetopiaEconomy](https://www.spigotmc.org/resources/minetopiaeconomy.53610/) van [TheMelvinNL](https://themelvin.nl/) te gebruiken. 