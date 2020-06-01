# FAQ

## Wat is het verschil tussen MinetopiaSDB v1 en v2?
Een hele boel! De meeste veranderingen zijn achter de schermen, maar er zijn ook een aantal nieuwe functies toegevoegd:
- /prefix
- /prefixkleur 
- /levelkleur.
- Er zijn nu ook goldshards en grayshards toegevoegd die beide een eigen booster hebben. 
- Je kunt in vendingmachines nu ook epic en legendary goodybags kopen.
- Data wordt nu opgeslagen in MySQL of SQLite.
- Je kunt meerdere MinetopiaSDB servers via bungeecord met elkaar combineren, zodat je spelers kunt verspreiden over meerdere servers.


## Hoe krijg ik mijn rank in de tablist of in de chat?
Omdat het /setrank commando niet meer in MinetopiaSDB v2 te vinden is, moet je dit op een andere manier regelen. 
### LuckPerms:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Gebruik het variabele ``%luckperms_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

### PermissionsEx:
- Installeer de plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Gebruik het variabele ``%vault_prefix%`` waar jij wilt (bijvoorbeeld in de ChatFormat of in de tab format)
- Stel prefixes in met het volgende commando: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
