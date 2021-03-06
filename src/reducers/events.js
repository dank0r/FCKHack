import Event from "../components/Event";
import React from "react";

let initialState = {
  list: [
    {
      title:"Хакатон ФЦК",
      location:"2-й этаж КСП",
      time:"29 февраля, 10:00",
      description:"С 29 февраля по 1 марта в Долгопрудном пройдёт хакатон «ФЦК» от Phystech.Genesis и Фонда целевого капитала (ФЦК) МФТИ.",
      tags:['Machine Learning', 'Хакатон', 'ФЦК', 'МФТИ', 'Разработка'],
    },
    {
      title:"Cпектакль Миллиард лет до конца света",
      location:"КЗ",
      time:"1 марта, 10:00",
      description:"Концерт",
      tags:['Концерт', 'Искусство', 'Физтех', 'МФТИ'],
    },
  ],
  isLoading: false,
  error: null,
};
/*
let initialState2 = JSON.parse(`[
  {
    "description": "В пятницу, 28 февраля, состоится лекция «Ухо как модельный орган для разработки лекарств против нейродегенерации». Язык лекции — английский.\n\nЛектор — Ганс Роммелспахер, доктор медицины, глава отделения клинической нейробиологии в психиатрической клинике Университета Шарите. Научные исследования профессора привели к открытию нейромодуляторов, которые сейчас используют для лечения глухоты.\n\nНа лекции вы узнаете, как устроено восприятие звука у человека, какими симптомами сопровождается потеря слуха, как создаются лекарства, способные защитить внутреннее ухо от дальнейшего повреждения или восстановить уже нарушенные нейронные связи.\n\n28 февраля 14:00, 105 БК\nЛекция «Ухо как модельный орган для разработки лекарств против нейродегенерации»",
    "location": "105, БФК",
    "start_time": "14:00 28.02.2020",
    "tags": "биология",
    "img_url": "https://sun9-63.userapi.com/c205424/v205424842/6d001/sl3EANzcNpk.jpg",
    "s": "s",
  },
  {
    "description": "Завтра, 26 февраля, на общефизическом научном семинаре будет прочитан доклад «Неклассический свет в лазерных детекторах гравитационных волн».\n\nДокладчик — Фарид Халили, профессор МГУ, руководитель научной группы «Квантовая оптомеханика» Международного центра квантовой оптики и квантовых технологий, профессор (по совместительству) кафедры Российского квантового центра Физтех-школы ЛФИ.\n\nНа лекции вы узнаете, какие методы подавления или обхода флуктуаций света в лазерных детекторах гравитационных волн используются в настоящее время и какие более сложные, но также и более многообещающие методы, например, частотно-зависимое сжатие, рассматриваются для реализации в будущих детекторах.\n\n26 февраля 17:00, 119 ГК\nДоклад «Неклассический свет в лазерных детекторах гравитационных волн»",
    "location": "119 ГК",
    "start_time": "17:00 26.02.2020",
    "tags": "физика",
    "img_url": "https://sun9-50.userapi.com/c205424/v205424842/6d071/6EJjsH2fdsw.jpg",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": ""
  },
  {
    "description": "[club160873875|CulturALL Reboot] открывает набор на новый курс «Промышленный дизайн».\n\nКурс направлен на приобретение навыков создания эскизов различных продуктов, вы освоите основы перспективного построения, скетчинг геометрической формы с телами вращения, композицию листа, научитесь представлять на бумаге рисунок по воображению, «из головы».\n\nПреподаватель — Алексей Якименко, художник, дизайнер, доцент кафедры дизайна средств транспорта МГХПА им. Строганова. Лауреат Премии Правительства РФ.\n\nРегистрация до 10 марта: vk.cc/alg6Nr. В курсе 4 занятия, которые будут проходить по воскресеньям с 16:00 до 20:00 в 105 БФК. Занятия начинаются 15 марта.",
    "location": "105 БФК",
    "start_time": "16:00 14.03",
    "tags": "CulturALL Reboot, культура",
    "img_url": "https://sun9-56.userapi.com/c858416/v858416780/181c17/RI0d2oZTdiw.jpg",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": ""
  },
  {
    "description": "Открыт набор на факультатив: «Практика программирования с использованием Python». На выбор есть две траектории обучения:\n\n• «Web-технологии на Python + Flask». В рамках этой программы вы научитесь писать динамические сайты, работать с базами данных, а также создавать абстрактные сервера, например, для мобильных приложений.\n\n• «Анализ данных на Python». На занятиях вы научитесь работать с изображениями, текстами, графами и другими типами данных. Также вы узнаете, как извлекать из данных полезную информацию, проверять гипотезы и создавать качественную аналитику и коснётесь основ моделирования и машинного обучения.\n\nФакультатив проходит по субботам с 15:30 до 18:00 в 317 ЛК и 319 ЛК. Записаться на курс можно, заполнив форму по ссылке vk.cc/apPkOY. Более подробную информацию можно найти в [club192300300|группе факультатива] и в телеграмм-канале vk.cc/apPm6O.",
    "location": "317 ЛК и 319 ЛК",
    "start_time": "15:30 7.03",
    "tags": "программирование, анализ данных",
    "img_url": "https://sun9-27.userapi.com/c858216/v858216212/1938fd/GtSE_4bSXpo.jpg",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": ""
  },
  {
    "description": "29 февраля по 1 марта пройдет хакатон по оптимизации коммуникации администрации МФТИ и студентов. Участникам хакатона предстоит решить одну из четырех задач:\n\n• создать приложение (iOS/Android) для студентов Физтеха, с помощью которого можно будет оперативно получать информацию об изменениях в расписании и сообщать о возможных проблемах;\n• предложить онлайн-систему обратной связи по качеству образования и НИР на базовых кафедрах Физтеха;\n• предложить онлайн-систему обратной связи по бытовым вопросам к администрации МФТИ;\n• создать чат-бот приемной комиссии с функционалом для абитуриентов и родителей, студентов и преподавательского состава.\n\nПобедители получат ценные призы, а лучшие проекты будут финансово поддержаны [club126083726|Фондом целевого капитала МФТИ].",
    "location": "",
    "start_time": "00:00 29.02.2020",
    "tags": "хакатоны",
    "img_url": "https://sun9-38.userapi.com/c858132/v858132916/189e32/9qSOKw6yoww.jpg",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": ""
  },
  {
    "description": "27 февраля в 19:10 в учебном центре 1С-МФТИ состоится первый научный семинар лаборатории комбинаторных и геометрических структур!\n\nОсновная цель семинаров — обзорные доклады на различные темы, преимущественно связанные с дискретной математикой. В силу широты тематики предполагается, что в докладах будут объясняться все основные понятия излагаемой теории и изложение будет вестись на доступном языке.\n\nПервый доклад:\nШкредов И.Д.\n«Суммы произведений: от теории чисел к росту в группах и обратно»\nВ докладе будет дан обзор теории сумм произведений и ее связей с задачами теории чисел, геометрии, аддитивной комбинаторики, динамических систем, компьютерной информатики, теории групп. Также вы узнаете о некоторых классических результатах данной науки и последних ее достижений.\n\nСайт: http://combgeo.org/events-ru/seminar/lab-seminar/\n&#128467;27 февраля (четверг)\n&#128340; 19:10 - 18:30\n&#128205; Учебный центр 1С-МФТИ(метро Тимирязевская, Дмитровское шоссе, д.6), аудитория 9235. Вход в здание свободный.",
    "location": "Учебный центр 1С",
    "start_time": "00:00 27.02.2020",
    "tags": "математика",
    "img_url": "https://sun9-39.userapi.com/c855220/v855220843/202620/nvetsXOtOzo.jpg",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": ""
  }
]`);
*/

const events = (state = {...initialState, isLoading: false, error: null}, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST':
      return {...state, isLoading: true};
    case 'FETCH_EVENTS_SUCCESS':
      console.log(action);
      return {list: action.payload.data.map(e => e.fields), isLoading: false, error: 'error'};
    case 'FETCH_EVENTS_FAILURE':
      return {...state, isLoading: false, error: 'err'};
    default:
      return state
  }
};

export default events;