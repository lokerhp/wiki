# Setup

[[toc]]

::: warning
This setup guide is for MinetopiaSDB v2.0 and up
:::

## Dependencies

| Serverversion    | WorldEdit | WorldGuard | Essentials | Vault | Citizens (optional) |
| :--------------- | :---------------- | :---------------- | :---------------- | :---------------- | :---------------- |
| 1.9.4 | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1371/) |
| 1.10.2 | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/Citizens2/1552/) |
| 1.11.2 | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/Citizens2/1552/) |
| 1.12.2 | [Download](https://dev.bukkit.org/projects/worldedit/files/2460562/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1552/) |
| 1.13.2 | [Download](https://dev.bukkit.org/projects/worldedit/files/2760373/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1687/) |
| 1.14.4 | [Download](https://dev.bukkit.org/projects/worldedit/files/2760373/download) | [Download](https://dev.bukkit.org/projects/worldguard/files/956770/download) | [Download](https://www.spigotmc.org/resources/essentialsx.9089/download?version=286847) | [Download](https://dev.bukkit.org/projects/vault/files/2704903/download) | [Download](https://ci.citizensnpcs.co/job/citizens2/1752/) |

## Database setup

::: tip
Do you want to use MinetopiaSDB over multiple servers with Bungeecord? Than change the value of ``Enabled:`` to true here:
```
Multiserver:
  MessageChannels:
    Enabled: true
``` 
:::


One of the best new features of MinetopiaSDB v2 is MySQL database support. It is now possible to store data in a database and synchronise your data across multiple servers.

It is not required to set up a database, if you do not set anything you will automatically use a local SQLite database. The normal MySQL settings look like this:
```
MySQL:
  Enabled: false
  Username: root
  Password: password
  Database: Minetopia
  IP: localhost
  Port: 3306
```
To use MySQL, you must change `` Enabled: `` to true, after which you can enter your MySQL login data in the other config fields.

## Data migration

Saving data has become a lot more efficient in the v2 update of MinetopiaSDB. Unfortunately, this also means that the old v1 data cannot be transferred easily. The data needs be converted for it to be usable in the v2 update of MinetopiaSDB. To solve this problem we have launched a paid data migration service. With this service it is possible to have your data converted to the v2 data for a small fee so that you retain all player data.

### But why are you suddenly asking for money, I thought MinetopiaSDB was free?
MinetopiaSDB is and remains free. After all, migrating data is voluntary. You can continue to use your server without converting data, although this will mean that your players will have to start from 0 again.

### I want to migrate my data to the new data, how can I do this?
You can convert your data by sending an email to [datamigration@minetopiasdb.nl](mailto:datamigration@minetopiasdb.nl).
