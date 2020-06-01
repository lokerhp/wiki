# FAQ

## What are the difference between MinetopiaSDB v1 and v2?
There are a lot! Most of the changes are behind the scenes, but a couple of cool features have been added:
- /prefix
- /prefixcolor 
- /levelcolor
- Goldshards and grayshards have been added, these both have their own booster. 
- You can now buy epic and legendary goodybags in vending machines. 
- Data is now being stored in MySQL or SQLite.
- You can combine multiple MinetopiaSDB servers via Bungeecord, to spread players over multiple servers.


## Hoe can I get my rank in the chat or tablist?
Because the /setrank command isn't present in MinetopiaSDB v2 anymore, you'll have to do it a different way.
### LuckPerms:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download LuckPerms
- /papi reload
- Use the placeholder ``%luckperms_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/lp user <user> meta setprefix <prefix>`` of ``/lp group <group> meta setprefix <prefix>``

### PermissionsEx:
- Install the plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- /papi ecloud download Vault 1.6.0
- /papi reload
- Use the placeholder ``%vault_prefix%`` where you want it (for example in the chatformat or the tabformat)
- Change prefixes with this command: ``/pex user <user> prefix <prefix>`` of ``/pex group <group> prefix <prefix>``
