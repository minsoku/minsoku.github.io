---
emoji: 🐶
title: nestjs
date: '2021-03-22 23:00:00'
author: minsoku
tags: nestjs
categories: nestjs ts
---

- [Nestjs](https://nestjs.com/)는 효율적이고 스케일링이 쉬운 nodejs 서버를 만드는데 사용하는 프레임워크이다.
- 차세대 Javascript를 사용하며 Typescript로 만들어졌으며 Typescript를 완전히 지원한다.
- Nestjs는 Express 같은 견고한 HTTP 서버 프레임워크를 사용하고 있으며 원한다면 Fastify를 대신 사용할 수 있다.
- 상당히 많은 Nodejs 라이브러리, 헬퍼, 툴들이 있음에도 불구하고 아키텍처 설계에 대한 문제를 해결해주는 해결책은 존재하지 않는다.
- Nestjs는 자체적으로 서버 아키텍쳐를 제공해준다. 그래서 테스트하기 쉽고, 디커플링이 잘 되어있고, 유지보수가 편한 서버를 제작하게 해준다.

# Nestjs LifeCycle

![Nestjs LifeCycle](https://velog.velcdn.com/images/minsoku03/post/b67672cd-fdea-4067-ab80-02e15b3ffdb3/image.png)

## Pipe

- Pipe는 Injectable 데코레이터로 데코레이팅 되어있고, PipeTransform이라는 인터페이스를 implement한다.
- 변형: 원하는 형태로 변형시켜준다 ex) string => integer
- 검증: 만약에 유효한 데이터면 그대로 전달해주고 아닐 경우에는 에러를 던진다.