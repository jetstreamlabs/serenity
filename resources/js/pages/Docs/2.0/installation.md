---
title: Installation
description: Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.
tags:
  - introduction
  - installation
---

[[toc]]

## Prerequisites {.doc-heading}

Serenity is not for beginners, and as such, we won't be explaining how to install or configure dependencies or set up your development environment.

Serenity requires the following:

- Composer
- Node/NPM
- MySQL or PostGres Database
- PHP > 8.1 Webserver

Serenity is built and tested on MacOS Ventura 13.3.1 running Laravel Valet 3.3.2

## Installation {.doc-heading}

The most direct way to install Serenity is to install the Serenity installer to your system globally via composer.

```bash
$ composer require --global serenity/installer
```

Once you have the installer, you can create a new installation of the framework by calling the installer and specifying a directory name:

```bash
$ serenity new [myapp, blog, etc]
```

This will install Serenity, all of it's dependencies, and compile all the initial assets for you.

You may also install Serenity using the composer `create-project` command and specifying a directory name like so:

```bash
$ composer create-project serenity/serenity [myapp, blog, etc]
```
