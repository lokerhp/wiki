# Setup

[[toc]]

::: warning
Deze setup guide is alleen geldig voor MinetopiaSDB v2.0 of hoger
:::

## Dependencies

| Serverversie    | WorldEdit | WorldGuard | Essentials | Vault | Citizens (niet verplicht!) |
| :---------------: | :----------------: | :----------------: | :----------------: | :----------------: | :----------------: |
| 1.9.4           | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1371/) |
| 1.10.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/Citizens2/1552/) |
| 1.11.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/Citizens2/1552/) |
| 1.12.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1552/) |
| 1.13.2          | [Download](https://dev.bukkit.org/projects/worldedit/files/2760373/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1687/) |
| 1.14.4          | [Download](https://dev.bukkit.org/projects/worldedit/files/2760373/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1752/) |

## Database setup

::: warning
Wil je MinetopiaSDB met meerdere servers via Bungeecord gebruiken? Zet dan bij
```
Multiserver:
  MessageChannels:
    Enabled: false
``` 
``Enabled:`` op true!
:::


Een van de leukste nieuwe features aan MinetopiaSDB v2 is de ondersteuning voor MySQL databases. Het is nu mogelijk om data op te slaan in een database en op die manier jouw data in meerdere servers te gebruiken (en op die manier jouw spelers ook over verschillende servers te verspreiden.) 

Het is niet verplicht om een database in te stellen, als je niets instelt maak je automatisch gebruik van een lokale SQLite database. De normale MySQL instellingen zien er zo uit:
```
MySQL:
  Enabled: false
  Username: root
  Password: password
  Database: Minetopia
  IP: localhost
  Port: 3306
```
Om gebruik te maken van MySQL moet je ``Enabled:`` op true zetten waarna je jouw MySQL inloggegevens in kan voeren bij de andere velden.



## Data migratie

De manier van data opslaan in MinetopiaSDB v2 is een stuk efficiënter geworden t.o.v. MinetopiaSDB v1, dit betekent helaas wel dat de oude MinetopiaSDB v1 data niet zomaar werkt met de nieuwe MinetopiaSDB versie. Om dit op te lossen hebben we een betaalde data-conversie dienst gelanceerd. Hier kun je tegen een kleine betaling jouw data laten converteren naar de v2 data waardoor je geen gebruikersdata verliest. 

### Maar waarom vragen jullie ineens geld, ik dacht dat MinetopiaSDB gratis was??!?!?!
MinetopiaSDB is en blijft gratis. Het migreren van data is immers vrijwillig. Je kunt prima door gaan met jouw server zonder data om te zetten, alhoewel dit zal betekenen dat jouw spelers weer vanaf 0 moeten beginnen.


### Ik wil mijn data laten migreren naar de nieuwe data, hoe moet dat?
Er zijn twee manieren om jouw data te laten migreren. De eerste manier is om een discord-bericht sturen naar MrWouter#3441, de tweede manier is om een emailtje te sturen naar [datamigratie@minetopiasdb.nl](mailto:datamigratie@minetopiasdb.nl). 
