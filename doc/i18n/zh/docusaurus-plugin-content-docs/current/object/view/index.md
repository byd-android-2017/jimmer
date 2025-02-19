---
sidebar_position: 5
title: DTO转换 
---

必要时，我们不得不在Jimmer动态对象和静态DTO对象之间彼此转换，为此Jimmer提供了两种方法

-   使用Jimmer附带的DTO语言，基于实体类型快速定义若干个数据结构的形状，用于生成DTO类型、和实体之间的转换逻辑，以及查询逻辑([对象抓取器]/(../../query/object-fetcher))

-   自己定义DTO类型，并使用[mapstruct](https://mapstruct.org/)彼此转换

:::tip
无论是代表任何数据结构形状的动态实体对象，还是根据特定据结构形状对应的静态DTO对象，二者在Jimmer看来是等价的，都能被作为一个整体使用一行代码查询或使用一行代码保存。

因此，开发人员只需负责动态实体和静态DTO对象之间彼此转换即可。从数据库和缓存操作的角度来看，无任何额外成本。
:::